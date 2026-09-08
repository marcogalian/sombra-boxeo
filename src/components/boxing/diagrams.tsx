import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { DiagramId, Stance } from "@/lib/boxing/types";

type Props = {
  id: DiagramId;
  stance: Stance;
  className?: string;
};

const ink = "var(--color-fg)";
const mute = "var(--color-muted)";
const accent = "var(--color-accent)";

function Floor({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 200 230" className="h-auto w-full" aria-hidden="true">
      <rect x="8" y="8" width="184" height="214" rx="18" fill="var(--color-elevated)" />
      <rect
        x="8"
        y="8"
        width="184"
        height="214"
        rx="18"
        fill="none"
        stroke="var(--color-border)"
      />
      <text
        x="100"
        y="28"
        textAnchor="middle"
        fill={mute}
        fontSize="9"
        letterSpacing="0.18em"
      >
        ADELANTE
      </text>
      {children}
    </svg>
  );
}

function Foot({
  x,
  y,
  label,
  className,
}: {
  x: number;
  y: number;
  label: string;
  className?: string;
}) {
  // CSS `transform` replaces the SVG transform attribute on the same node,
  // which parks the foot at 0,0 (top-left). Position stays on the outer group.
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className={className}>
        <ellipse cx="0" cy="8" rx="16" ry="28" fill="none" stroke={ink} strokeWidth="2.2" />
        <ellipse cx="0" cy="-10" rx="11" ry="10" fill="none" stroke={ink} strokeWidth="2" />
        <text
          x="0"
          y="12"
          textAnchor="middle"
          fill={accent}
          fontSize="9"
          fontWeight="600"
        >
          {label}
        </text>
      </g>
    </g>
  );
}

function StanceFeet({ southpaw }: { southpaw: boolean }) {
  const lead = southpaw ? { x: 118, label: "DER" } : { x: 88, label: "IZQ" };
  const rear = southpaw ? { x: 88, label: "IZQ" } : { x: 118, label: "DER" };
  return (
    <Floor>
      <line
        x1="100"
        y1="40"
        x2="100"
        y2="200"
        stroke={accent}
        strokeOpacity="0.25"
        strokeDasharray="3 6"
      />
      <Foot x={lead.x} y={78} label={lead.label} />
      <Foot x={rear.x} y={148} label={rear.label} />
      <text x="100" y="210" textAnchor="middle" fill={mute} fontSize="9">
        {southpaw ? "zurda · pie derecho delante" : "ortodoxa · pie izquierdo delante"}
      </text>
    </Floor>
  );
}

function StepDrag({ southpaw }: { southpaw: boolean }) {
  const leadX = southpaw ? 118 : 88;
  const rearX = southpaw ? 88 : 118;
  return (
    <Floor>
      <path
        d={`M${leadX} 56 L${leadX} 40`}
        fill="none"
        stroke={accent}
        strokeWidth="2"
        markerEnd="url(#arr)"
        className="anim-dash"
      />
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill={accent} />
        </marker>
      </defs>
      <Foot x={leadX} y={78} label="1" className="anim-step-lead" />
      <Foot x={rearX} y={148} label="2" className="anim-step-rear" />
      <text x="100" y="210" textAnchor="middle" fill={mute} fontSize="9">
        primero el de delante · luego arrastra
      </text>
    </Floor>
  );
}

