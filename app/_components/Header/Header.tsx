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
    <header
      className={cn("w-full bg-white border-b border-zinc-100", className)}
    >
      <div className="border-b border-zinc-50">
        <div className="max-w-7xl mx-auto px-4 h-10 flex justify-between items-center text-xs font-medium text-zinc-500">
          <Link
            href="/"
            className="text-3xl uppercase tracking-tighter text-fuchsia-950 transition-colors"
          >
            Crave
          </Link>
          <NavigationMenu />
          <a
            href="tel:80000000000"
            className="hover:text-fuchsia-950 transition-colors tracking-wide"
          >
            8-000-000-00-00
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex items-center gap-8">
          <div className="flex flex-1 items-center gap-3">
            <CatalogMenu />
            <SearchBar className="w-full" />
          </div>

          <div className=" hidden md:flex">
            <nav className="flex items-center gap-8">
              {ACTION_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center gap-1.5 text-zinc-600 hover:text-fuchsia-950 transition-all group"
                >
                  <item.icon
                    size={22}
                    className="group-hover:scale-110 transition-transform stroke-[1.5]"
                  />
                  <span className="text-[11px] font-bold uppercase tracking-wider">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
