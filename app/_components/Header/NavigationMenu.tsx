import Link from "next/link";
export default function NavigationMenu() {
  return (
    <div className="flex gap-4 justify-center">
      <Link href="/faq" className="hover:accent-amber-500">
        FAQ
      </Link>
      <Link href="/discounts" className="hover:accent-amber-500">
        Скидки
      </Link>
      <Link href="/shops" className="hover:accent-amber-500">
        Магазины
      </Link>
    </div>
  );
}
