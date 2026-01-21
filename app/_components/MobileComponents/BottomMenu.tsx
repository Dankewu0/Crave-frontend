"use client";

import { ShoppingCart, User, MapPin, TextSearch, House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/_lib/utils";

interface BottomMenuProps {
  className?: string;
}

const NAV_ITEMS = [
  { label: "Главная", href: "/", icon: House },
  { label: "Магазины", href: "/shops", icon: MapPin },
  { label: "Каталог", href: "/catalog", icon: TextSearch },
  { label: "Корзина", href: "/cart", icon: ShoppingCart },
  { label: "Профиль", href: "/profile", icon: User },
] as const;

export default function BottomMenu({ className }: BottomMenuProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-2 pb-safe pt-2 z-50 lg:hidden",
        className,
      )}
    >
      <div className="flex flex-row justify-between items-center max-w-lg mx-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center flex-1 gap-1 transition-colors duration-200",
                isActive
                  ? "text-orange-500"
                  : "text-gray-500 active:text-gray-900",
              )}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium leading-none">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