function LateralPanel({
  y,
  title,
  hint,
  izq,
  der,
  first,
}: {
  y: number;
  title: string;
  hint: string;
  izq: { x: number; y: number };
  der: { x: number; y: number };
  first: "izq" | "der";
}) {
  return (
    <g transform={`translate(0 ${y})`}>
      <rect
        x="8"
        y="8"
        width="184"
        height="198"
        rx="18"
        fill="var(--color-elevated)"
      />
      <rect
        x="8"
        y="8"
        width="184"
        height="198"
        rx="18"
        fill="none"
        stroke="var(--color-border)"
      />
      <text
        x="100"
        y="28"
        textAnchor="middle"
        fill={mute}
        fontSize="9"
        letterSpacing="0.16em"
      >
        {title}
      </text>
      <path
        d={first === "izq" ? "M86 38 H42" : "M114 38 H158"}
        fill="none"
        stroke={accent}
        strokeWidth="1.6"
        markerEnd="url(#arr-side)"
      />
      <line
        x1={izq.x}
        y1="48"
        x2={izq.x}
        y2="176"
        stroke={accent}
        strokeOpacity="0.2"
        strokeDasharray="3 6"
      />
      <line
        x1={der.x}
        y1="48"
        x2={der.x}
        y2="176"
        stroke={accent}
        strokeOpacity="0.2"
        strokeDasharray="3 6"
      />
      <Foot
        x={izq.x}
        y={izq.y}
        label={first === "izq" ? "1" : "2"}
        className={first === "izq" ? "anim-side-left-first" : "anim-side-right-second"}
      />
      <Foot
        x={der.x}
        y={der.y}
        label={first === "der" ? "1" : "2"}
        className={first === "der" ? "anim-side-right-first" : "anim-side-left-second"}
      />
      <text x="100" y="192" textAnchor="middle" fill={mute} fontSize="9">
        {hint}
      </text>
    </g>
  );
}

function Lateral({ southpaw }: { southpaw: boolean }) {
  // Parallel rails: left foot stays on the left track, right foot on the right.
  // Going left: left foot (1) opens, right (2) follows. Going right: the reverse.
  const izq = { x: 72, y: southpaw ? 148 : 78 };
  const der = { x: 128, y: southpaw ? 78 : 148 };
  return (
    <svg viewBox="0 0 200 420" className="h-auto w-full" aria-hidden="true">
      <defs>
        <marker id="arr-side" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill={accent} />
        </marker>
      </defs>
      <LateralPanel
        y={0}
        title="A LA IZQUIERDA"
        hint="primero el izquierdo · no cruzar"
        izq={izq}
        der={der}
        first="izq"
      />
      <LateralPanel
        y={206}
        title="A LA DERECHA"
        hint="primero el derecho · no cruzar"
        izq={izq}
        der={der}
        first="der"
      />
    </svg>
  );
}

function Pivot({ southpaw }: { southpaw: boolean }) {
  const leadX = southpaw ? 118 : 88;
  const rearX = southpaw ? 88 : 118;
  // Rotate in the outer SVG viewBox (200×230) so the origin is the lead foot,
  // not the rear foot's bounding box.
  const origin = `${(leadX / 200) * 100}% ${((80 / 230) * 100).toFixed(2)}%`;
  return (
    <Floor>
      <path
        d={southpaw ? "M88 150 A76 76 0 0 0 152 148" : "M118 150 A76 76 0 0 1 54 148"}
        fill="none"
        stroke={accent}
        strokeWidth="2"
        className="anim-dash"
      />
      <Foot x={leadX} y={80} label="EJE" />
      <g
        className={southpaw ? "anim-pivot anim-pivot-ccw" : "anim-pivot anim-pivot-cw"}
        style={{ transformOrigin: origin }}
      >
        <Foot x={rearX} y={150} label="ARCO" />
      </g>
      <text x="100" y="214" textAnchor="middle" fill={mute} fontSize="9">
        clavo delante · el de atrás dibuja el arco
      </text>
    </Floor>
  );
}

