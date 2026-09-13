import assert from "node:assert/strict";
import { chromium } from "playwright";
import { LESSON_CLIPS } from "../src/lib/boxing/lesson-videos.ts";

const base = process.argv[2] || "http://127.0.0.1:8080";
const browser = await chromium.launch({ headless: true });
try {
  for (const width of [390, 1280]) {
    const page = await browser.newPage({ viewport: { width, height: 844 } });
    const errors = [];
    const externalPlayers = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("request", (request) => {
      if (/instagram\.com|youtube\.com|youtube-nocookie\.com|googlevideo\.com/.test(request.url()))
        externalPlayers.push(request.url());
    });
    await page.goto(`${base}/aprender`);
    const lessons = [
      ...new Set(
        await page
          .locator('a[href^="/aprender/"]')
          .evaluateAll((links) =>
            links.map((link) => new URL(link.href).pathname.split("/").pop()).filter(Boolean),
          ),
      ),
    ];
    assert.equal(lessons.length, 20);
    const files = new Set();
    for (const id of lessons) {
      await page.goto(`${base}/aprender/${id}`);
      await page.waitForTimeout(700);
      const section = page.getByRole("region", { name: "Demostraciones de la lección" });
      await section.waitFor();
      const clips = LESSON_CLIPS[id];
      assert.ok(clips?.length, `No clips for ${id}`);
      assert.equal(await page.locator("iframe").count(), 0);
      assert.equal(await page.locator("video").count(), clips.length);
      for (let index = 0; index < clips.length; index++) {
        const clip = clips[index];
        const article = section.locator("article").nth(index);
        const video = article.locator("video");
        assert.equal(await video.getAttribute("src"), clip.video);
        assert.equal(await video.getAttribute("poster"), clip.image);
        await article.getByText(`Vídeo de ${clip.creator}`, { exact: true }).waitFor();
        await article.getByRole("button", { name: "Desde el inicio" }).click();
        await page.waitForFunction((src) => {
          const v = [...document.querySelectorAll("video")].find(
            (v) => v.getAttribute("src") === src,
          );
          return v && v.currentTime > 0.15 && !v.paused && v.videoWidth > 0;
        }, clip.video);
        assert.equal(
          await page
            .locator("video")
            .evaluateAll((videos) => videos.filter((v) => !v.paused).length),
          1,
        );
        await article.getByRole("combobox").selectOption("0.5");
        assert.equal(await video.evaluate((v) => v.playbackRate), 0.5);
        assert.equal(await video.evaluate((v) => v.loop), true);
        await video.evaluate((v) => {
          v.currentTime = v.duration - 0.15;
        });
        await page.waitForFunction((src) => {
          const v = [...document.querySelectorAll("video")].find(
            (v) => v.getAttribute("src") === src,
          );
          return v && v.currentTime < 1 && !v.paused;
        }, clip.video);
        await video.evaluate((v) => v.pause());
        files.add(clip.video);
      }
      assert.equal(
        await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),
        false,
        `${id} overflow`,
      );
      console.log(`${width}: ${id} OK (${clips.length} clips)`);
    }
    assert.equal(files.size, 23);
    await page.goto(`${base}/aprender/jab`);
    await page.waitForTimeout(700);
    await page.getByRole("combobox").selectOption("0.5");
    await page.getByRole("button", { name: "Repetir", exact: true }).click();
    await page.getByRole("link", { name: "Siguiente", exact: true }).click();
    await page.waitForURL("**/aprender/cross");
    assert.equal(await page.locator("video").getAttribute("src"), "/videos/lessons/cross.mp4");
    assert.equal(await page.getByRole("combobox").inputValue(), "1");
    assert.equal(await page.locator("video").evaluate((v) => v.loop), true);
    await page.goto(`${base}/aprender/jab`);
    await page
      .getByRole("region", { name: "Demostraciones de la lección" })
      .scrollIntoViewIfNeeded();
    await page.screenshot({ path: `screenshots/lesson-jab-${width}.png` });
    assert.deepEqual(errors, []);
    assert.deepEqual(externalPlayers, []);
    console.log(
      JSON.stringify({
        width,
        lessons: lessons.length,
        files: files.size,
        playback: true,
        slowMotion: true,
        loop: true,
        navigation: true,
        externalPlayers: 0,
      }),
    );
    await page.close();
  }
} finally {
  await browser.close();
}
