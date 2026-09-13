import { useRef, useState } from "react";
import { Repeat2, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import type { InstagramReel } from "@/lib/boxing/guides";

export function CoachVideo({
  reel,
}: {
  reel: Pick<InstagramReel, "video" | "image" | "title" | "creator"> & {
    orientation?: "landscape";
  };
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [repeat, setRepeat] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [error, setError] = useState(false);

  function restart() {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play().catch(() => {});
  }

  return (
    <div>
      <video
        ref={videoRef}
        src={reel.video}
        poster={reel.image}
        aria-label={`${reel.title}, de ${reel.creator}`}
        controls
        playsInline
        loop={repeat}
        preload="none"
        onError={() => setError(true)}
        onPlay={(event) => {
          document.querySelectorAll("video").forEach((other) => {
            if (other !== event.currentTarget) other.pause();
          });
        }}
        className={cn(
          "max-h-[65svh] w-full border-y border-border bg-bg object-contain",
          reel.orientation === "landscape" ? "aspect-video" : "aspect-[9/16]",
        )}
      />
      {error && (
        <p role="alert" className="px-4 pt-3 text-sm text-muted">
          No se ha podido cargar el vídeo. Comprueba la conexión y vuelve a intentarlo.
        </p>
      )}
      <div className="flex flex-wrap gap-2 p-3">
        <button
          type="button"
          onClick={restart}
          className="flex min-h-11 items-center gap-2 rounded-xl border border-border px-3 text-xs text-fg"
        >
          <RotateCcw className="size-4" /> Desde el inicio
        </button>
        <button
          type="button"
          aria-pressed={repeat}
          onClick={() => setRepeat(!repeat)}
          className={cn(
            "flex min-h-11 items-center gap-2 rounded-xl border px-3 text-xs",
            repeat ? "border-accent bg-accent text-accent-fg" : "border-border text-muted",
          )}
        >
          <Repeat2 className="size-4" /> Repetir
        </button>
        <label className="flex min-h-11 items-center gap-2 rounded-xl border border-border px-3 text-xs text-muted">
          Velocidad
          <select
            aria-label={`Velocidad de ${reel.title}`}
            value={speed}
            onChange={(event) => {
              const nextSpeed = Number(event.target.value);
              setSpeed(nextSpeed);
              if (videoRef.current) videoRef.current.playbackRate = nextSpeed;
            }}
            className="min-h-11 bg-surface text-fg"
          >
            <option value={0.5}>0,5×</option>
            <option value={0.75}>0,75×</option>
            <option value={1}>1×</option>
          </select>
        </label>
      </div>
    </div>
  );
}