function GuardLabels() {
  return (
    <svg viewBox="0 0 220 240" className="h-auto w-full" aria-hidden="true">
      <rect x="8" y="8" width="204" height="224" rx="18" fill="var(--color-elevated)" />
      <ellipse cx="110" cy="58" rx="22" ry="26" fill="none" stroke={ink} strokeWidth="2" />
      <path
        d="M96 78 Q110 88 124 78"
        fill="none"
        stroke={accent}
        strokeWidth="1.6"
      />
      <path
        d="M78 92 L78 150 L96 168 L124 168 L142 150 L142 92"
        fill="none"
        stroke={ink}
        strokeWidth="2"
      />
      <rect x="70" y="78" width="22" height="20" rx="6" fill="none" stroke={accent} strokeWidth="2" />
      <rect x="128" y="78" width="22" height="20" rx="6" fill="none" stroke={accent} strokeWidth="2" />
      <path d="M86 98 L78 132" fill="none" stroke={ink} strokeWidth="2" />
      <path d="M134 98 L142 132" fill="none" stroke={ink} strokeWidth="2" />
      <line x1="36" y1="88" x2="68" y2="88" stroke={accent} strokeWidth="1.2" />
      <text x="32" y="84" textAnchor="end" fill={accent} fontSize="10">
        puños
      </text>
      <line x1="36" y1="128" x2="76" y2="128" stroke={accent} strokeWidth="1.2" />
      <text x="32" y="124" textAnchor="end" fill={accent} fontSize="10">
        codos
      </text>
      <line x1="184" y1="70" x2="132" y2="70" stroke={accent} strokeWidth="1.2" />
      <text x="188" y="66" fill={accent} fontSize="10">
        mentón
      </text>
      <text x="110" y="208" textAnchor="middle" fill={mute} fontSize="10">
        folios bajo los brazos · ojos al frente
      </text>
    </svg>
  );
}

function PunchClock() {
  const items: { n: string; label: string; x: number; y: number }[] = [
    { n: "1", label: "jab · delante", x: 58, y: 78 },
    { n: "2", label: "recto · atrás", x: 162, y: 78 },
    { n: "3", label: "gancho del.", x: 40, y: 128 },
    { n: "4", label: "gancho atr.", x: 180, y: 128 },
    { n: "5", label: "upper del.", x: 70, y: 178 },
    { n: "6", label: "upper atr.", x: 150, y: 178 },
  ];
  return (
    <svg viewBox="0 0 220 230" className="h-auto w-full" aria-hidden="true">
      <rect x="8" y="8" width="204" height="214" rx="18" fill="var(--color-elevated)" />
      <circle cx="110" cy="118" r="18" fill="none" stroke={ink} strokeWidth="1.6" />
      {items.map((it) => (
        <g key={it.n}>
          <circle cx={it.x} cy={it.y} r="16" fill="none" stroke={accent} strokeWidth="1.6" />
          <text
            x={it.x}
            y={it.y + 5}
            textAnchor="middle"
            fill={ink}
            fontSize="13"
            fontWeight="600"
          >
            {it.n}
          </text>
          <text
            x={it.x}
            y={it.y + 30}
            textAnchor="middle"
            fill={mute}
            fontSize="8"
          >
            {it.label}
          </text>
        </g>
      ))}
      <text x="110" y="36" textAnchor="middle" fill={mute} fontSize="10" letterSpacing="0.16em">
        LOS SEIS GOLPES
      </text>
    </svg>
  );
}

function PathFrame({
  title,
  caption,
  children,
}: {
  title: string;
  caption: string;
  children: ReactNode;
}) {
  return (
    <svg viewBox="0 0 220 180" className="h-auto w-full" aria-hidden="true">
      <rect x="8" y="8" width="204" height="164" rx="18" fill="var(--color-elevated)" />
      <text x="110" y="28" textAnchor="middle" fill={mute} fontSize="10" letterSpacing="0.14em">
        {title}
      </text>
      {children}
      <text x="110" y="162" textAnchor="middle" fill={mute} fontSize="9">
        {caption}
      </text>
    </svg>
  );
}

function JabPath() {
  return (
    <PathFrame title="JAB · EL 1" caption="sale de la cara · vuelve por el mismo tubo">
      <circle cx="48" cy="88" r="14" fill="none" stroke={ink} strokeWidth="2" />
      <rect x="38" y="104" width="14" height="12" rx="3" fill="none" stroke={accent} />
      <rect x="52" y="104" width="14" height="12" rx="3" fill="none" stroke={ink} />
      <path
        d="M68 110 H176"
        fill="none"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        className="anim-punch"
      />
      <text x="176" y="102" textAnchor="end" fill={mute} fontSize="8">
        nudillos
      </text>
    </PathFrame>
  );
}

