import { createFileRoute, Link } from "@tanstack/react-router";
import { LESSONS } from "@/lib/boxing/curriculum";
import { WORKOUT_BY_ID } from "@/lib/boxing/workouts";
import { streakFrom, useBoxingStore } from "@/lib/boxing/store";
import { Button } from "@/components/ui/button";
import { formatMmSs } from "@/lib/utils";

export const Route = createFileRoute("/progreso")({ component: LogPage });

function LogPage() {
  const completed = useBoxingStore((s) => s.completedLessons);
  const sessions = useBoxingStore((s) => s.sessions);
  const stance = useBoxingStore((s) => s.stance);
  const setStance = useBoxingStore((s) => s.setStance);
  const resetProgress = useBoxingStore((s) => s.resetProgress);
  const minutes = Math.round(
    sessions.reduce((a, s) => a + s.seconds, 0) / 60,
  );
  const streak = streakFrom(sessions);

  return (
    <main className="px-5 pb-10 pt-8">
      <p className="text-[11px] tracking-[0.2em] text-subtle">PROGRESO</p>
      <h1 className="font-display text-4xl leading-none sm:text-5xl">Tu trabajo</h1>
      <p className="mt-3 text-sm text-muted">
        Se guarda en este aparato. No hay cuentas ni rivales.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-2">
        <Tile label="Lecciones" value={`${completed.length}/${LESSONS.length}`} />
        <Tile label="Sesiones" value={`${sessions.length}`} />
        <Tile label="Minutos" value={`${minutes}`} />
        <Tile label="Racha" value={`${streak} d`} />
      </div>

      <section className="mt-8">
        <h2 className="font-display text-3xl">Guardia</h2>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setStance("orthodox")}
            className={`min-h-12 rounded-lg border text-sm font-medium ${
              stance === "orthodox"
                ? "border-accent bg-accent text-accent-fg"
                : "border-border"
            }`}
          >
            Ortodoxa
          </button>
          <button
            type="button"
            onClick={() => setStance("southpaw")}
            className={`min-h-12 rounded-lg border text-sm font-medium ${
              stance === "southpaw"
                ? "border-accent bg-accent text-accent-fg"
                : "border-border"
            }`}
          >
            Zurda
          </button>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-3xl">Sesiones</h2>
        {sessions.length === 0 ? (
          <p className="mt-3 text-sm text-muted">
            Todavía no hay asaltos. Entra a Ring y termina uno.
          </p>
        ) : (
          <ol className="mt-3 space-y-2">
            {sessions.slice(0, 20).map((s) => {
              const w = WORKOUT_BY_ID[s.workoutId];
              const day = new Date(s.at);
              return (
                <li
                  key={`${s.at}-${s.workoutId}`}
                  className="flex items-center justify-between rounded-xl bg-surface px-4 py-3"
                >
                  <span>
                    <span className="block text-sm font-medium">
                      {w?.title ?? s.workoutId}
                    </span>
                    <span className="block text-xs text-muted">
                      {day.toLocaleDateString("es", {
                        day: "numeric",
                        month: "short",
                      })}
                    </span>
                  </span>
                  <span className="text-sm tabular-nums text-accent">
                    {formatMmSs(s.seconds)}
                  </span>
                </li>
              );
            })}
          </ol>
        )}
      </section>

      <section className="mt-8">
        <h2 className="font-display text-3xl">Lecciones hechas</h2>
        {completed.length === 0 ? (
          <p className="mt-3 text-sm text-muted">
            Empieza por{" "}
            <Link to="/aprender/$lessonId" params={{ lessonId: "para-que" }} className="text-accent">
              la primera lección
            </Link>
            .
          </p>
        ) : (
          <ul className="mt-3 space-y-1">
            {LESSONS.filter((l) => completed.includes(l.id)).map((l) => (
              <li key={l.id}>
                <Link
                  to="/aprender/$lessonId"
                  params={{ lessonId: l.id }}
                  className="block rounded-lg px-1 py-2 text-sm text-fg"
                >
                  {l.order}. {l.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <Button
        variant="outline"
        className="mt-10 w-full"
        onClick={() => {
          if (window.confirm("¿Borrar lecciones y sesiones de este aparato?")) {
            resetProgress();
          }
        }}
      >
        Borrar progreso
      </Button>
    </main>
  );
}

function Tile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-surface px-4 py-4">
      <p className="text-[10px] tracking-[0.16em] text-subtle">{label}</p>
      <p className="mt-1 font-display text-4xl tabular-nums leading-none">{value}</p>
    </div>
  );
}
