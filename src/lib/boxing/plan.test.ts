import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  TRAINING_PLAN,
  PLAN_SESSIONS,
  PLAN_WORKOUTS,
  checkpointId,
  currentPlanStage,
  stageComplete,
} from "./plan.ts";
import { LESSONS } from "./curriculum.ts";
import { WORKOUT_BY_ID } from "./workouts.ts";

describe("learning roadmap", () => {
  it("covers all 20 lessons and resolves every practice link", () => {
    assert.equal(TRAINING_PLAN.length, 8);
    assert.equal(PLAN_SESSIONS.length, 24);
    assert.equal(new Set(PLAN_SESSIONS.map((session) => session.id)).size, 24);
    assert.deepEqual(
      new Set(PLAN_SESSIONS.flatMap((session) => session.lessonIds)),
      new Set(LESSONS.map((lesson) => lesson.id)),
    );
    for (const session of PLAN_SESSIONS) assert.ok(WORKOUT_BY_ID[session.workoutId]);
  });
  it("requires practice and self-review, and returns to the earliest gap", () => {
    const first = TRAINING_PLAN[0];
    const sessions = first.sessions.map((session) => session.id);
    const checks = first.checkpoints.map((_, index) => checkpointId(1, index));
    assert.equal(currentPlanStage([], [])?.number, 1);
    assert.equal(stageComplete(first, sessions, []), false);
    assert.equal(stageComplete(first, [], checks), false);
    assert.equal(currentPlanStage(sessions, checks)?.number, 2);
    assert.equal(currentPlanStage(sessions.slice(1), checks)?.number, 1);
    assert.equal(
      currentPlanStage(
        PLAN_SESSIONS.map((session) => session.id),
        TRAINING_PLAN.flatMap((stage) =>
          stage.checkpoints.map((_, index) => checkpointId(stage.number, index)),
        ),
      ),
      undefined,
    );
  });
  it("keeps foundations before punches and uses the advertised round durations", () => {
    for (const stage of TRAINING_PLAN.slice(0, 2)) {
      for (const session of stage.sessions) assert.equal(session.lessonIds.includes("jab"), false);
    }
    for (const workout of PLAN_WORKOUTS) {
      const seconds = workout.blocks.reduce(
        (sum, block) =>
          sum +
          (block.kind === "round"
            ? block.rounds * block.work + (block.rounds - 1) * block.rest
            : block.seconds),
        0,
      );
      assert.equal(workout.durationMin, Math.round(seconds / 60));
      assert.ok(workout.blocks.some((block) => block.kind === "round" && block.rest === 60));
    }
  });
});
