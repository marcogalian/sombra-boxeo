import type { Workout } from "./types";
import { clipsForLesson } from "./lesson-videos.ts";

type SessionContent = { title: string; lessonIds: string[]; drill: string[] };
type StageContent = {
  number: number;
  title: string;
  goal: string;
  checkpoints: string[];
  repeat: string;
  rounds: number;
  work: number;
  sessions: SessionContent[];
};
export type PlanSession = SessionContent & { id: string; day: string; workoutId: string };
export type PlanWeek = Omit<StageContent, "sessions"> & { sessions: PlanSession[] };
const session = (title: string, lessonIds: string[], ...drill: string[]): SessionContent => ({
  title,
  lessonIds,
  drill,
});

// Proposed learning stages: the calendar is a guide, not a test of boxing ability.
const STAGES: StageContent[] = [
  {
    number: 1,
    title: "Una base estable",
    goal: "Encontrar tu postura, proteger la cara y respirar sin tensión.",
    rounds: 3,
    work: 60,
    checkpoints: [
      "Mantengo la postura 30 segundos con rodillas relajadas.",
      "Subo las manos sin tensar los hombros ni esconder la vista.",
      "Cambio suavemente el peso y vuelvo al centro sin perder el equilibrio.",
    ],
    repeat: "Repite la sesión de equilibrio si necesitas recolocar los pies continuamente.",
    sessions: [
      session(
        "Preparar espacio y postura",
        ["para-que", "espacio", "postura"],
        "Coloca tu guardia durante 10 segundos. Relaja y repite.",
        "Un pie delante y otro detrás, sin ponerlos sobre una misma línea.",
        "Todavía no lances golpes: observa tus apoyos y respira.",
      ),
      session(
        "Manos que protegen",
        ["manos"],
        "Desde tu postura, coloca manos, codos y mentón.",
        "Relaja los hombros cada 10 segundos sin bajar la guardia.",
        "Mira al frente; no aprietes los puños con fuerza continua.",
      ),
      session(
        "Comprobar el equilibrio",
        ["equilibrio"],
        "Cambia ligeramente el peso entre las piernas y vuelve al centro.",
        "Haz pausas de 5 segundos: debes poder quedarte estable.",
        "Revisa pies, rodillas, manos y respiración en cada pausa.",
      ),
    ],
  },
  {
    number: 2,
    title: "Mover los pies",
    goal: "Avanzar, retroceder y salir a los lados conservando la guardia.",
    rounds: 3,
    work: 60,
    checkpoints: [
      "Doy cinco pasos adelante y atrás sin juntar ni cruzar los pies.",
      "Me desplazo a ambos lados empezando con el pie de esa dirección.",
      "Puedo detenerme después de cualquier paso sin tambalearme.",
    ],
    repeat: "Acorta los pasos y reduce el ritmo si la base se cierra o se abre demasiado.",
    sessions: [
      session(
        "Paso y recuperación",
        ["paso-arrastre"],
        "Un paso corto adelante y pausa en guardia.",
        "Un paso corto atrás y pausa en guardia.",
        "El segundo pie recupera la separación. No saltes ni cruces.",
      ),
      session(
        "Entrar y salir",
        ["adelante-atras"],
        "Practica solo los pies de la demostración; el jab llegará en la etapa 3.",
        "Dos pasos cortos adelante, dos atrás y una pausa.",
        "Al retroceder comienza con el pie trasero.",
      ),
      session(
        "Las cuatro direcciones",
        ["laterales"],
        "Alterna un paso a izquierda y derecha sin cruzar.",
        "Añade un paso adelante y otro atrás.",
        "Detente entre cambios de dirección y comprueba tu equilibrio.",
      ),
    ],
  },
  {
    number: 3,
    title: "Jab, recto y 1-2",
    goal: "Golpear al aire en línea recta y devolver cada mano a la guardia.",
    rounds: 3,
    work: 90,
    checkpoints: [
      "Hago diez jabs suaves que salen rectos y vuelven a la cara.",
      "En el recto giro pie y cadera sin caer hacia delante.",
      "Encadeno cinco 1-2 y termino estable con las manos arriba.",
    ],
    repeat: "Trabaja un solo golpe si el brazo empieza a barrer o la mano contraria cae.",
    sessions: [
      session(
        "Tu primer golpe: el jab",
        ["jab"],
        "Un jab suave, regreso por la misma línea y pausa.",
        "Mantén la otra mano protegiendo la cara.",
        "Exhala con el golpe; no bloquees el codo al extender.",
      ),
      session(
        "El recto nace en el suelo",
        ["cross"],
        "Practica un recto aislado y vuelve a la guardia.",
        "El talón trasero y la cadera acompañan el giro.",
        "Añade un jab antes del recto solo cuando ambos salgan controlados.",
      ),
      session(
        "Une dos golpes y sal",
        ["uno-dos"],
        "Jab, recto, guardia y pausa.",
        "Añade un paso atrás después del 1-2.",
        "Mantén un ritmo regular antes de intentar acelerar.",
      ),
    ],
  },
  {
    number: 4,
    title: "Ampliar tus golpes",
    goal: "Distinguir ganchos y uppercuts, y enlazar el 1-2-3 con control.",
    rounds: 3,
    work: 90,
    checkpoints: [
      "Distingo el recorrido circular del gancho y el ascendente del uppercut.",
      "Practico con ambas manos sin abrir un gran arco ni perder la guardia.",
      "Hago cinco 1-2-3 lentos y termino equilibrado.",
    ],
    repeat: "Vuelve a golpes aislados si el tercer golpe te arrastra. La potencia puede esperar.",
    sessions: [
      session(
        "Ganchos cortos",
        ["ganchos"],
        "Un gancho delantero corto, guardia y pausa.",
        "Después, un gancho trasero corto, guardia y pausa.",
        "El cuerpo gira y el brazo acompaña; no balancees todo el brazo.",
      ),
      session(
        "Uppercuts de ambas manos",
        ["uppercut"],
        "Alterna un uppercut delantero y uno trasero, con pausa entre ellos.",
        "Recorrido ascendente corto; no cargues la mano desde la cintura.",
        "Practica al aire y despacio antes de unir golpes.",
      ),
      session(
        "Jab, recto y gancho",
        ["tres-golpes"],
        "Practica el 1-2 y añade un gancho delantero suave.",
        "Tres golpes, tres exhalaciones y vuelta a la guardia.",
        "Después de cada combinación, pausa y un paso de salida.",
      ),
    ],
  },
  {
    number: 5,
    title: "Defender sin perderte",
    goal: "Ensayar cobertura, slip y desvío con un ataque imaginario.",
    rounds: 3,
    work: 90,
    checkpoints: [
      "Puedo cubrirme y volver a la guardia mirando al frente.",
      "Hago slips pequeños hacia ambos lados sin doblarme demasiado.",
      "El desvío es corto y termina con la mano protegiendo otra vez.",
    ],
    repeat:
      "Ensaya una sola defensa por serie si mezclas movimientos. No pruebes a recibir golpes.",
    sessions: [
      session(
        "Cubrir y recuperar",
        ["bloqueo"],
        "Imagina un golpe, cubre y recupera tu guardia.",
        "Añade un paso atrás después de la cobertura.",
        "Practica sin compañero y sin impactos.",
      ),
      session(
        "Sacar la cabeza de la línea",
        ["slip"],
        "Un slip pequeño a un lado y regreso al centro.",
        "Repite hacia el otro lado con las manos arriba.",
        "Cuando salga estable, añade un jab suave después del slip.",
      ),
      session(
        "Desviar y ganar distancia",
        ["parry"],
        "Imagina un jab y realiza un desvío corto con la mano trasera.",
        "Recupera la guardia y da un paso atrás.",
        "No persigas el golpe imaginario extendiendo todo el brazo.",
      ),
    ],
  },
  {
    number: 6,
    title: "Salir por otro ángulo",
    goal: "Añadir roll y pivote a lo aprendido, sin quedarse delante.",
    rounds: 4,
    work: 90,
    checkpoints: [
      "Hago un roll lento usando las piernas y mirando al frente.",
      "Pivoto sin cruzar los pies ni dejar caer la mano delantera.",
      "Tras cinco combinaciones sencillas recuerdo salir y recuperar la guardia.",
    ],
    repeat: "Separa golpe, defensa y salida. Únelos cuando puedas detenerte entre movimientos.",
    sessions: [
      session(
        "Pasar por debajo",
        ["roll"],
        "Imagina un gancho alto y pasa por debajo con un roll pequeño.",
        "Haz una pausa al salir al otro lado.",
        "Flexiona las piernas sin agacharte hacia el suelo.",
      ),
      session(
        "Pivote con guardia",
        ["pivote"],
        "Un pivote corto alrededor del apoyo delantero y pausa.",
        "Recupera la postura antes de repetir.",
        "Añade el 1-2 antes del pivote solo si mantienes el equilibrio.",
      ),
      session(
        "Golpear, defender, salir",
        ["uno-dos", "slip", "pivote"],
        "1-2 suave, guardia y paso de salida.",
        "En la siguiente repetición, jab, slip y paso lateral.",
        "Elige una secuencia cada vez; no busques una combinación larga.",
      ),
    ],
  },
  {
    number: 7,
    title: "Rapidez con control",
    goal: "Cambiar de ritmo sin tensar los hombros ni desordenar los pies.",
    rounds: 4,
    work: 90,
    checkpoints: [
      "Hago una ráfaga breve y vuelvo al ritmo suave sin bajar las manos.",
      "Mis pasos siguen siendo cortos al cambiar de ritmo.",
      "Reconozco cuándo la técnica empeora y reduzco la velocidad.",
    ],
    repeat:
      "Acorta la ráfaga a dos o tres segundos si te tensas. La velocidad máxima puede esperar.",
    sessions: [
      session(
        "Manos sueltas",
        ["jab", "uno-dos"],
        "Alterna 5 segundos de jabs algo más vivos con 15 segundos suaves.",
        "Relaja los hombros y devuelve cada mano.",
        "Si el gesto se desordena, mantén el ritmo suave el resto del asalto.",
      ),
      session(
        "Pies que cambian de ritmo",
        ["laterales", "adelante-atras"],
        "Alterna 5 segundos de pasos más vivos con 15 segundos suaves.",
        "Pasos cortos, guardia estable y sin cruzar.",
        "Añade un jab tras detenerte, sin golpear durante cada paso.",
      ),
      session(
        "Una acción rápida, una salida",
        ["uno-dos", "parry"],
        "Un 1-2 vivo y corto, guardia, salida y 15 segundos suaves.",
        "Alterna con un desvío imaginario y un jab controlado.",
        "Trabaja precisión y recuperación, sin buscar agotarte.",
      ),
    ],
  },
  {
    number: 8,
    title: "Unirlo en tus rounds",
    goal: "Mantener una sombra sencilla con pies, golpes y defensas.",
    rounds: 4,
    work: 120,
    checkpoints: [
      "Completo los asaltos al ritmo que me permite mantener la postura.",
      "Incluyo pasos, golpes y alguna defensa sin quedarme rígido.",
      "Identifico un detalle que hago mejor y otro que necesito practicar.",
    ],
    repeat:
      "Repite la etapa 7 o reduce la duración si la guardia cae con el cansancio. Terminar la ruta no acredita dominar el boxeo.",
    sessions: [
      session(
        "Sombra con estructura",
        ["sombra-rounds"],
        "Asalto 1: pies y jab. Asalto 2: 1-2 y salida.",
        "Asalto 3: una defensa sencilla y un golpe de respuesta.",
        "Asalto 4: combina lo anterior a un ritmo cómodo.",
      ),
      session(
        "Mantener la forma",
        ["sombra-rounds", "equilibrio"],
        "Trabaja suave, con pausas en guardia cuando lo necesites.",
        "Cada pocas acciones revisa apoyos, manos y respiración.",
        "No aumentes intensidad y dificultad a la vez.",
      ),
      session(
        "Tu round y tu revisión",
        ["sombra-rounds"],
        "Elige dos combinaciones y dos defensas conocidas.",
        "Repártelas entre los asaltos e incluye una salida tras cada acción.",
        "Al terminar identifica un avance y una técnica para repasar.",
      ),
    ],
  },
];
export const TRAINING_PLAN: PlanWeek[] = STAGES.map((stage) => ({
  ...stage,
  sessions: stage.sessions.map((item, index) => ({
    ...item,
    id: `ruta-${stage.number}-${index + 1}`,
    day: `Sesión ${index + 1}`,
    workoutId: `ruta-${stage.number}-${index + 1}`,
  })),
}));
export const PLAN_SESSIONS = TRAINING_PLAN.flatMap((stage) => stage.sessions);
export const checkpointId = (stage: number, index: number) => `ruta-${stage}-check-${index + 1}`;
export function stageComplete(stage: PlanWeek, sessions: string[], checks: string[]) {
  return (
    stage.sessions.every((item) => sessions.includes(item.id)) &&
    stage.checkpoints.every((_, index) => checks.includes(checkpointId(stage.number, index)))
  );
}
export function currentPlanStage(sessions: string[], checks: string[]) {
  return TRAINING_PLAN.find((stage) => !stageComplete(stage, sessions, checks));
}
// These workouts are available through the roadmap; the free training library stays separate.
export const PLAN_WORKOUTS: Workout[] = TRAINING_PLAN.flatMap((stage) =>
  stage.sessions.map((item) => ({
    id: item.workoutId,
    title: item.title,
    durationMin: Math.round((300 + stage.rounds * stage.work + (stage.rounds - 1) * 60 + 120) / 60),
    level: stage.number <= 2 ? "inicio" : stage.number <= 5 ? "base" : "intermedio",
    focus: `Ruta · Etapa ${stage.number} · ${item.day}`,
    image:
      clipsForLesson(item.lessonIds.at(-1) ?? "postura")[0]?.image ?? "/videos/lessons/stance.jpg",
    equipment: ["Espacio libre", "Sin contacto"],
    afterLesson: item.lessonIds.at(-1),
    blocks: [
      {
        kind: "prep",
        title: "Calentar suave",
        seconds: 300,
        notes: [
          "Marcha suave en el sitio, moviliza hombros y tobillos y añade pasos pequeños.",
          "Aumenta el movimiento poco a poco. Alarga el calentamiento si aún no estás preparado.",
          "Despeja el espacio. Practica al aire, sin pesas en las manos.",
        ],
      },
      {
        kind: "round",
        title: item.title,
        rounds: stage.rounds,
        work: stage.work,
        rest: 60,
        script: item.drill,
      },
      {
        kind: "prep",
        title: "Bajar el ritmo y revisar",
        seconds: 120,
        notes: [
          "Camina suave y relaja los brazos.",
          "Recuerda qué salió estable y qué conviene repetir.",
          "Vuelve a Tu ruta para registrar la sesión cuando la hayas practicado.",
        ],
      },
    ],
  })),
);
