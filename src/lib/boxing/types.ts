export type LessonLevel = "base" | "intermedio";
export type Stance = "orthodox" | "southpaw";

export type ModuleId =
  | "inicio"
  | "guardia"
  | "piernas"
  | "golpes"
  | "combos"
  | "defensa"
  | "sombra";

export type DiagramId =
  | "none"
  | "stance-feet"
  | "guard-labels"
  | "step-drag"
  | "lateral"
  | "pivot"
  | "punch-clock"
  | "jab-path"
  | "cross-path"
  | "hook-path"
  | "uppercut-path"
  | "combo-12"
  | "combo-123"
  | "slip-path"
  | "roll-path"
  | "block-cover"
  | "parry";

export type Lesson = {
  id: string;
  module: ModuleId;
  order: number;
  title: string;
  kicker: string;
  minutes: number;
  level: LessonLevel;
  image: string;
  video?: string;
  youtubeId?: string;
  youtubeTitle?: string;
  youtubeStart?: number;
  diagram: DiagramId;
  summary: string;
  why: string;
  steps: { title: string; body: string }[];
  cues: string[];
  mistakes: { bad: string; fix: string }[];
  drill: { title: string; body: string };
};

export type ModuleInfo = {
  id: ModuleId;
  number: string;
  title: string;
  blurb: string;
};

export type WorkoutLevel = "inicio" | "base" | "intermedio";

export type WorkoutBlock =
  | {
      kind: "prep";
      title: string;
      seconds: number;
      notes: string[];
    }
  | {
      kind: "round";
      title: string;
      work: number;
      rest: number;
      rounds: number;
      script: string[];
    }
  | {
      kind: "drill";
      title: string;
      seconds: number;
      notes: string[];
    }
  | {
      kind: "rest";
      title: string;
      seconds: number;
    };

export type Workout = {
  id: string;
  title: string;
  durationMin: number;
  level: WorkoutLevel;
  focus: string;
  image: string;
  video?: string;
  equipment: string[];
  /** Lección que conviene haber hecho antes. Si falta, avisamos; no bloqueamos. */
  afterLesson?: string;
  blocks: WorkoutBlock[];
};

export type SessionLog = {
  workoutId: string;
  at: string;
  seconds: number;
};
