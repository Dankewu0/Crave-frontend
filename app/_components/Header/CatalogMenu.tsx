"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { Menu, X } from "lucide-react";

interface Category {
  title: string;
  subs: string[];
}

interface CatalogMenuProps {
  slugs?: Record<string, string>;
}

const CATEGORIES: Category[] = [
  {
    title: "Бытовая техника",
    subs: ["Холодильники", "Стиральные машины", "Плиты"],
  },
  { title: "Красота и здоровье", subs: ["Фены", "Бритвы", "Весы"] },
  {
    title: "Смартфоны и фототехника",
    subs: ["Смартфоны", "Объективы", "Штативы"],
  },
  {
    title: "ТВ, консоли и аудио",
    subs: ["Телевизоры", "PlayStation", "Колонки"],
  },
  { title: "ПК, ноутбуки, периферия", subs: ["Ноутбуки", "Мыши", "Мониторы"] },
  {
    title: "Комплектующие для ПК",
    subs: ["Видеокарты", "Процессоры", "Материнские платы"],
  },
  { title: "Офис и мебель", subs: ["Кресла", "Столы", "Бумага"] },
  {
    title: "Сетевое оборудование",
    subs: ["Роутеры", "Коммутаторы", "Адаптеры"],
  },
  {
    title: "Отдых и развлечения",
    subs: ["Самокаты", "Велосипеды", "Настолки"],
  },
  {
    title: "Инструмент и стройка",
    subs: ["Шуруповерты", "Перфораторы", "Уровни"],
  },
  { title: "Садовая техника", subs: ["Газонокосилки", "Триммеры", "Полив"] },
  { title: "Дом, декор и посуда", subs: ["Сковородки", "Вазы", "Постельное"] },
];

export default function CatalogMenu({ slugs = {} }: CatalogMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(true)}
        className={`flex items-center gap-2 bg-fuchsia-950 rounded-lg p-4 hover:bg-black shadow-2xl text-white transition-opacity ${
          isOpen
            ? "opacity-0 pointer-events-none sm:opacity-100 sm:pointer-events-auto"
            : "opacity-100"
        }`}
      >
        Каталог
        <Menu />
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen bg-white shadow-2xl transition-transform duration-300 ease-in-out z-[110] w-[280px] sm:w-[350px] flex flex-col border-r border-zinc-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex items-center justify-between bg-fuchsia-950 text-white">
          <div className="flex items-center gap-2 font-bold uppercase tracking-tighter">
            <span>Каталог</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="hover:bg-fuchsia-900 text-white h-8 w-8"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto py-2 bg-white custom-scrollbar shadow-inner">
          {CATEGORIES.map((cat) => {
            const catSlug = slugs[cat.title] || "#";
            return (
              <div
                key={cat.title}
                className="border-b border-zinc-50 last:border-0"
              >
                <Link
                  href={`/catalog/${catSlug}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-6 py-4 text-[14px] font-semibold text-zinc-800 hover:text-fuchsia-950 hover:bg-fuchsia-50 transition-colors"
                >
                  {cat.title}
                </Link>

                <div className="flex flex-col bg-zinc-50/50 pb-2">
                  {cat.subs.map((sub) => (
                    <Link
                      key={sub}
                      href={`/catalog/${catSlug}/${slugs[sub] || "#"}`}
                      onClick={() => setIsOpen(false)}
                      className="px-10 py-1.5 text-sm text-zinc-500 hover:text-fuchsia-950 transition-colors"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}
