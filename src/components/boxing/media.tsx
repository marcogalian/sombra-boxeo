import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function LessonMedia({
  image,
  video,
  title,
  scene,
}: {
  image: string;
  video?: string;
  title: string;
  scene?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl bg-elevated shadow-[var(--shadow-soft)]">
      {video ? (
        <video
          className={cn(
            "w-full bg-elevated",
            scene ? "max-h-48 object-cover" : "max-h-[42vh] object-contain",
          )}
          poster={image}
          src={video}
          controls
          playsInline
          preload="metadata"
          aria-label={title}
        />
      ) : (
        <img
          src={image}
          alt=""
          className={cn(
            "w-full bg-elevated",
            scene ? "max-h-48 object-cover" : "max-h-[42vh] object-contain",
          )}
        />
      )}
      {scene ? (
        <figcaption className="px-3 py-2 text-xs leading-relaxed text-muted">
          Foto de ambiente. No copies la pose: el modelo es el dibujo y los
          pasos.
        </figcaption>
      ) : null}
    </figure>
  );
}

export function YoutubeRef({
  id,
  title,
  start,
}: {
  id: string;
  title: string;
  start?: number;
}) {
  const [open, setOpen] = useState(true);
  const src = start
    ? `https://www.youtube-nocookie.com/embed/${id}?start=${start}&rel=0&modestbranding=1&playsinline=1`
    : `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
  return (
    <div className="rounded-xl border border-accent/35 bg-elevated">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-12 w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <span className="min-w-0">
          <span className="block text-xs tracking-[0.16em] text-accent">
            ENTRENADOR DE VERDAD · EN ESPAÑOL
          </span>
          <span className="mt-1 block text-sm text-fg">{title}</span>
        </span>
        <ChevronDown
          className={cn(
            "size-5 shrink-0 text-muted transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      {open ? (
        <div className="px-3 pb-3">
          <p className="mb-2 text-xs leading-relaxed text-muted">
            Copia a esta persona, no a una foto de gimnasio. Si el clip y los
            pasos no coinciden, mandan los pasos: están pensados para casa,
            sin rival.
          </p>
          <div className="aspect-video overflow-hidden rounded-lg bg-bg">
            <iframe
              title={title}
              src={src}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
