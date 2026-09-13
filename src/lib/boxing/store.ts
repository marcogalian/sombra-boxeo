import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SessionLog, Stance } from "./types";

type BoxingState = {
  completedLessons: string[];
  lastLessonId: string | null;
  stance: Stance;
  sessions: SessionLog[];
  completedPlanSessions: string[];
  completedPlanChecks: string[];
  togglePlanSession: (id: string) => void;
  togglePlanCheck: (id: string) => void;
  completeLesson: (id: string) => void;
  setLastLesson: (id: string) => void;
  setStance: (stance: Stance) => void;
  logSession: (workoutId: string, seconds: number) => void;
  resetProgress: () => void;
};

export const useBoxingStore = create<BoxingState>()(
  persist(
    (set) => ({
      completedLessons: [],
      lastLessonId: null,
      stance: "orthodox",
      sessions: [],
      completedPlanSessions: [],
      completedPlanChecks: [],
      togglePlanSession: (id) =>
        set((s) => ({
          completedPlanSessions: s.completedPlanSessions.includes(id)
            ? s.completedPlanSessions.filter((item) => item !== id)
            : [...s.completedPlanSessions, id],
        })),
      togglePlanCheck: (id) =>
        set((s) => ({
          completedPlanChecks: s.completedPlanChecks.includes(id)
            ? s.completedPlanChecks.filter((item) => item !== id)
            : [...s.completedPlanChecks, id],
        })),
      completeLesson: (id) =>
        set((s) => ({
          completedLessons: s.completedLessons.includes(id)
            ? s.completedLessons
            : [...s.completedLessons, id],
          lastLessonId: id,
        })),
      setLastLesson: (id) => set({ lastLessonId: id }),
      setStance: (stance) => set({ stance }),
      logSession: (workoutId, seconds) =>
        set((s) => ({
          sessions: [{ workoutId, at: new Date().toISOString(), seconds }, ...s.sessions].slice(
            0,
            120,
          ),
        })),
      resetProgress: () =>
        set({
          completedLessons: [],
          lastLessonId: null,
          sessions: [],
          completedPlanSessions: [],
          completedPlanChecks: [],
        }),
    }),
    { name: "sombra-progress" },
  ),
);

export function localDayKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function dayKey(iso: string) {
  return localDayKey(new Date(iso));
}

export function streakFrom(sessions: SessionLog[]) {
  if (sessions.length === 0) return 0;
  const days = new Set(sessions.map((s) => dayKey(s.at)));
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  if (!days.has(localDayKey(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
    if (!days.has(localDayKey(cursor))) return 0;
  }
  let streak = 0;
  while (days.has(localDayKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}
