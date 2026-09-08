import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Pause, Play, SkipForward } from "lucide-react";
import { ringBell } from "@/lib/boxing/bell";
import { useBoxingStore } from "@/lib/boxing/store";
import type { Stance, Workout, WorkoutBlock } from "@/lib/boxing/types";
import { formatMmSs } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type FlatStep = {
  title: string;
  seconds: number;
  notes: string[];
  kind: WorkoutBlock["kind"] | "work" | "between";
  roundLabel?: string;
};

function kindLabel(kind: FlatStep["kind"]) {
  if (kind === "prep") return "PREPARACIÓN";
  if (kind === "drill") return "EJERCICIO";
  if (kind === "rest" || kind === "between") return "DESCANSO";
  if (kind === "work" || kind === "round") return "ASALTO";
  return "BLOQUE";
}

function flatten(workout: Workout): FlatStep[] {
  const out: FlatStep[] = [];
  for (const block of workout.blocks) {
    if (block.kind === "round") {
      for (let r = 1; r <= block.rounds; r++) {
        out.push({
          kind: "work",
          title: block.title,
          seconds: block.work,
          notes: block.script,
          roundLabel: `Asalto ${r} / ${block.rounds}`,
        });
        if (r < block.rounds && block.rest > 0) {
          out.push({
            kind: "between",
            title: "Descanso",
            seconds: block.rest,
            notes: ["Anda. Manos sueltas. El siguiente asalto empieza en guardia."],
            roundLabel: `Tras el asalto ${r}`,
          });
        }
      }
    } else if (block.kind === "rest") {
      out.push({
        kind: "rest",
        title: block.title,
        seconds: block.seconds,
        notes: ["Respira. No te sientes."],
      });
    } else {
      out.push({
        kind: block.kind,
        title: block.title,
        seconds: block.seconds,
        notes: block.notes,
      });
    }
  }
  return out;
}

function stanceLine(stance: Stance) {
  return stance === "southpaw"
    ? "Zurda · pie derecho delante · el 1 es el jab de la derecha"
    : "Ortodoxa · pie izquierdo delante · el 1 es el jab de la izquierda";
}