function CrossPath() {
  return (
    <PathFrame title="RECTO · EL 2" caption="colilla del pie de atrás → cadera → puño">
      <ellipse cx="58" cy="128" rx="10" ry="16" fill="none" stroke={ink} strokeWidth="1.6" />
      <path
        d="M58 144 A18 18 0 0 1 78 132"
        fill="none"
        stroke={accent}
        strokeWidth="1.6"
        className="anim-dash"
      />
      <text x="86" y="148" fill={mute} fontSize="8">
        pivote
      </text>
      <path
        d="M72 96 H176"
        fill="none"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        className="anim-punch"
      />
      <rect x="40" y="86" width="14" height="12" rx="3" fill="none" stroke={ink} />
    </PathFrame>
  );
}

function HookPath() {
  return (
    <PathFrame title="GANCHO · 3 Y 4" caption="codo a 90° · el arco cabe en un ascensor">
      <path
        d="M64 118 L64 78 L108 78"
        fill="none"
        stroke={ink}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="108" cy="78" r="8" fill="none" stroke={accent} strokeWidth="2" />
      <path
        d="M108 78 Q148 70 168 96"
        fill="none"
        stroke={accent}
        strokeWidth="2.4"
        strokeLinecap="round"
        className="anim-dash"
      />
      <text x="52" y="102" fill={mute} fontSize="8">
        90°
      </text>
    </PathFrame>
  );
}

function UppercutPath() {
  return (
    <PathFrame title="UPPERCUT · 5 Y 6" caption="raíl corto hasta el mentón · no al techo">
      <line x1="110" y1="52" x2="110" y2="138" stroke={accent} strokeOpacity="0.25" strokeDasharray="3 5" />
      <rect x="102" y="118" width="16" height="14" rx="4" fill="none" stroke={ink} strokeWidth="2" />
      <path
        d="M110 118 V58"
        fill="none"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        className="anim-punch-up"
      />
      <text x="118" y="62" fill={mute} fontSize="8">
        para aquí
      </text>
    </PathFrame>
  );
}

function SlipPath() {
  return (
    <svg viewBox="0 0 220 180" className="h-auto w-full" aria-hidden="true">
      <rect x="8" y="8" width="204" height="164" rx="18" fill="var(--color-elevated)" />
      <line x1="110" y1="36" x2="110" y2="150" stroke={accent} strokeOpacity="0.35" strokeDasharray="4 6" />
      <g className="anim-slip">
        <ellipse cx="110" cy="78" rx="16" ry="20" fill="none" stroke={ink} strokeWidth="2" />
        <rect x="96" y="100" width="12" height="10" rx="3" fill="none" stroke={accent} />
        <rect x="112" y="100" width="12" height="10" rx="3" fill="none" stroke={accent} />
      </g>
      <text x="22" y="80" fill={mute} fontSize="8">
        fuera
      </text>
      <text x="22" y="92" fill={mute} fontSize="8">
        tu dcha
      </text>
      <text x="158" y="80" fill={mute} fontSize="8">
        dentro
      </text>
      <text x="158" y="92" fill={mute} fontSize="8">
        tu izq
      </text>
      <text x="110" y="162" textAnchor="middle" fill={mute} fontSize="9">
        contra ortodoxo · centímetros, no palmos
      </text>
    </svg>
  );
}

function RollPath() {
  return (
    <svg viewBox="0 0 220 180" className="h-auto w-full" aria-hidden="true">
      <rect x="8" y="8" width="204" height="164" rx="18" fill="var(--color-elevated)" />
      <path
        d="M58 70 Q110 140 162 70"
        fill="none"
        stroke={accent}
        strokeWidth="2"
        className="anim-dash"
      />
      <g className="anim-roll">
        <ellipse cx="110" cy="78" rx="14" ry="18" fill="none" stroke={ink} strokeWidth="2" />
      </g>
      <text x="110" y="162" textAnchor="middle" fill={mute} fontSize="10">
        U pequeña · manos y cara viajan juntas
      </text>
    </svg>
  );
}

