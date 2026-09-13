import { ExternalLink } from "lucide-react";
import { clipsForLesson } from "@/lib/boxing/lesson-videos";
import type { Lesson } from "@/lib/boxing/types";
import { CoachVideo } from "./coach-video";

export function LessonCoach({ lesson }: { lesson: Lesson }) {
  return (
    <section aria-label="Demostraciones de la lección" className="space-y-4">
      <div>
        <p className="text-xs tracking-widest text-accent">MIRA LA TÉCNICA</p>
        <h2 className="mt-1 font-display text-2xl">Aprende con un entrenador</h2>
        <p className="mt-2 text-sm text-muted">
          Repite el clip, baja la velocidad y practica el gesto con control.
        </p>
      </div>
      {clipsForLesson(lesson.id).map((clip) => (
        <article
          key={clip.id}
          className="overflow-hidden rounded-2xl border border-border bg-surface"
        >
          <div className="p-4">
            <h3 className="font-medium">{clip.title}</h3>
            <p className="mt-1 text-xs text-accent">Vídeo de {clip.creator}</p>
            <p className="mt-1 text-xs text-muted">{clip.language}</p>
          </div>
          <CoachVideo key={`${lesson.id}-${clip.id}`} reel={clip} />
          <div className="space-y-2 p-4 pt-0">
            <p className="border-l-2 border-accent pl-3 text-sm leading-relaxed text-muted">
              {clip.watchFor}
            </p>
            <a
              href={clip.url}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 items-center gap-2 text-xs text-subtle"
            >
              Fuente y autor <ExternalLink className="size-3" />
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}
