import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Footprints } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  TRAINING_PLAN,
  PLAN_SESSIONS,
  checkpointId,
  currentPlanStage,
  stageComplete,
} from "@/lib/boxing/plan";
import { LESSON_BY_ID } from "@/lib/boxing/curriculum";
import { WORKOUT_BY_ID } from "@/lib/boxing/workouts";
import { useBoxingStore } from "@/lib/boxing/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/plan")({ component: PlanPage });

function PlanPage() {
  const lessons = useBoxingStore((s) => s.completedLessons);
  const sessions = useBoxingStore((s) => s.completedPlanSessions);
  const checks = useBoxingStore((s) => s.completedPlanChecks);
  const toggleSession = useBoxingStore((s) => s.togglePlanSession);
  const toggleCheck = useBoxingStore((s) => s.togglePlanCheck);
  const [selected, setSelected] = useState<number | null>(null);
  const current = currentPlanStage(sessions, checks);
  const stage =
    TRAINING_PLAN.find((item) => item.number === selected) ?? current ?? TRAINING_PLAN[7];
  const nextSession = current?.sessions.find((item) => !sessions.includes(item.id));
  const doneCount = PLAN_SESSIONS.filter((item) => sessions.includes(item.id)).length;
  const stagesDone = TRAINING_PLAN.filter((item) => stageComplete(item, sessions, checks)).length;
  const sessionsReady = stage.sessions.every((item) => sessions.includes(item.id));

  function showCurrent() {
    setSelected(current?.number ?? 8);
  }

  return (
    <main className="px-5 pb-10 pt-4">
      <header className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild aria-label="Volver">
          <Link to="/">
            <ArrowLeft className="size-5" />
          </Link>
        </Button>
        <span className="text-xs tracking-widest text-subtle">TU RUTA DE BOXEO</span>
      </header>
      <h1 className="mt-5 font-display text-4xl leading-tight">Tu camino, paso a paso</h1>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        De la postura a tus propios rounds. Ocho etapas con tres sesiones cada una. Empieza por la
        primera y repite lo que necesites.
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <p className="rounded-xl bg-surface p-3">
          <strong className="block text-xl tabular-nums text-fg">{doneCount}/24</strong>
          <span className="text-muted">sesiones practicadas</span>
        </p>
        <p className="rounded-xl bg-surface p-3">
          <strong className="block text-xl tabular-nums text-fg">{stagesDone}/8</strong>
          <span className="text-muted">etapas completadas</span>
        </p>
      </div>
      <section
        aria-label="Tu siguiente paso"
        className="mt-5 rounded-2xl bg-accent p-5 text-accent-fg"
      >
        <p className="flex items-center gap-2 text-xs font-semibold tracking-widest">
          <Footprints className="size-4" />
          {current ? "ESTÁS AQUÍ" : "RUTA COMPLETADA"}
        </p>
        <h2 className="mt-2 font-display text-3xl">
          {current
            ? `Etapa ${current.number} · ${current.title}`
            : "Ya tienes una rutina para continuar"}
        </h2>
        <p className="mt-2 text-sm leading-relaxed">
          {current
            ? nextSession
              ? `Tu siguiente paso: ${nextSession.title}. Mira sus vídeos y después practica.`
              : "Has practicado las tres sesiones. Revisa cómo te salen los gestos antes de avanzar."
            : "Mantén tres sesiones semanales si te encajan: repaso técnico, pies y defensa, y sombra. Trabaja tu punto más débil sin aumentar todo a la vez."}
        </p>
        <a
          href="#etapa"
          onClick={showCurrent}
          className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold"
        >
          {current
            ? nextSession
              ? "Ver mi siguiente sesión"
              : "Revisar antes de avanzar"
            : "Volver a los rounds"}
          <ArrowRight className="size-4" />
        </a>
      </section>
      <details className="mt-5 rounded-xl border border-border p-4">
        <summary className="min-h-11 cursor-pointer text-sm font-medium">
          Cómo seguir esta ruta
        </summary>
        <div className="space-y-3 pb-1 text-sm leading-relaxed text-muted">
          <p>
            Prueba lunes, miércoles y viernes, dejando un día de descanso entre sesiones. Una etapa
            por semana sería unas ocho semanas; si necesitas más, repítela.
          </p>
          <p>
            En cada sesión: mira los vídeos, ensaya despacio y abre el entrenamiento guiado. El
            reloj incluye 5 minutos de calentamiento, descansos y 2 minutos para bajar el ritmo.
            Cuenta además el tiempo de ver y ensayar la técnica.
          </p>
          <p>
            Marca una sesión después de practicarla. Ver un vídeo o terminar el reloj no la marca
            por ti. Las casillas de cada etapa son tu propia revisión y se guardan en este
            dispositivo.
          </p>
          <p>
            Si pierdes la técnica, baja el ritmo o acorta el asalto. Para ante dolor o mareo. Esta
            ruta es de práctica sin contacto; para aprender con rival, busca corrección de un
            entrenador.
          </p>
        </div>
      </details>
      <nav aria-label="Etapas de la ruta" className="mt-8">
        <h2 className="font-display text-2xl">El camino completo</h2>
        <ol className="mt-3 space-y-2">
          {TRAINING_PLAN.map((item) => {
            const done = stageComplete(item, sessions, checks);
            const here = current?.number === item.number;
            return (
              <li key={item.number}>
                <button
                  type="button"
                  onClick={() => setSelected(item.number)}
                  aria-pressed={stage.number === item.number}
                  className={cn(
                    "flex min-h-16 w-full items-center gap-3 rounded-xl border p-3 text-left",
                    stage.number === item.number ? "border-accent bg-surface" : "border-border",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-9 shrink-0 items-center justify-center rounded-full text-sm tabular-nums",
                      done || here ? "bg-accent text-accent-fg" : "bg-surface text-muted",
                    )}
                  >
                    {done ? <Check className="size-4" /> : item.number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium">{item.title}</span>
                    <span className="mt-1 block text-xs text-muted">
                      {done
                        ? "Completada"
                        : here
                          ? "Estás aquí"
                          : `${item.sessions.filter((s) => sessions.includes(s.id)).length}/3 sesiones`}
                    </span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-subtle" />
                </button>
              </li>
            );
          })}
        </ol>
      </nav>
      <section
        id="etapa"
        aria-label={`Detalle de etapa ${stage.number}`}
        className="mt-8 scroll-mt-6"
      >
        <p className="text-xs tracking-widest text-accent">
          ETAPA {stage.number} · SEMANA ORIENTATIVA {stage.number}
        </p>
        <h2 className="mt-2 font-display text-3xl">{stage.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{stage.goal}</p>
        <p className="mt-2 text-xs text-subtle">
          {stage.rounds} asaltos de{" "}
          {stage.work / 60 === 1 ? "1 min" : stage.work === 90 ? "1 min 30 s" : "2 min"} · 1 min de
          descanso entre asaltos
        </p>
        <ol className="mt-5 space-y-4">
          {stage.sessions.map((item) => {
            const done = sessions.includes(item.id);
            return (
              <li key={item.id} className="rounded-2xl border border-border bg-surface p-4">
                <p className="text-xs tracking-widest text-accent">
                  {item.day} · {WORKOUT_BY_ID[item.workoutId].durationMin} MIN DE PRÁCTICA
                </p>
                <h3 className="mt-2 text-lg font-medium">{item.title}</h3>
                <p className="mt-4 text-xs tracking-widest text-subtle">1. MIRA Y ENSAYA</p>
                <ul className="mt-1">
                  {item.lessonIds.map((id) => (
                    <li key={id}>
                      <Link
                        to="/aprender/$lessonId"
                        params={{ lessonId: id }}
                        className="flex min-h-11 items-center gap-2 text-sm text-accent"
                      >
                        <span className="flex-1">{LESSON_BY_ID[id].title}</span>
                        {lessons.includes(id) ? (
                          <span className="text-xs text-muted">Vista</span>
                        ) : null}
                        <ArrowRight className="size-4 shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs tracking-widest text-subtle">2. PRACTICA CON CALMA</p>
                <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted">
                  {item.drill.map((cue) => (
                    <li key={cue}>{cue}</li>
                  ))}
                </ul>
                <Button asChild className="mt-4 min-h-12 w-full">
                  <Link to="/entrenar/$workoutId" params={{ workoutId: item.workoutId }}>
                    Abrir práctica guiada <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <label className="mt-3 flex min-h-12 cursor-pointer items-center gap-3 border-t border-border pt-3 text-sm">
                  <input
                    type="checkbox"
                    checked={done}
                    onChange={() => toggleSession(item.id)}
                    className="size-5 shrink-0 accent-accent"
                  />
                  He practicado esta sesión
                </label>
              </li>
            );
          })}
        </ol>
        <fieldset className="mt-6 rounded-2xl border border-border p-4">
          <legend className="px-2 font-display text-2xl">Antes de avanzar</legend>
          <p className="text-sm leading-relaxed text-muted">
            {sessionsReady
              ? "Compruébalo despacio. Marca solo lo que ya te sale con control."
              : "Practica las tres sesiones para activar tu revisión. Haber visto los vídeos no basta."}
          </p>
          <div className="mt-3 space-y-2">
            {stage.checkpoints.map((check, index) => (
              <label
                key={check}
                className={cn(
                  "flex min-h-12 items-start gap-3 py-2 text-sm leading-relaxed",
                  sessionsReady ? "cursor-pointer" : "text-subtle",
                )}
              >
                <input
                  type="checkbox"
                  checked={checks.includes(checkpointId(stage.number, index))}
                  disabled={!sessionsReady}
                  onChange={() => {
                    setSelected(stage.number);
                    toggleCheck(checkpointId(stage.number, index));
                  }}
                  className="mt-1 size-5 shrink-0 accent-accent"
                />
                {check}
              </label>
            ))}
          </div>
          <p className="mt-3 border-t border-border pt-3 text-sm leading-relaxed text-muted">
            {stage.repeat}
          </p>
          {stageComplete(stage, sessions, checks) ? (
            <p role="status" className="mt-3 text-sm text-accent">
              Etapa completada.{" "}
              {stage.number < 8
                ? "Puedes continuar con la siguiente."
                : "Sigue practicando y revisa tus puntos débiles."}
            </p>
          ) : null}
        </fieldset>
      </section>
      <p className="mt-8 text-xs leading-relaxed text-subtle">
        Ruta orientativa elaborada para SOMBRA. Referencia técnica:{" "}
        <a
          href="https://www.englandboxing.org/wp-content/uploads/2026/02/EB_Boxing-Coaching-Handbook-Part-1_09_02_26.pdf"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          manual de entrenadores de England Boxing
        </a>
        . Los vídeos y sus autores están en cada lección.
      </p>
    </main>
  );
}
