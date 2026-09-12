import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TRAINING_PLAN } from "@/lib/boxing/plan";
import { useBoxingStore } from "@/lib/boxing/store";

export const Route = createFileRoute("/plan")({ component: PlanPage });

function PlanPage() {
  const completed = useBoxingStore((s) => s.completedLessons);

  return (
    <main className="px-5 pb-8 pt-4">
      <header className="-ml-2 flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild aria-label="Volver">
          <Link to="/">
            <ArrowLeft className="size-5" />
          </Link>
        </Button>
        <span className="text-xs tracking-[0.18em] text-subtle">TU RUTA</span>
      </header>

      <div className="mt-5 flex items-start gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-fg">
          <CalendarDays className="size-5" />
        </span>
        <div>
          <h1 className="font-display text-4xl leading-none">6 semanas de boxeo</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Tres sesiones por semana. Deja al menos un día suave o de descanso
            cuando las piernas o los hombros sigan cargados.
          </p>
        </div>
      </div>

      <ol className="mt-8 space-y-8">
        {TRAINING_PLAN.map((week) => {
          const learned = week.sessions.filter(
            (session) => session.lessonId && completed.includes(session.lessonId),
          ).length;
          return (
            <li key={week.number}>
              <div className="flex items-end justify-between gap-4 border-b border-border pb-3">
                <div>
                  <p className="font-display text-2xl text-subtle">
                    SEMANA {String(week.number).padStart(2, "0")}
                  </p>
                  <h2 className="font-display text-3xl leading-none">{week.title}</h2>
                </div>
                {learned > 0 ? (
                  <span className="text-xs tabular-nums text-accent">{learned} vistas</span>
                ) : null}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{week.goal}</p>
              <ol className="mt-3 space-y-2">
                {week.sessions.map((session) => {
                  const done = session.lessonId
                    ? completed.includes(session.lessonId)
                    : false;
                  return (
                    <li key={`${week.number}-${session.day}`} className="rounded-xl bg-surface p-4">
                      <div className="flex gap-3">
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-xs text-subtle">
                          {done ? <Check className="size-4 text-accent" /> : session.day.slice(-1)}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs tracking-[0.14em] text-subtle">{session.day}</p>
                          <h3 className="mt-1 text-base font-medium">{session.title}</h3>
                          <p className="mt-1 text-sm text-muted">{session.detail}</p>
                          <div className="mt-3 flex flex-wrap gap-3">
                            {session.lessonId ? (
                              <Link
                                to="/aprender/$lessonId"
                                params={{ lessonId: session.lessonId }}
                                className="flex min-h-11 items-center gap-1 text-sm text-accent"
                              >
                                Ver técnica <ArrowRight className="size-4" />
                              </Link>
                            ) : null}
                            <Link
                              to="/entrenar/$workoutId"
                              params={{ workoutId: session.workoutId }}
                              className="flex min-h-11 items-center gap-1 text-sm text-accent"
                            >
                              Entrenar <ArrowRight className="size-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
