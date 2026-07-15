import { NavMenu } from "./NavMenu";

export default function Sidebar() {
  return (
    <aside className="hidden w-60 shrink-0 border-r border-border bg-surface/40 md:block">
      <div className="sticky top-16 p-4">
        <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted">
          Navegación
        </p>
        <NavMenu />
      </div>
    </aside>
  );
}
