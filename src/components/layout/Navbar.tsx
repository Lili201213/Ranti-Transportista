"use client";

import { useState } from "react";
import { navItems } from "./navConfig";
import NavLink from "./NavLink";
import Brand from "./Brand";
import { NavMenu } from "./NavMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Brand onClick={() => setOpen(false)} />

        {/* Menú de escritorio */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} variant="navbar" />
          ))}
        </div>

        {/* Botón hamburguesa (móvil) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-lg text-foreground/70 transition-colors hover:bg-black/5 md:hidden dark:hover:bg-white/10"
        >
          <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* Menú desplegable (móvil) */}
      {open && (
        <div className="border-t border-border px-4 py-3 md:hidden">
          <NavMenu onNavigate={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
}
