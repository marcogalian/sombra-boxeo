import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { LESSONS, MODULES, lessonsFor } from "@/lib/boxing/curriculum";
import { useBoxingStore } from "@/lib/boxing/store";

export const Route = createFileRoute("/aprender/")({ component: Escuela });

function Escuela() {
  const completed = useBoxingStore((s) => s.completedLessons);
  const done = completed.length;

  return (
    <main className="px-5 pb-8 pt-8">
      <p className="text-[11px] tracking-[0.2em] text-subtle">ESCUELA</p>
      <h1 className="font-display text-4xl leading-none text-fg sm:text-5xl">De cero al round</h1>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Veinte lecciones, en orden. Cada una tiene foto o dibujo, pasos claros
        y un ejercicio corto. Donde hace falta, un vídeo de un entrenador real
        en español — no un clip de película.
      </p>
      <p className="mt-4 text-sm text-accent">
        {done} de {LESSONS.length} hechas
      </p>

      <div className="mt-8 space-y-10">
        {MODULES.map((mod) => {
          const items = lessonsFor(mod.id);
          const got = items.filter((l) => completed.includes(l.id)).length;
          return (
            <section key={mod.id} id={mod.id} className="scroll-mt-6">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="font-display text-2xl text-subtle">{mod.number}</p>
                  <h2 className="font-display text-3xl leading-none">{mod.title}</h2>
                  <p className="mt-2 text-sm text-muted">{mod.blurb}</p>
                </div>
                <span className="text-xs tabular-nums text-subtle">
                  {got}/{items.length}
                </span>
              </div>
              <ol className="mt-4 space-y-2">
                {items.map((lesson) => {
                  const ok = completed.includes(lesson.id);
                  return (
                    <li key={lesson.id}>
                      <Link
                        to="/aprender/$lessonId"
                        params={{ lessonId: lesson.id }}
                        className="flex min-h-16 items-center gap-3 rounded-xl bg-surface px-3 py-3"
                      >
                        <span className="relative size-14 shrink-0 overflow-hidden rounded-md">
                          <img
                            src={lesson.image}
                            alt=""
                            className="size-full object-cover"
                          />
                          {ok ? (
                            <span className="absolute inset-0 flex items-center justify-center bg-bg/55">
                              <Check className="size-5 text-accent" />
                            </span>
                          ) : null}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium">
                            {lesson.order}. {lesson.title}
                          </span>
                          <span className="mt-0.5 block text-xs text-muted">
                            {lesson.minutes} min · {lesson.level === "base" ? "base" : "intermedio"}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </section>
          );
        })}
      </div>
    </main>
  );
}
