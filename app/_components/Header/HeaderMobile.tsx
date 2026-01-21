import SearchBar from "./SearchBar";
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
        <Link
          href="/"
          className="text-orange-500 font-black text-2xl tracking-tighter uppercase flex-1"
        >
          Crave
        </Link>
      </div>

      <div className="w-full">
        <SearchBar />
      </div>
    </header>
  );
}
