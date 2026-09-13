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
import { CoachVideo } from "./coach-video";

export function VideoLibrary() {
  const [section, setSection] = useState<VideoSectionId>("piernas");
  const guides = FEATURED_GUIDES.filter((guide) => guide.section === section);
  const reels = INSTAGRAM_REELS.filter((reel) => reel.sections.includes(section));
  const current = VIDEO_SECTIONS.find((item) => item.id === section);

  return (
    <section id="videoteca" className="mt-8 scroll-mt-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.18em] text-accent">VIDEOTECA</p>
          <h2 className="mt-1 font-display text-3xl leading-none">Aprende mirando</h2>
        </div>
        <span className="text-right text-xs tabular-nums text-subtle">
          {INSTAGRAM_REELS.length} clips · {FEATURED_GUIDES.length} guías
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Vídeos cortos de entrenadores reales, ordenados por la habilidad que quieres mejorar.
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

      <div className="mt-5 flex items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-accent">
            <Instagram className="size-4" />
            <p className="text-xs tracking-[0.16em]">CLIPS PARA PRACTICAR</p>
          </div>
          <h3 className="mt-1 font-display text-2xl leading-none">Mira y repite</h3>
        </div>
        <span className="rounded-full border border-border bg-elevated px-2.5 py-1 text-[10px] text-subtle">
          {reels.length} en esta sección
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Mira a cámara lenta y repite las veces que quieras. Todo se reproduce aquí, sin entrar en
        Instagram.
      </p>

      <div className="mt-4">
        <div className="space-y-5">
          {reels.map((reel) => (
            <article
              key={reel.id}
              className="overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div className="flex items-start justify-between gap-3 p-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-accent">Vídeo de {reel.creator}</span>
                    <span className="rounded-full bg-elevated px-2 py-0.5 text-[9px] font-semibold tracking-wide text-subtle">
                      {reel.level}
                    </span>
                  </div>
                  <h4 className="mt-1 text-base font-semibold leading-snug">{reel.title}</h4>
                </div>
                <Instagram className="mt-0.5 size-5 shrink-0 text-accent" />
              </div>

              <CoachVideo reel={reel} />

              <div className="p-4">
                <p className="text-xs leading-relaxed text-muted">{reel.summary}</p>
                <p className="mt-3 border-l-2 border-accent/60 pl-2 text-xs leading-relaxed text-subtle">
                  <strong className="font-semibold text-foreground">Mira:</strong> {reel.watchFor}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  <strong className="font-semibold text-foreground">Practica:</strong>{" "}
                  {reel.practice}
                </p>
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex min-h-11 items-center justify-between rounded-xl border border-border bg-elevated px-3 text-xs font-medium text-accent"
                >
                  Autor y publicación original
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-subtle">
        <span>LECCIONES PASO A PASO</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Después del clip, practica la misma habilidad con una guía de la app.
      </p>
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
    </section>
  );
}
