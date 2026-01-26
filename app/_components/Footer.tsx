import Link from "next/link";
import { cn } from "@/app/_lib/utils";
import { Github, Youtube, Send, Triangle } from "lucide-react";

interface FooterProps {
  className?: string;
}

const FOOTER_SECTIONS = [
  {
    title: "Компания",
    links: [{ label: "О нас", href: "/about" }],
  },
  {
    title: "Помощь",
    links: [{ label: "FAQ", href: "/faq" }],
  },
] as const;

export default function Footer({ className }: FooterProps) {
  const socialLinkClass =
    "group flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 hover:border-fuchsia-950 hover:bg-fuchsia-950 transition-all duration-200 active:scale-90";
  const iconClass = "text-zinc-500 group-hover:text-white transition-colors";

  return (
    <footer className={cn("bg-zinc-950 text-zinc-400 py-12", className)}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col items-center md:items-start flex-1">
            <Link
              href="/"
              className="text-3xl font-black text-white uppercase tracking-tighter block hover:text-fuchsia-500 transition-colors"
            >
              Crave
            </Link>
            <p className="text-sm text-zinc-500 mt-2 font-medium">
              Гаджеты и комплектующие
            </p>
          </div>

          <div className="flex items-center gap-4 bg-zinc-900/50 p-3 px-6 rounded-2xl border border-zinc-800">
            <Link
              href="https://web.telegram.org/a/"
              className={socialLinkClass}
              aria-label="Telegram"
            >
              <Send
                size={18}
                className={cn(
                  iconClass,
                  "translate-x-[-1px] translate-y-[0.5px]",
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
              href="cravevercel.vercel.app"
              className={cn(
                socialLinkClass,
                "hover:bg-fuchsia-800 hover:text-white",
              )}
              aria-label="Vercel"
            >
              <Triangle
                size={10}
                className="fill-zinc-500 text-zinc-500 group-hover:fill-black group-hover:text-black transition-transform"
              />
            </Link>
          </div>

          <div className="flex gap-16 flex-1 justify-center md:justify-end">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title} className="text-center md:text-left">
                <h4 className="text-zinc-100 font-bold text-xs uppercase tracking-widest mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-500 hover:text-fuchsia-500 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} Crave.</p>
          <div className="flex gap-8">
            <Link
              href="/terms"
              className="hover:text-zinc-400 transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy"
              className="hover:text-zinc-400 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
