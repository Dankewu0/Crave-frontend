import CatalogMenu from "./CatalogMenu";
import NavigationMenu from "./NavigationMenu";
import { CircleUserRound, ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { cn } from "@/app/_lib/utils";

interface HeaderProps {
  className?: string;
}

const ACTION_LINKS = [
  { href: "/favourite", icon: Heart, label: "Избранное" },
  { href: "/cart", icon: ShoppingCart, label: "Корзина" },
  { href: "/profile", icon: CircleUserRound, label: "Профиль" },
] as const;

export default function Header({ className }: HeaderProps) {
  return (
    <header className={cn("w-full bg-white shadow-sm", className)}>
      <div>
        <div className="max-w-7xl mx-auto px-4 h-10 flex justify-between items-center text-sm text-gray-600">
          <NavigationMenu />
          <a
            href="tel:80000000000"
            className="hover:text-orange-500 transition-colors"
          >
            8-000-000-00-00
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 bg-amber-400 p-4 text-white rounded-lg">
            <Link href="/" className="text-3xl font-black uppercase">
              Crave
            </Link>
            <CatalogMenu />
          </div>

          <div className="flex-1">
            <SearchBar className="w-full" />
          </div>

          <nav className="flex items-center gap-6">
            {ACTION_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center gap-1 text-gray-700 hover:text-orange-500 transition-all group"
              >
                <item.icon
                  size={24}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