function BlockCover() {
  return (
    <svg viewBox="0 0 220 180" className="h-auto w-full" aria-hidden="true">
      <rect x="8" y="8" width="204" height="164" rx="18" fill="var(--color-elevated)" />
      <ellipse cx="110" cy="78" rx="20" ry="24" fill="none" stroke={ink} strokeWidth="2" />
      <rect x="78" y="62" width="28" height="36" rx="10" fill="none" stroke={accent} strokeWidth="2.4" />
      <rect x="114" y="62" width="28" height="36" rx="10" fill="none" stroke={accent} strokeWidth="2.4" />
      <path d="M86 98 L78 130" stroke={ink} strokeWidth="2" fill="none" />
      <path d="M134 98 L142 130" stroke={ink} strokeWidth="2" fill="none" />
      <text x="110" y="158" textAnchor="middle" fill={mute} fontSize="10">
        puños a las sienes · se ve por encima
      </text>
    </svg>
  );
}

function Parry() {
  return (
    <svg viewBox="0 0 220 180" className="h-auto w-full" aria-hidden="true">
      <rect x="8" y="8" width="204" height="164" rx="18" fill="var(--color-elevated)" />
      <line
        x1="40"
        y1="40"
        x2="150"
        y2="92"
        stroke={mute}
        strokeDasharray="4 5"
      />
      <path
        d="M128 88 L168 70"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        className="anim-dash"
      />
      <circle cx="128" cy="92" r="10" fill="none" stroke={ink} strokeWidth="2" />
      <text x="110" y="158" textAnchor="middle" fill={mute} fontSize="10">
        toque de la mano de atrás · vuelve ya
      </text>
    </svg>
  );
}

export function PunchLegend() {
  const items = [
    ["1", "jab"],
    ["2", "recto"],
    ["3", "gancho del."],
    ["4", "gancho atr."],
    ["5", "upper del."],
    ["6", "upper atr."],
  ] as const;
  return (
    <ul className="grid grid-cols-3 gap-2">
      {items.map(([n, label]) => (
        <li
          key={n}
          className="rounded-lg bg-elevated px-2 py-2 text-center"
        >
          <span className="block font-display text-2xl leading-none text-accent">
            {n}
          </span>
          <span className="mt-1 block text-[10px] tracking-wide text-muted">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Combo({ nums }: { nums: string[] }) {
  return (
    <svg viewBox="0 0 220 120" className="h-auto w-full" aria-hidden="true">
      <rect x="8" y="8" width="204" height="104" rx="18" fill="var(--color-elevated)" />
      {nums.map((n, i) => (
        <g key={`${n}-${i}`} transform={`translate(${46 + i * 56} 60)`}>
          <circle r="20" fill="none" stroke={accent} strokeWidth="2" />
          <text y="6" textAnchor="middle" fill={ink} fontSize="16" fontWeight="600">
            {n}
          </text>
          {i < nums.length - 1 ? (
            <text x="28" y="6" textAnchor="middle" fill={mute} fontSize="14">
              ·
            </text>
          ) : null}
        </g>
      ))}
    </svg>
  );
}

export function TechniqueDiagram({ id, stance, className }: Props) {
  if (id === "none") return null;
  const southpaw = stance === "southpaw";
  return (
    <div className={cn("overflow-hidden rounded-xl bg-elevated", className)}>
      {id === "stance-feet" ? <StanceFeet southpaw={southpaw} /> : null}
      {id === "step-drag" ? <StepDrag southpaw={southpaw} /> : null}
      {id === "lateral" ? <Lateral southpaw={southpaw} /> : null}
      {id === "pivot" ? <Pivot southpaw={southpaw} /> : null}
      {id === "guard-labels" ? <GuardLabels /> : null}
      {id === "punch-clock" ? <PunchClock /> : null}
      {id === "jab-path" ? <JabPath /> : null}
      {id === "cross-path" ? <CrossPath /> : null}
      {id === "hook-path" ? <HookPath /> : null}
      {id === "uppercut-path" ? <UppercutPath /> : null}
      {id === "combo-12" ? <Combo nums={["1", "2"]} /> : null}
      {id === "combo-123" ? <Combo nums={["1", "2", "3"]} /> : null}
      {id === "slip-path" ? <SlipPath /> : null}
      {id === "roll-path" ? <RollPath /> : null}
      {id === "block-cover" ? <BlockCover /> : null}
      {id === "parry" ? <Parry /> : null}
    </div>
  );
}
