import assert from "node:assert/strict";
import { mkdirSync } from "node:fs";
import { chromium } from "playwright";

const base = process.argv[2] || "http://127.0.0.1:8080";
mkdirSync("screenshots", { recursive: true });
const browser = await chromium.launch({ headless: true });
try {
  for (const width of [390, 1280]) {
    const page = await browser.newPage({ viewport: { width, height: 844 } });
    const instagramRequests = [];
    const runtimeErrors = [];
    page.on("request", (request) => {
      if (/instagram\.com|cdninstagram\.com/.test(request.url()))
        instagramRequests.push(request.url());
    });
    page.on("pageerror", (error) => runtimeErrors.push(error.message));
    await page.goto(`${base}/aprender#videoteca`);
    await page.waitForTimeout(1200);
    const checked = new Set();
    for (const category of ["Piernas", "Guardia", "Golpes", "Esquivas", "Rapidez", "En forma"]) {
      await page.getByRole("button", { name: category, exact: true }).click();
      for (const article of await page.locator("#videoteca article").all()) {
        const video = article.locator("video");
        const src = await video.getAttribute("src");
        console.log(`Checking ${width}: ${src}`);
        assert.ok(src.startsWith("/videos/coaches/"));
        assert.equal(await article.getByText(/Vídeo de @/).count(), 1);
        if (checked.has(src)) continue;
        await article.getByRole("button", { name: "Desde el inicio" }).click();
        await page
          .waitForFunction((source) => {
            const v = [...document.querySelectorAll("video")].find(
              (item) => item.getAttribute("src") === source,
            );
            return v && v.currentTime > 0.1 && !v.paused && v.videoWidth > 0;
          }, src)
          .catch(async (error) => {
            console.log(
              await video.evaluate((v) => ({
                currentTime: v.currentTime,
                paused: v.paused,
                readyState: v.readyState,
                networkState: v.networkState,
                error: v.error?.message,
                width: v.videoWidth,
                src: v.currentSrc,
              })),
            );
            throw error;
          });
        await article.getByRole("combobox").selectOption("0.5");
        assert.equal(await video.evaluate((v) => v.playbackRate), 0.5);
        assert.equal(await video.evaluate((v) => v.loop), true);
        // Force the natural end and verify that loop restarts without navigating.
        await video.evaluate((v) => {
          v.currentTime = v.duration - 0.15;
        });
        await page.waitForFunction((source) => {
          const v = [...document.querySelectorAll("video")].find(
            (item) => item.getAttribute("src") === source,
          );
          return v && v.currentTime < 1 && !v.paused;
        }, src);
        await article.getByRole("button", { name: "Repetir", exact: true }).click();
        assert.equal(await video.evaluate((v) => v.loop), false);
        await video.evaluate((v) => {
          v.pause();
          v.currentTime = 2;
        });
        await article.getByRole("button", { name: "Desde el inicio" }).click();
        assert.ok(await video.evaluate((v) => v.currentTime < 1));
        await video.evaluate((v) => v.pause());
        checked.add(src);
      }
    }
    assert.equal(checked.size, 7);
    assert.deepEqual(instagramRequests, []);
    assert.deepEqual(runtimeErrors, []);
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),
      false,
    );
    await page.getByRole("button", { name: "Piernas", exact: true }).click();
    await page.waitForTimeout(1000);
    await page.locator("#videoteca").evaluate((el) => el.scrollIntoView());
    await page.screenshot({ path: `screenshots/native-clips-${width}.png` });
    console.log(
      JSON.stringify({
        width,
        clips: checked.size,
        playback: true,
        loop: true,
        restart: true,
        slowMotion: true,
        instagramRequests: 0,
      }),
    );
    await page.close();
  }
} finally {
  await browser.close();
}
