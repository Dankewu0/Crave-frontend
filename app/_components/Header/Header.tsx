import CatalogMenu from "./CatalogMenu";
import NavigationMenu from "./NavigationMenu";
import { CircleUserRound, ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";
import SearchBar from "./SearchBar";
export default function Header() {
  return (
    <header className="flex flex-col gap-2">
      <div className="flex justify-center">
        <div className="w-full max-w-7xl flex justify-between items-center px-4">
          <NavigationMenu />
          <span>8-000-000-00-00</span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-7xl flex justify-between items-center px-4">
          <div className="flex items-center p-2 gap-2 bg-amber-400 text-white rounded-lg">
            <span className="font-bold text-lg">Crave</span>
            <CatalogMenu />
          </div>
          <SearchBar />
          <div className="flex gap-4">
            <Link href="/cart" className="flex flex-col items-center">
              <ShoppingCart className="w-6 h-6" />
              <span>Корзина</span>
            </Link>
            <Link href="/favourite" className="flex flex-col items-center">
              <Heart className="w-6 h-6" />
              <span>Избранное</span>
            </Link>
            <Link href="/profile" className="flex flex-col items-center">
              <CircleUserRound className="w-6 h-6" />
              <span>Профиль</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
