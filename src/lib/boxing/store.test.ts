import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { localDayKey, streakFrom } from "./store.ts";

describe("streakFrom", () => {
  it("counts local days, not UTC", () => {
    const today = localDayKey();
    const sessions = [{ workoutId: "diario", at: new Date().toISOString(), seconds: 60 }];
    assert.equal(streakFrom(sessions), 1);
    assert.equal(today.length, 10);
  });

  it("returns 0 when the last session is older than yesterday", () => {
    const old = new Date();
    old.setDate(old.getDate() - 3);
    assert.equal(
      streakFrom([{ workoutId: "diario", at: old.toISOString(), seconds: 60 }]),
      0,
    );
  });
});
