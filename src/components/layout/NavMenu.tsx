import { navItems } from "./navConfig";
import NavLink from "./NavLink";

type NavMenuProps = {
  onNavigate?: () => void;
};

export function NavMenu({ onNavigate }: NavMenuProps) {
  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          item={item}
          variant="sidebar"
          onClick={onNavigate}
        />
      ))}
    </nav>
  );
}
