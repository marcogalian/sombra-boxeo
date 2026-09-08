import { createFileRoute, Link } from "@tanstack/react-router";
import { LESSON_BY_ID } from "@/lib/boxing/curriculum";
import { WORKOUTS } from "@/lib/boxing/workouts";
import { useBoxingStore } from "@/lib/boxing/store";

export const Route = createFileRoute("/entrenar/")({ component: Ring });

const LEVEL: Record<string, string> = {
  inicio: "Primeros días",
  base: "Base",
  intermedio: "Intermedio",
};

function Ring() {
  const completed = useBoxingStore((s) => s.completedLessons);

  return (
    <main className="px-5 pb-8 pt-8">
      <p className="text-[11px] tracking-[0.2em] text-subtle">RING</p>
      <h1 className="font-display text-4xl leading-none sm:text-5xl">Entrenos</h1>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        El reloj lleva los asaltos. Tú solo sigues las indicaciones en pantalla.
        Campana al empezar y al terminar cada uno.
      </p>
      <ul className="mt-6 space-y-4">
        {WORKOUTS.map((w) => {
          const need = w.afterLesson ? LESSON_BY_ID[w.afterLesson] : null;
          const ready = !need || completed.includes(need.id);
          return (
            <li key={w.id}>
              <Link
                to="/entrenar/$workoutId"
                params={{ workoutId: w.id }}
                className="block overflow-hidden rounded-2xl bg-surface"
              >
                <img src={w.image} alt="" className="h-36 w-full object-cover" />
                <div className="p-4">
                  <p className="text-[11px] tracking-[0.16em] text-subtle">
                    {w.durationMin} MIN · {LEVEL[w.level]}
                  </p>
                  <h2 className="mt-1 text-lg font-medium">{w.title}</h2>
                  <p className="mt-1 text-sm text-muted">{w.focus}</p>
                  {need && !ready ? (
                    <p className="mt-2 text-xs text-warn">
                      Mejor después de la lección «{need.title}». Si entras
                      ahora, no improvises: sigue solo lo que salga en pantalla.
                    </p>
                  ) : null}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
