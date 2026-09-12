import { useState } from "react";
import { CheckCircle2, ExternalLink, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { demoForLesson } from "@/lib/boxing/guides";
import type { Lesson } from "@/lib/boxing/types";

export function LessonCoach({ lesson }: { lesson: Lesson }) {
  const demo = lesson.video ?? demoForLesson(lesson.id);
  const hasCoach = Boolean(lesson.youtubeId);
  const [source, setSource] = useState<"clip" | "coach">(
    demo ? "clip" : "coach",
  );

  if (!demo && !hasCoach) return null;

  const youtubeSrc = lesson.youtubeId
    ? `https://www.youtube-nocookie.com/embed/${lesson.youtubeId}?${
        lesson.youtubeStart ? `start=${lesson.youtubeStart}&` : ""
      }rel=0&modestbranding=1&playsinline=1`
    : "";

  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-elevated shadow-[var(--shadow-soft)]">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-fg">
            <Play className="size-4 fill-current" />
          </span>
          <div className="min-w-0">
            <p className="text-xs tracking-[0.16em] text-accent">MIRA PRIMERO</p>
            <h2 className="mt-1 text-lg font-medium">Copia el movimiento</h2>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              Mira una vez, repite sin fuerza y vuelve al vídeo para corregirte.
            </p>
          </div>
        </div>

        {demo && hasCoach ? (
          <div className="mt-4 grid grid-cols-2 gap-1 rounded-lg bg-surface p-1">
            <SourceButton
              active={source === "clip"}
              onClick={() => setSource("clip")}
            >
              Clip corto
            </SourceButton>
            <SourceButton
              active={source === "coach"}
              onClick={() => setSource("coach")}
            >
              Explicación
            </SourceButton>
          </div>
        ) : null}
      </div>

      <div className="bg-bg">
        {source === "clip" && demo ? (
          <video
            className="aspect-video w-full object-contain"
            poster={lesson.image}
            src={demo}
            controls
            playsInline
            preload="metadata"
            aria-label={`Demostración: ${lesson.title}`}
          />
        ) : hasCoach ? (
          <iframe
            title={lesson.youtubeTitle ?? `Explicación: ${lesson.title}`}
            src={youtubeSrc}
            className="aspect-video w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : null}
      </div>

      <div className="space-y-2 p-4">
        {lesson.cues.slice(0, 2).map((cue) => (
          <p key={cue} className="flex gap-2 text-xs leading-relaxed text-muted">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
            <span>{cue}</span>
          </p>
        ))}
        {source === "coach" && lesson.youtubeTitle ? (
          <div className="flex items-center justify-between gap-3 border-t border-border pt-3">
            <p className="min-w-0 text-xs text-subtle">Fuente: {lesson.youtubeTitle}</p>
            <a
              href={`https://www.youtube.com/watch?v=${lesson.youtubeId}${
                lesson.youtubeStart ? `&t=${lesson.youtubeStart}s` : ""
              }`}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 shrink-0 items-center gap-1 text-xs text-accent"
            >
              Abrir <ExternalLink className="size-3.5" />
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function SourceButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "min-h-11 rounded-md px-3 text-sm font-medium transition-colors duration-150",
        active ? "bg-accent text-accent-fg" : "text-muted",
      )}
    >
      {children}
    </button>
  );
}
