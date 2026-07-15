export type NavItem = {
  href: string;
  label: string;
  icono: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Inicio", icono: "🏠" },
  { href: "/rutas", label: "Rutas", icono: "🗺️" },
  { href: "/envios", label: "Envíos", icono: "📦" },
  { href: "/entregas", label: "Entregas", icono: "✅" },
  { href: "/perfil", label: "Perfil", icono: "🧑‍✈️" },
];
