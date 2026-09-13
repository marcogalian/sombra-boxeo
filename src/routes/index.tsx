import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Instagram, Shield } from "lucide-react";
import { LESSONS, MODULES, firstUnseen } from "@/lib/boxing/curriculum";
import { recommendedWorkoutId, WORKOUT_BY_ID } from "@/lib/boxing/workouts";
import { streakFrom, useBoxingStore } from "@/lib/boxing/store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const completed = useBoxingStore((s) => s.completedLessons);
  const lastId = useBoxingStore((s) => s.lastLessonId);
  const sessions = useBoxingStore((s) => s.sessions);
  const stance = useBoxingStore((s) => s.stance);
  const setStance = useBoxingStore((s) => s.setStance);
  const next = firstUnseen(completed);
  const last = LESSONS.find((l) => l.id === lastId);
  const continueLesson = next ?? last ?? LESSONS[0];
  const workout = WORKOUT_BY_ID[recommendedWorkoutId(completed)] ?? WORKOUT_BY_ID["primer-dia"];
  const pct = Math.round((completed.length / LESSONS.length) * 100);
  const streak = streakFrom(sessions);
  const moduleDone = (id: (typeof MODULES)[number]["id"]) => {
    const items = LESSONS.filter((l) => l.module === id);
    return items.filter((l) => completed.includes(l.id)).length;
  };

  return (
    <main>
      <section className="relative isolate overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt=""
          className="h-[min(22rem,52svh)] w-full object-cover sm:h-[28rem]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/20" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-6">
          <p className="text-[11px] tracking-[0.22em] text-accent">SIN RIVAL</p>
          <h1 className="font-display text-5xl leading-none text-fg sm:text-6xl">SOMBRA</h1>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-fg/90">
            Escuela de boxeo en casa. Moverte, golpear y defenderte — sin rival y sin prisa de
            profesional.
          </p>
        </div>
      </section>

      <div className="space-y-8 px-5 py-6">
        <div className="grid grid-cols-3 gap-2">
          <Stat label="Lecciones" value={`${completed.length}/${LESSONS.length}`} />
          <Stat label="Ruta" value={`${pct}%`} />
          <Stat label="Racha" value={`${streak} d`} />
        </div>

        <Link
          to="/aprender"
          hash="videoteca"
          className="flex items-center gap-4 rounded-2xl bg-accent p-4 text-accent-fg"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent-fg/12">
            <Instagram className="size-6" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="text-xs font-semibold tracking-[0.16em]">NUEVO · 7 REELS</span>
            <span className="mt-1 block text-base font-semibold">Vídeos cortos de Instagram</span>
            <span className="mt-1 block text-sm opacity-80">Pies, esquivas, golpes y rapidez</span>
          </span>
          <ArrowRight className="size-5 shrink-0" />
        </Link>

        <Link
          to="/plan"
          className="flex items-center gap-4 rounded-2xl border border-border bg-elevated p-4"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-fg">
            <CalendarDays className="size-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="text-xs tracking-[0.16em] text-subtle">PLAN GUIADO</span>
            <span className="mt-1 block text-base font-medium">6 semanas · 3 días</span>
            <span className="mt-1 block text-sm text-muted">Técnica, rapidez y condición</span>
          </span>
          <ArrowRight className="size-5 shrink-0 text-accent" />
        </Link>

        {continueLesson ? (
          <Link
            to="/aprender/$lessonId"
            params={{ lessonId: continueLesson.id }}
            className="block overflow-hidden rounded-2xl bg-surface"
          >
            <div className="flex gap-4 p-4">
              <img
                src={continueLesson.image}
                alt=""
                className="size-20 shrink-0 rounded-lg object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="text-[11px] tracking-[0.16em] text-subtle">CONTINUAR</p>
                <h2 className="mt-1 truncate text-base font-medium">{continueLesson.title}</h2>
                <p className="mt-1 text-sm text-muted">
                  {continueLesson.minutes} min · {continueLesson.kicker}
                </p>
              </div>
              <ArrowRight className="mt-6 size-5 shrink-0 text-accent" />
            </div>
          </Link>
        ) : null}

        <section>
          <div className="mb-3 flex items-end justify-between">
            <h2 className="font-display text-3xl">Hoy en el ring</h2>
            <Link to="/entrenar" className="text-sm text-accent">
              Ver todos
            </Link>
          </div>
          <Link
            to="/entrenar/$workoutId"
            params={{ workoutId: workout.id }}
            className="block overflow-hidden rounded-2xl bg-elevated"
          >
            <img src={workout.image} alt="" className="h-40 w-full object-cover" />
            <div className="p-4">
              <p className="text-[11px] tracking-[0.16em] text-subtle">
                {workout.durationMin} MIN · {workout.level.toUpperCase()}
              </p>
              <h3 className="mt-1 text-lg font-medium">{workout.title}</h3>
              <p className="mt-1 text-sm text-muted">{workout.focus}</p>
              <span className="mt-4 flex h-14 w-full items-center justify-center rounded-lg bg-accent text-base font-medium text-accent-fg">
                Entrar al round
              </span>
            </div>
          </Link>
        </section>

        <section>
          <h2 className="font-display text-3xl">El camino</h2>
          <ol className="mt-3 space-y-2">
            {MODULES.map((m) => {
              const total = LESSONS.filter((l) => l.module === m.id).length;
              const done = moduleDone(m.id);
              return (
                <li key={m.id}>
                  <Link
                    to="/aprender"
                    hash={m.id}
                    className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3"
                  >
                    <span className="font-display text-2xl text-subtle">{m.number}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium">{m.title}</span>
                      <span className="block text-xs text-muted">
                        {done}/{total}
                      </span>
                    </span>
                    <span className="h-1.5 w-16 overflow-hidden rounded-full bg-surface-2">
                      <span
                        className="block h-full bg-accent"
                        style={{ width: `${(done / total) * 100}%` }}
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="rounded-2xl border border-border bg-elevated p-4">
          <p className="text-[11px] tracking-[0.16em] text-subtle">TU GUARDIA</p>
          <p className="mt-2 text-sm text-muted">
            Ortodoxa: pie izquierdo delante. Zurda: pie derecho delante. Los dibujos de pies se
            invierten.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setStance("orthodox")}
              className={`min-h-12 rounded-lg border text-sm font-medium ${
                stance === "orthodox"
                  ? "border-accent bg-accent text-accent-fg"
                  : "border-border bg-transparent text-fg"
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
                  : "border-border bg-transparent text-fg"
              }`}
            >
              Zurda
            </button>
          </div>
        </section>

        <aside className="flex gap-3 rounded-2xl bg-surface p-4">
          <Shield className="mt-0.5 size-5 shrink-0 text-accent" />
          <p className="text-sm leading-relaxed text-muted">
            Esto no es para pelear con nadie. No hay sparring ni contacto. Si duele una
            articulación, paras. El saco, solo con vendas y cuando las lecciones de golpe ya estén
            limpias en el aire.
          </p>
        </aside>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-surface px-3 py-3">
      <p className="text-[10px] tracking-[0.16em] text-subtle">{label}</p>
      <p className="mt-1 font-display text-3xl tabular-nums leading-none">{value}</p>
    </div>
  );
}
