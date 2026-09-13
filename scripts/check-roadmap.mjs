import assert from "node:assert/strict";
import { chromium } from "playwright";
import { TRAINING_PLAN, PLAN_SESSIONS, checkpointId } from "../src/lib/boxing/plan.ts";

const base = process.argv[2] || "http://127.0.0.1:8080";
const browser = await chromium.launch();
try {
  for (const width of [390, 1280]) {
    const context = await browser.newContext({ viewport: { width, height: 844 } });
    await context.addInitScript(() => {
      // Simulate an existing installation, before roadmap fields existed.
      if (!localStorage.getItem("sombra-progress"))
        localStorage.setItem(
          "sombra-progress",
          JSON.stringify({
            state: {
              completedLessons: ["postura"],
              lastLessonId: "postura",
              stance: "southpaw",
              sessions: [{ workoutId: "primer-dia", seconds: 600, at: "2026-09-12T10:00:00Z" }],
            },
            version: 0,
          }),
        );
    });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(`${base}/plan`);
    await page.waitForTimeout(800);
    assert.equal(await page.getByText("0/24", { exact: true }).count(), 1);
    assert.equal(
      await page.getByRole("navigation", { name: "Etapas de la ruta" }).getByRole("button").count(),
      8,
    );
    assert.equal(await page.locator("fieldset input:disabled").count(), 3);
    await page.screenshot({ path: `screenshots/roadmap-${width}.png`, fullPage: true });
    for (const stage of TRAINING_PLAN) {
      await page
        .getByRole("navigation", { name: "Etapas de la ruta" })
        .getByRole("button", { name: new RegExp(stage.title) })
        .click();
      const practice = page.getByRole("link", { name: "Abrir práctica guiada" });
      assert.equal(await practice.count(), 3);
      for (let index = 0; index < 3; index++)
        assert.equal(
          await practice.nth(index).getAttribute("href"),
          `/entrenar/${stage.sessions[index].workoutId}`,
        );
      assert.equal(
        await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),
        false,
      );
    }
    await page
      .getByRole("navigation", { name: "Etapas de la ruta" })
      .getByRole("button", { name: /Una base estable/ })
      .click();
    const practiced = page.getByRole("checkbox", { name: "He practicado esta sesión" });
    await practiced.nth(0).check();
    await page.reload();
    await page.waitForTimeout(500);
    assert.equal(await practiced.nth(0).isChecked(), true);
    assert.equal(await page.locator("fieldset input:disabled").count(), 3);
    await practiced.nth(1).check();
    await practiced.nth(2).check();
    assert.equal(await page.locator("fieldset input:disabled").count(), 0);
    for (let index = 0; index < 3; index++) await page.locator("fieldset input").nth(index).check();
    await page
      .getByRole("region", { name: "Tu siguiente paso" })
      .getByText("Etapa 2 · Mover los pies", { exact: true })
      .waitFor();
    await page
      .getByRole("navigation", { name: "Etapas de la ruta" })
      .getByRole("button", { name: /Una base estable/ })
      .click();
    await practiced.nth(0).uncheck();
    await page
      .getByRole("region", { name: "Tu siguiente paso" })
      .getByText("Etapa 1 · Una base estable", { exact: true })
      .waitFor();
    await page.getByRole("link", { name: "Abrir práctica guiada" }).first().click();
    await page.waitForURL("**/entrenar/ruta-1-1");
    await page.getByText(/Zurda · pie derecho delante/).waitFor();
    await page.waitForTimeout(500);
    await page.getByRole("button", { name: "Empezar", exact: true }).click();
    await page.waitForTimeout(1100);
    await page.getByRole("button", { name: "Pausa", exact: true }).click();
    const paused = await page.locator("main").innerText();
    await page.waitForTimeout(1100);
    assert.equal(await page.locator("main").innerText(), paused);
    await page.getByRole("button", { name: "Empezar", exact: true }).click();
    // Fast-forward the preview via the existing skip control; this must not mark practice done.
    for (let index = 0; index < 7; index++) {
      await page.getByRole("button", { name: "Saltar bloque" }).click();
      await page.waitForTimeout(150);
    }
    await page.getByRole("link", { name: "Registrar en mi ruta" }).click();
    await page.waitForURL("**/plan");
    assert.equal(
      await page.getByRole("checkbox", { name: "He practicado esta sesión" }).first().isChecked(),
      false,
    );
    const saved = await page.evaluate(
      () => JSON.parse(localStorage.getItem("sombra-progress")).state,
    );
    assert.deepEqual(saved.completedLessons, ["postura"]);
    assert.equal(saved.stance, "southpaw");
    assert.ok(saved.sessions.some((session) => session.workoutId === "primer-dia"));
    // Check the fully completed state, including refresh and continued access to practice.
    await page.evaluate(
      ({ sessions, checks }) => {
        const saved = JSON.parse(localStorage.getItem("sombra-progress"));
        saved.state.completedPlanSessions = sessions;
        saved.state.completedPlanChecks = checks;
        localStorage.setItem("sombra-progress", JSON.stringify(saved));
      },
      {
        sessions: PLAN_SESSIONS.map((session) => session.id),
        checks: TRAINING_PLAN.flatMap((stage) =>
          stage.checkpoints.map((_, index) => checkpointId(stage.number, index)),
        ),
      },
    );
    await page.reload();
    await page.getByText("RUTA COMPLETADA", { exact: true }).waitFor();
    assert.equal(await page.getByText("24/24", { exact: true }).count(), 1);
    assert.deepEqual(errors, []);
    console.log(
      JSON.stringify({
        width,
        stages: 8,
        sessions: 24,
        oldProgressPreserved: true,
        persistence: true,
        checkpoints: true,
        timer: true,
        noAutomaticCompletion: true,
        completedState: true,
      }),
    );
    await context.close();
  }
} finally {
  await browser.close();
}
