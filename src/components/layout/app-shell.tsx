import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Clock3, Home, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  { to: "/", label: "Inicio", icon: Home },
  { to: "/aprender", label: "Escuela", icon: BookOpen },
  { to: "/entrenar", label: "Ring", icon: Clock3 },
  { to: "/progreso", label: "Progreso", icon: LineChart },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const inWorkout = /^\/entrenar\/.+/.test(pathname);
  const onHome = pathname === "/";

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col">
        <div
          className="flex-1"
          style={{
            paddingTop: onHome ? 0 : "env(safe-area-inset-top)",
            paddingBottom: inWorkout
              ? "env(safe-area-inset-bottom)"
              : "calc(5.75rem + env(safe-area-inset-bottom))",
          }}
        >
          {children}
        </div>
        {inWorkout ? null : (
          <nav
            className="fixed bottom-0 left-1/2 z-30 w-full max-w-lg -translate-x-1/2 border-t border-border bg-bg/95 backdrop-blur-md"
            style={{ paddingBottom: "max(0.55rem, env(safe-area-inset-bottom))" }}
          >
            <div className="grid grid-cols-4 px-1 pt-1">
              {TABS.map((tab) => {
                const active =
                  tab.to === "/"
                    ? pathname === "/"
                    : pathname === tab.to || pathname.startsWith(`${tab.to}/`);
                const Icon = tab.icon;
                return (
                  <Link
                    key={tab.to}
                    to={tab.to}
                    className={cn(
                      "flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-md px-1 text-xs tracking-wide transition-colors duration-150",
                      active ? "text-accent" : "text-subtle hover:text-fg",
                    )}
                  >
                    <Icon className="size-5" strokeWidth={active ? 2.2 : 1.8} />
                    {tab.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
