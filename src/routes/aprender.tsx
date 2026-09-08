import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/aprender")({
  component: () => <Outlet />,
});
