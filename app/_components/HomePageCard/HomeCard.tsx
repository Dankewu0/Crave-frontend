import Link from "next/link";
import { cn } from "@/app/_lib/utils";

export default function HomeCard() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-8 m-4 md:m-8">
      <CardSection title="HomeCard1" href="/category-1">
        <NavLink href="/link-1">Link1</NavLink>
        <NavLink href="/link-2">Link2</NavLink>
        <NavLink href="/link-3">Link3</NavLink>
        <NavLink href="/link-4">Link4</NavLink>
      </CardSection>

      <CardSection title="HomeCard2" href="/category-2">
        <NavLink href="/link-1">Link1</NavLink>
        <NavLink href="/link-2">Link2</NavLink>
        <NavLink href="/link-3">Link3</NavLink>
        <NavLink href="/link-4">Link4</NavLink>
      </CardSection>

      <CardSection title="HomeCard3" href="/category-3">
        <NavLink href="/link-1">Link1</NavLink>
        <NavLink href="/link-2">Link2</NavLink>
        <NavLink href="/link-3">Link3</NavLink>
        <NavLink href="/link-4">Link4</NavLink>
      </CardSection>

      <CardSection title="HomeCard4" href="/category-4">
        <NavLink href="/link-1">Link1</NavLink>
        <NavLink href="/link-2">Link2</NavLink>
        <NavLink href="/link-3">Link3</NavLink>
        <NavLink href="/link-4">Link4</NavLink>
      </CardSection>

      <CardSection title="HomeCard5" href="/category-5">
        <NavLink href="/link-1">Link1</NavLink>
        <NavLink href="/link-2">Link2</NavLink>
        <NavLink href="/link-3">Link3</NavLink>
        <NavLink href="/link-4">Link4</NavLink>
      </CardSection>
    </div>
  );
}

function CardSection({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start group">
      <Link
        href={href}
        className="shadow-md rounded-xl p-3 h-32 w-full sm:h-40 sm:w-28 bg-white border border-gray-100 flex-shrink-0 flex items-center justify-center text-center transition-all hover:shadow-lg hover:border-orange-200 active:scale-95"
      >
        <span className="font-bold text-xs sm:text-sm text-gray-800">
          {title}
        </span>
      </Link>
      <div className="flex flex-col gap-1 sm:gap-3 py-1">{children}</div>
    </div>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-[10px] sm:text-xs text-gray-500 hover:text-orange-500 hover:underline transition-colors underline-offset-4"
    >
      {children}
    </Link>
  );
}