export function WorkoutPlayer({ workout }: { workout: Workout }) {
  const steps = useMemo(() => flatten(workout), [workout]);
  const logSession = useBoxingStore((s) => s.logSession);
  const stance = useBoxingStore((s) => s.stance);
  const [index, setIndex] = useState(0);
  const [left, setLeft] = useState(steps[0]?.seconds ?? 0);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const startedAt = useRef<number | null>(null);
  const elapsed = useRef(0);
  const wake = useRef<WakeLockSentinel | null>(null);
  const step = steps[index];

  useEffect(() => {
    setLeft(steps[0]?.seconds ?? 0);
    setIndex(0);
    setRunning(false);
    setDone(false);
    startedAt.current = null;
    elapsed.current = 0;
  }, [workout.id, steps]);

  useEffect(() => {
    if (!running) {
      void wake.current?.release().catch(() => undefined);
      wake.current = null;
      return;
    }
    if (!("wakeLock" in navigator)) return;
    void navigator.wakeLock
      .request("screen")
      .then((lock) => {
        wake.current = lock;
      })
      .catch(() => undefined);
    return () => {
      void wake.current?.release().catch(() => undefined);
      wake.current = null;
    };
  }, [running]);

  useEffect(() => {
    if (!running || done || !step) return;
    const id = window.setInterval(() => {
      setLeft((v) => {
        if (v <= 1) {
          window.clearInterval(id);
          return 0;
        }
        return v - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [running, done, step, index]);

  useEffect(() => {
    if (left !== 0 || !running || done || !step) return;
    const isWork = step.kind === "work";
    ringBell(isWork ? 3 : 1);
    if (index >= steps.length - 1) {
      setRunning(false);
      setDone(true);
      const total = elapsed.current + (startedAt.current ? Date.now() - startedAt.current : 0);
      logSession(workout.id, Math.round(total / 1000));
      return;
    }
    setIndex((i) => i + 1);
  }, [left, running, done, step, index, steps.length, logSession, workout.id]);

  useEffect(() => {
    if (!step) return;
    setLeft(step.seconds);
    if (running && (step.kind === "work" || step.kind === "between")) {
      ringBell(1);
    }
  }, [index]); // eslint-disable-line react-hooks/exhaustive-deps

  const totalSeconds = steps.reduce((a, s) => a + s.seconds, 0);
  const passed =
    steps.slice(0, index).reduce((a, s) => a + s.seconds, 0) +
    ((step?.seconds ?? 0) - left);
  const progress = totalSeconds ? Math.min(1, passed / totalSeconds) : 0;
  const work = step?.kind === "work";
  const restful = step?.kind === "between" || step?.kind === "rest";

  function toggle() {
    if (done) return;
    if (!running) {
      startedAt.current = Date.now();
      if (index === 0 && left === (step?.seconds ?? 0)) ringBell(1);
      setRunning(true);
    } else {
      if (startedAt.current) {
        elapsed.current += Date.now() - startedAt.current;
        startedAt.current = null;
      }
      setRunning(false);
    }
  }

  function skip() {
    if (done || !step) return;
    if (index >= steps.length - 1) {
      setLeft(0);
      return;
    }
    setIndex((i) => i + 1);
  }

  if (done) {
    return (
      <div className="flex min-h-[70dvh] flex-col justify-center px-5 py-10 text-center">
        <p className="font-display text-5xl text-accent">LISTO</p>
        <h1 className="mt-3 text-2xl font-medium">{workout.title}</h1>
        <p className="mt-2 text-muted">
          Sesión guardada en el log. Anda un minuto más y bebe agua.
        </p>
        <div className="mt-8 flex flex-col gap-3">
          <Button asChild size="lg">
            <Link to="/entrenar">Volver al ring</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/progreso">Ver el log</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (!step) return null;

  return (
    <div className="flex min-h-[calc(100dvh-5.5rem)] flex-col px-5 pb-2 pt-4">
      <div className="h-1 overflow-hidden rounded-full bg-surface-2">
        <div
          className="h-full bg-accent transition-[width] duration-500 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted">{stanceLine(stance)}</p>
      <p className="mt-3 text-xs tracking-[0.18em] text-subtle">
        {step.roundLabel ?? kindLabel(step.kind)}
      </p>
      <h2 className="mt-1 font-display text-4xl text-fg">{step.title}</h2>
      <div
        className={`mt-6 flex flex-col items-center rounded-2xl px-4 py-8 ${
          work ? "bg-surface" : restful ? "bg-elevated" : "bg-surface-2"
        }`}
      >
        <p className="font-display text-7xl tabular-nums leading-none tracking-wide text-fg">
          {formatMmSs(left)}
        </p>
        <p className="mt-3 text-sm text-muted">
          {work ? "Trabajo" : restful ? "Pausa" : "Bloque"}
        </p>
      </div>
      <ul className="mt-5 flex-1 space-y-2">
        {step.notes.map((n) => (
          <li
            key={n}
            className="rounded-lg border border-border bg-elevated px-4 py-3 text-sm leading-relaxed text-fg"
          >
            {n}
          </li>
        ))}
      </ul>
      <div
        className="sticky bottom-0 z-20 mt-6 -mx-5 border-t border-border bg-bg/95 px-5 pt-3 backdrop-blur-md"
        style={{ paddingBottom: "max(0.85rem, env(safe-area-inset-bottom))" }}
      >
        <div className="flex gap-3">
          <Button size="lg" className="min-h-14 flex-1" onClick={toggle}>
            {running ? <Pause className="size-5" /> : <Play className="size-5" />}
            {running ? "Pausa" : "Empezar"}
          </Button>
          <Button size="lg" variant="outline" className="min-h-14 min-w-14" onClick={skip} aria-label="Saltar bloque">
            <SkipForward className="size-5" />
          </Button>
        </div>
        <p className="mt-2 text-center text-xs text-subtle">
          Paso {index + 1} de {steps.length}
        </p>
      </div>
    </div>
  );
}
