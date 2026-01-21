import Link from "next/link";
import { cn } from "@/app/_lib/utils";
import { Github, Youtube, Send, Triangle } from "lucide-react";

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
  const socialLinkClass =
    "group flex items-center justify-center w-9 h-9 rounded-full bg-gray-800/50 border border-gray-700 hover:border-orange-500 hover:bg-gray-800 transition-all duration-200 active:scale-90";
  const iconClass =
    "text-gray-400 group-hover:text-orange-500 transition-colors";

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
            <p className="text-sm text-gray-400 mb-6 max-w-xs leading-relaxed">
              Лучшие гаджеты и комплектующие с доставкой по всей стране.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="https://web.telegram.org/a/"
                className={socialLinkClass}
                aria-label="Telegram"
              >
                <Send
                  size={18}
                  className={cn(
                    iconClass,
                    "translate-x-[-1px] translate-y-[1px]",
                  )}
                />
              </Link>

              <Link
                href="https://www.youtube.com/"
                className={socialLinkClass}
                aria-label="YouTube"
              >
                <Youtube size={18} className={iconClass} />
              </Link>

              <Link
                href="https://github.com/Dankewu0/Crave-frontend"
                className={socialLinkClass}
                aria-label="GitHub"
              >
                <Github size={18} className={iconClass} />
              </Link>

              <Link
                href="https://vercel.com"
                className={cn(socialLinkClass, "hover:border-white")}
                aria-label="Vercel"
              >
                <Triangle
                  size={10}
                  className="fill-white text-white group-hover:scale-110 transition-transform"
                />
              </Link>
            </div>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block transform"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-medium text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Crave. All rights reserved.</p>
          <div className="flex gap-8">
            <Link
              href="/policy"
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-gray-300 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
