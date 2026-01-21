import SearchBar from "./SearchBar";
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/app/_lib/utils";

interface HeaderMobileProps {
  className?: string;
}

export default function HeaderMobile({ className }: HeaderMobileProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-3 bg-white p-3 sticky top-0 z-50 shadow-sm border-b",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <button className="text-gray-700 p-1 active:bg-gray-100 rounded-md transition-colors">
          <Menu size={24} />
        </button>

        <Link
          href="/"
          className="text-orange-500 font-black text-2xl tracking-tighter uppercase flex-1"
        >
          Crave
        </Link>

        <Link
          href="/cart"
          className="text-gray-700 p-1 relative active:bg-gray-100 rounded-md transition-colors"
        >
          <ShoppingCart size={24} />
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold min-w-[16px] h-4 flex items-center justify-center px-1 rounded-full border-2 border-white">
            0
          </span>
        </Link>
      </div>

      <div className="w-full">
        <SearchBar />
      </div>
    </header>
  );
}
