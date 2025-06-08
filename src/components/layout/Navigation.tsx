import NavLink from "@/components/ui/NavLink";
import { navigationItems } from "@/data/navigation";

export default function Navigation() {
  return (
    <nav className="flex items-center gap-8 mr-4">
      {navigationItems.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
