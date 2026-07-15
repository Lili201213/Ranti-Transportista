"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "./navConfig";

type NavLinkProps = {
  item: NavItem;
  /** "sidebar" muestra icono + texto en bloque; "navbar" muestra solo texto en línea. */
  variant?: "sidebar" | "navbar";
  onClick?: () => void;
};

export default function NavLink({
  item,
  variant = "sidebar",
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    item.href === "/"
      ? pathname === "/"
      : pathname === item.href || pathname.startsWith(`${item.href}/`);

  const base =
    "flex items-center gap-3 rounded-lg font-medium transition-colors";
  const size =
    variant === "navbar" ? "px-3 py-1.5 text-sm" : "px-3 py-2 text-sm";
  const state = isActive
    ? "bg-brand-soft text-brand"
    : "text-foreground/70 hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10";

  return (
    <Link
      href={item.href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`${base} ${size} ${state}`}
    >
      <span className="text-base leading-none" aria-hidden>
        {item.icono}
      </span>
      <span>{item.label}</span>
    </Link>
  );
}
