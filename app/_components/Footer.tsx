import Link from "next/link";
import { cn } from "@/app/_lib/utils";
import { Github, Instagram, Youtube, Send } from "lucide-react";

interface FooterProps {
  className?: string;
}

const FOOTER_SECTIONS = [
  {
    title: "Покупателям",
    links: [
      { label: "Как сделать заказ", href: "/how-to-order" },
      { label: "Способы оплаты", href: "/payment" },
      { label: "Доставка", href: "/delivery" },
      { label: "Статус заказа", href: "/order-status" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О нас", href: "/about" },
      { label: "Магазины", href: "/shops" },
      { label: "Вакансии", href: "/careers" },
      { label: "Партнерам", href: "/partners" },
    ],
  },
  {
    title: "Помощь",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Обратная связь", href: "/feedback" },
      { label: "Обмен и возврат", href: "/returns" },
      { label: "Сервисные центры", href: "/service" },
    ],
  },
] as const;

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-[#1a1a1a] text-gray-300 pt-12 pb-8", className)}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-black text-white uppercase tracking-tighter mb-4 block"
            >
              Crave
            </Link>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              Лучшие гаджеты и комплектующие с доставкой по всей стране.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="hover:text-orange-500 transition-colors"
              >
                <Send size={20} />
              </Link>
              <Link
                href="#"
                className="hover:text-orange-500 transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="hover:text-orange-500 transition-colors"
              >
                <Youtube size={20} />
              </Link>
              <Link
                href="#"
                className="hover:text-orange-500 transition-colors"
              >
                <Github size={20} />
              </Link>
            </div>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors hover:translate-x-1 inline-block transform"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Crave. Все права защищены.</p>
          <div className="flex gap-6">
            <Link href="/policy" className="hover:underline">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="hover:underline">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
