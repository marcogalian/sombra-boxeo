import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { WorkoutPlayer } from "@/components/boxing/workout-player";
import { Button } from "@/components/ui/button";
import { LESSON_BY_ID } from "@/lib/boxing/curriculum";
import { WORKOUT_BY_ID } from "@/lib/boxing/workouts";
import { useBoxingStore } from "@/lib/boxing/store";

export const Route = createFileRoute("/entrenar/$workoutId")({
  component: WorkoutPage,
});

function WorkoutPage() {
  const { workoutId } = Route.useParams();
  const completed = useBoxingStore((s) => s.completedLessons);
  const workout = WORKOUT_BY_ID[workoutId];
  if (!workout) return <Navigate to="/entrenar" />;

  const need = workout.afterLesson ? LESSON_BY_ID[workout.afterLesson] : null;
  const ready = !need || completed.includes(need.id);

  return (
    <main className="pb-6">
      <header className="flex items-center gap-3 px-3 pt-4">
        <Button variant="ghost" size="icon" asChild aria-label="Volver">
          <Link to="/entrenar">
            <ArrowLeft className="size-5" />
          </Link>
        </Button>
        <div className="min-w-0">
          <p className="text-[11px] tracking-[0.16em] text-subtle">
            {workout.durationMin} MIN · {workout.equipment.join(" · ")}
          </p>
          <h1 className="truncate font-display text-3xl leading-none">
            {workout.title}
          </h1>
        </div>
      </header>
      {!ready && need ? (
        <p className="mx-5 mt-3 rounded-lg bg-surface px-3 py-2 text-xs leading-relaxed text-muted">
          Este entreno usa la lección «{need.title}», que aún no has marcado.
          Puedes hacerlo igual: no inventes combos, sigue solo lo que ponga
          cada bloque.
        </p>
      ) : null}
      <WorkoutPlayer workout={workout} />
    </main>
  );
}
