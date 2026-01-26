import Link from "next/link";
import { cn } from "@/app/_lib/utils";

interface NavigationMenuProps {
  className?: string;
}

const NAV_LINKS = [
  { href: "/discounts", label: "Скидки" },
  { href: "/shops", label: "Магазины" },
] as const;

export default function NavigationMenu({ className }: NavigationMenuProps) {
  return (
    <nav className={cn("flex items-center gap-6", className)}>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-gray-600 transition-colors hover:text-orange-500"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
