import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Dumbbell } from "lucide-react";
import { PunchLegend, TechniqueDiagram } from "@/components/boxing/diagrams";
import { LessonCoach } from "@/components/boxing/lesson-coach";
import { LessonMedia } from "@/components/boxing/media";
import { Button } from "@/components/ui/button";
import {
  LESSON_BY_ID,
  nextLesson,
  prevLesson,
} from "@/lib/boxing/curriculum";
import { useBoxingStore } from "@/lib/boxing/store";
import { PRACTICE_BY_LESSON } from "@/lib/boxing/guides";

export const Route = createFileRoute("/aprender/$lessonId")({
  component: LessonPage,
});

function LessonPage() {
  const { lessonId } = Route.useParams();
  const lesson = LESSON_BY_ID[lessonId];
  const stance = useBoxingStore((s) => s.stance);
  const completed = useBoxingStore((s) => s.completedLessons);
  const completeLesson = useBoxingStore((s) => s.completeLesson);
  const setLastLesson = useBoxingStore((s) => s.setLastLesson);

  if (!lesson) return <Navigate to="/aprender" />;

  const done = completed.includes(lesson.id);
  const next = nextLesson(lesson.id);
  const prev = prevLesson(lesson.id);
  const hasDiagram = lesson.diagram !== "none";
  const practiceId = PRACTICE_BY_LESSON[lesson.id];

  return (
    <main className="pb-8">
      <header className="flex items-center gap-3 px-3 pt-3">
        <Button variant="ghost" size="icon" asChild aria-label="Volver">
          <Link to="/aprender">
            <ArrowLeft className="size-5" />
          </Link>
        </Button>
        <div className="min-w-0">
          <p className="text-xs tracking-[0.16em] text-subtle">
            {lesson.kicker} · {lesson.minutes} MIN
          </p>
          <h1 className="text-balance font-display text-3xl leading-none">
            {lesson.title}
          </h1>
        </div>
      </header>

      <div className="mt-5 space-y-8 px-5">
        <p className="text-base leading-relaxed text-fg">{lesson.summary}</p>

        {stance === "southpaw" ? (
          <p className="rounded-lg bg-surface px-3 py-2 text-xs leading-relaxed text-muted">
            Guardia zurda activa: el 1 sigue siendo el jab (ahora con la
            derecha). Los dibujos de pies ya están espejados.
          </p>
        ) : null}

        <LessonCoach lesson={lesson} />

        {practiceId ? (
          <Button asChild size="lg" className="min-h-14 w-full">
            <Link to="/entrenar/$workoutId" params={{ workoutId: practiceId }}>
              <Dumbbell className="size-5" />
              Practicar ahora
            </Link>
          </Button>
        ) : null}

        {hasDiagram ? (
          <section>
            <h2 className="text-xs tracking-[0.18em] text-subtle">
              ESTO SE COPIA
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              El dibujo es el modelo. Las fotos del gimnasio son ambiente: no
              copies mentón alto, gancho abierto ni pies de frente.
            </p>
            <TechniqueDiagram
              id={lesson.diagram}
              stance={stance}
              className="mt-3"
            />
          </section>
        ) : (
          <LessonMedia image={lesson.image} video={lesson.video} title={lesson.title} />
        )}

        {lesson.module === "golpes" || lesson.module === "combos" ? (
          <section>
            <h2 className="text-xs tracking-[0.18em] text-subtle">
              LOS NÚMEROS
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Delante y atrás, no izquierda y derecha. El 1 es el jab (mano de
              delante) también en zurda. En algunos gimnasios el 3 es siempre
              el gancho izquierdo: aquí el 3 es el de delante, para que la
              zurda no se rompa.
            </p>
            <div className="mt-3">
              <PunchLegend />
            </div>
          </section>
        ) : null}

        <section>
          <h2 className="font-display text-3xl">Por qué importa</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{lesson.why}</p>
        </section>

        <section>
          <h2 className="font-display text-3xl">Paso a paso</h2>
          <ol className="mt-4 space-y-3">
            {lesson.steps.map((step, i) => (
              <li key={step.title} className="rounded-xl bg-surface p-4">
                <p className="text-xs tabular-nums tracking-[0.16em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-base font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="font-display text-3xl">Lo que dice el entrenador</h2>
          <ul className="mt-3 space-y-2">
            {lesson.cues.map((c) => (
              <li
                key={c}
                className="border-l-2 border-accent/70 pl-3 text-sm leading-relaxed text-fg"
              >
                {c}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-3xl">Errores típicos</h2>
          <ul className="mt-3 space-y-3">
            {lesson.mistakes.map((m) => (
              <li key={m.bad} className="rounded-xl bg-elevated p-4">
                <p className="text-sm text-fg">
                  <span className="text-subtle">Mal. </span>
                  {m.bad}
                </p>
                <p className="mt-2 text-sm text-muted">
                  <span className="text-accent">Mejor. </span>
                  {m.fix}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl bg-surface p-4">
          <p className="text-xs tracking-[0.16em] text-subtle">EJERCICIO</p>
          <h2 className="mt-1 text-lg font-medium">{lesson.drill.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{lesson.drill.body}</p>
        </section>

        {hasDiagram && !lesson.video ? (
          <LessonMedia
            image={lesson.image}
            video={lesson.video}
            title={lesson.title}
            scene
          />
        ) : null}

        <div className="flex flex-col gap-3">
          <Button
            size="lg"
            variant={done ? "mute" : "solid"}
            onClick={() => {
              completeLesson(lesson.id);
              setLastLesson(lesson.id);
            }}
          >
            <Check className="size-4" />
            {done ? "Hecha" : "Marcar como hecha"}
          </Button>
          <div className="grid grid-cols-2 gap-2">
            {prev ? (
              <Button variant="outline" asChild>
                <Link
                  to="/aprender/$lessonId"
                  params={{ lessonId: prev.id }}
                  onClick={() => setLastLesson(prev.id)}
                >
                  <ArrowLeft className="size-4" />
                  Anterior
                </Link>
              </Button>
            ) : (
              <span />
            )}
            {next ? (
              <Button
                variant="outline"
                asChild
                onClick={() => setLastLesson(next.id)}
              >
                <Link to="/aprender/$lessonId" params={{ lessonId: next.id }}>
                  Siguiente
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            ) : (
              <Button variant="outline" asChild>
                <Link to="/entrenar">Ir al ring</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
