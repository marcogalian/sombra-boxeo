import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Instagram, Play } from "lucide-react";
import {
  FEATURED_GUIDES,
  INSTAGRAM_REELS,
  VIDEO_SECTIONS,
  type VideoSectionId,
} from "@/lib/boxing/guides";
import { cn } from "@/lib/utils";

export function VideoLibrary() {
  const [section, setSection] = useState<VideoSectionId>("piernas");
  const guides = FEATURED_GUIDES.filter((guide) => guide.section === section);
  const reels = INSTAGRAM_REELS.filter((reel) => reel.sections.includes(section));
  const current = VIDEO_SECTIONS.find((item) => item.id === section);

  return (
    <section className="mt-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.18em] text-accent">VIDEOTECA</p>
          <h2 className="mt-1 font-display text-3xl leading-none">Aprende mirando</h2>
        </div>
        <span className="text-xs tabular-nums text-subtle">
          {FEATURED_GUIDES.length + INSTAGRAM_REELS.length} vídeos
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Elige qué quieres mejorar. Cada guía une vídeo, claves técnicas y práctica.
      </p>

      <div className="-mx-5 mt-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-2">
          {VIDEO_SECTIONS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSection(item.id)}
              aria-pressed={section === item.id}
              className={cn(
                "min-h-11 rounded-full border px-4 text-sm font-medium transition-colors duration-150",
                section === item.id
                  ? "border-accent bg-accent text-accent-fg"
                  : "border-border bg-elevated text-muted",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-2 text-xs text-subtle">{current?.description}</p>
      <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-subtle">
        <span>GUÍAS DE LA APP</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {guides.map((guide) => {
          const content = (
            <>
              <span className="relative block aspect-[4/3] overflow-hidden bg-surface-2">
                <img src={guide.image} alt="" className="size-full object-cover" />
                <span className="absolute inset-0 bg-bg/20" />
                <span className="absolute bottom-2 left-2 flex size-9 items-center justify-center rounded-full bg-accent text-accent-fg shadow-[var(--shadow-soft)]">
                  <Play className="size-4 fill-current" />
                </span>
              </span>
              <span className="block p-3">
                <span className="block text-sm font-medium leading-snug">{guide.title}</span>
                <span className="mt-1 block text-xs leading-snug text-muted">{guide.detail}</span>
                <span className="mt-3 flex items-center gap-1 text-xs text-accent">
                  {guide.lessonId ? "Ver técnica" : "Entrenar"}
                  <ArrowRight className="size-3.5" />
                </span>
              </span>
            </>
          );

          return guide.lessonId ? (
            <Link
              key={guide.id}
              to="/aprender/$lessonId"
              params={{ lessonId: guide.lessonId }}
              className="overflow-hidden rounded-xl border border-border bg-surface"
            >
              {content}
            </Link>
          ) : (
            <Link
              key={guide.id}
              to="/entrenar/$workoutId"
              params={{ workoutId: guide.workoutId! }}
              className="overflow-hidden rounded-xl border border-border bg-surface"
            >
              {content}
            </Link>
          );
        })}
      </div>

      <div className="mt-7 flex items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-accent">
            <Instagram className="size-4" />
            <p className="text-xs tracking-[0.16em]">REELS SELECCIONADOS</p>
          </div>
          <h3 className="mt-1 font-display text-2xl leading-none">
            Mira una idea. Practica una idea.
          </h3>
        </div>
        <span className="rounded-full border border-border bg-elevated px-2.5 py-1 text-[10px] text-subtle">
          {reels.length} en esta sección
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Clips originales de entrenadores, con la clave que debes observar antes de repetirlos.
      </p>

      <div className="mt-3 space-y-3">
        {reels.map((reel) => (
          <a
            key={reel.id}
            href={reel.url}
            target="_blank"
            rel="noreferrer"
            className="group grid min-h-36 grid-cols-[7rem_1fr] overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50"
          >
            <span className="relative overflow-hidden bg-surface-2">
              <img
                src={reel.image}
                alt=""
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-bg/25" />
              <span className="absolute left-2 top-2 rounded-full bg-bg/80 px-2 py-1 text-[9px] font-semibold tracking-wide text-foreground backdrop-blur">
                {reel.level}
              </span>
              <span className="absolute bottom-2 left-2 flex size-9 items-center justify-center rounded-full bg-accent text-accent-fg shadow-[var(--shadow-soft)]">
                <Play className="size-4 fill-current" />
              </span>
            </span>
            <span className="flex min-w-0 flex-col p-3.5">
              <span className="flex items-start justify-between gap-2">
                <span className="text-[11px] font-medium text-accent">{reel.creator}</span>
                <ExternalLink className="size-3.5 shrink-0 text-subtle" />
              </span>
              <span className="mt-1 block text-base font-semibold leading-snug">{reel.title}</span>
              <span className="mt-1 block text-xs leading-relaxed text-muted">{reel.summary}</span>
              <span className="mt-3 block border-l-2 border-accent/60 pl-2 text-[11px] leading-relaxed text-subtle">
                <strong className="font-semibold text-foreground">Mira:</strong> {reel.watchFor}
              </span>
              <span className="mt-2 block text-[11px] leading-relaxed text-muted">
                <strong className="font-semibold text-foreground">Practica:</strong> {reel.practice}
              </span>
            </span>
          </a>
        ))}
      </div>
      <p className="mt-3 text-[11px] leading-relaxed text-subtle">
        Instagram puede pedir inicio de sesión. Los vídeos se abren siempre en la publicación
        original para respetar al creador.
      </p>
    </section>
  );
}
