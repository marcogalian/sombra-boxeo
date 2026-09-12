export type PlanWeek = {
  number: number;
  title: string;
  goal: string;
  sessions: {
    day: string;
    title: string;
    detail: string;
    lessonId?: string;
    workoutId: string;
  }[];
};

export const TRAINING_PLAN: PlanWeek[] = [
  {
    number: 1,
    title: "Construir la base",
    goal: "Guardia estable y pasos sin cruzar los pies.",
    sessions: [
      { day: "Día 1", title: "Postura", detail: "Mira, coloca y repite.", lessonId: "postura", workoutId: "primer-dia" },
      { day: "Día 2", title: "Paso y arrastre", detail: "Avanza y retrocede con equilibrio.", lessonId: "paso-arrastre", workoutId: "pies-jab" },
      { day: "Día 3", title: "Base completa", detail: "Repasa sin buscar cansarte.", lessonId: "equilibrio", workoutId: "diario" },
    ],
  },
  {
    number: 2,
    title: "Golpear desde el suelo",
    goal: "Conectar pies, cadera y manos con una guardia limpia.",
    sessions: [
      { day: "Día 1", title: "Jab", detail: "Directo, rápido y de vuelta.", lessonId: "jab", workoutId: "pies-jab" },
      { day: "Día 2", title: "Recto", detail: "Gira sin inclinarte.", lessonId: "cross", workoutId: "diario" },
      { day: "Día 3", title: "El 1-2", detail: "Dos golpes y salida.", lessonId: "uno-dos", workoutId: "diario" },
    ],
  },
  {
    number: 3,
    title: "Combinar y salir",
    goal: "Encadenar golpes sin quedarte quieto delante.",
    sessions: [
      { day: "Día 1", title: "Ganchos", detail: "Compactos y con giro.", lessonId: "ganchos", workoutId: "combinaciones" },
      { day: "Día 2", title: "Tres golpes", detail: "Ritmo antes que fuerza.", lessonId: "tres-golpes", workoutId: "combinaciones" },
      { day: "Día 3", title: "Sombra guiada", detail: "Termina cada acción con pies.", workoutId: "sombra-libre" },
    ],
  },
  {
    number: 4,
    title: "Defender y responder",
    goal: "Ver el ataque imaginario, defender y abandonar la línea.",
    sessions: [
      { day: "Día 1", title: "Bloqueo", detail: "Cubre sin encogerte.", lessonId: "bloqueo", workoutId: "defensa-mov" },
      { day: "Día 2", title: "Slip", detail: "Cabeza fuera, ojos arriba.", lessonId: "slip", workoutId: "defensa-mov" },
      { day: "Día 3", title: "Salir por debajo", detail: "Piernas, no cintura.", lessonId: "roll", workoutId: "defensa-mov" },
    ],
  },
  {
    number: 5,
    title: "Ganar rapidez",
    goal: "Cambiar de ritmo manteniendo la técnica.",
    sessions: [
      { day: "Día 1", title: "Pies ligeros", detail: "Pasos cortos y dirección.", lessonId: "laterales", workoutId: "pies-jab" },
      { day: "Día 2", title: "Ráfagas", detail: "Cinco segundos vivos, cinco suaves.", workoutId: "rapidez-tecnica" },
      { day: "Día 3", title: "Reacción", detail: "Defiende, responde y sal.", workoutId: "rapidez-tecnica" },
    ],
  },
  {
    number: 6,
    title: "Ponerte en forma boxeando",
    goal: "Sostener varios asaltos sin perder postura ni respiración.",
    sessions: [
      { day: "Día 1", title: "Condición", detail: "Cuerda, piernas y core.", workoutId: "condicion" },
      { day: "Día 2", title: "Seis asaltos", detail: "Ritmo de gimnasio con control.", lessonId: "sombra-rounds", workoutId: "seis-rounds" },
      { day: "Día 3", title: "Sombra libre", detail: "Aplica todo sin contacto.", workoutId: "sombra-libre" },
    ],
  },
];
