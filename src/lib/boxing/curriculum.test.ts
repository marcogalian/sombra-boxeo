import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { LESSONS, MODULES } from "./curriculum.ts";
import { WORKOUTS } from "./workouts.ts";
import { clipsForLesson } from "./lesson-videos.ts";
import { existsSync } from "node:fs";

describe("curriculum order and numbering", () => {
  it("keeps twenty lessons in a single sequence", () => {
    assert.equal(LESSONS.length, 20);
    LESSONS.forEach((lesson, i) => {
      assert.equal(lesson.order, i + 1);
    });
  });

  it("teaches lead/rear numbering, not left/right", () => {
    const text = (id: string) => {
      const l = LESSONS.find((x) => x.id === id);
      return [l?.summary, ...(l?.steps.map((s) => s.body) ?? [])].join(" ");
    };
    assert.match(text("jab"), /delante/i);
    assert.match(text("cross"), /atrás/);
    assert.match(text("ganchos"), /3 es el de delante/);
    assert.match(text("uppercut"), /5 es el de delante/);
  });

  it("covers feet before punches, punches before combos, defense before six rounds", () => {
    const idx = (id: string) => LESSONS.findIndex((l) => l.id === id);
    assert.ok(idx("postura") < idx("paso-arrastre"));
    assert.ok(idx("paso-arrastre") < idx("jab"));
    assert.ok(idx("jab") < idx("uno-dos"));
    assert.ok(idx("uno-dos") < idx("slip"));
    assert.ok(idx("slip") < idx("sombra-rounds"));
  });

  it("provides attributed local clips and posters for every lesson", () => {
    for (const lesson of LESSONS) {
      const clips = clipsForLesson(lesson.id);
      assert.ok(clips.length > 0, lesson.id);
      for (const clip of clips) {
        assert.ok(clip.creator && clip.language && clip.watchFor);
        assert.match(clip.url, /^https:\/\//);
        assert.match(clip.video, /^\/videos\/lessons\//);
        assert.ok(existsSync(new URL(`../../../public${clip.video}`, import.meta.url)), clip.video);
        assert.ok(existsSync(new URL(`../../../public${clip.image}`, import.meta.url)), clip.image);
      }
    }
    assert.notEqual(clipsForLesson("uppercut")[0].video, clipsForLesson("ganchos")[0].video);
    assert.notEqual(clipsForLesson("slip")[0].video, clipsForLesson("roll")[0].video);
  });

  it("has a module for every lesson", () => {
    const ids = new Set(MODULES.map((m) => m.id));
    for (const lesson of LESSONS) {
      assert.ok(ids.has(lesson.module), lesson.id);
    }
  });
});

describe("workouts", () => {
  it("advertises duration that matches the clock", () => {
    for (const w of WORKOUTS) {
      const seconds = w.blocks.reduce((sum, b) => {
        if (b.kind === "round") return sum + b.rounds * b.work + (b.rounds - 1) * b.rest;
        return sum + b.seconds;
      }, 0);
      const minutes = Math.round(seconds / 60);
      assert.equal(w.durationMin, minutes, w.id);
    }
  });

  it("does not tell a southpaw to put the left foot forward", () => {
    const blob = JSON.stringify(WORKOUTS);
    assert.equal(/pie izquierdo delante si eres ortodoxo/i.test(blob), false);
  });
});
