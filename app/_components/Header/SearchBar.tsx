"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/app/_lib/utils";

type FormData = { search: string };
type Category = { slug: string; name: string };

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className }: SearchBarProps) {
  const { register, watch, setValue, handleSubmit } = useForm<FormData>();
  const [results, setResults] = useState<Category[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const query = watch("search");

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handler = setTimeout(async () => {
      if (!query || query.length < 2) {
        setResults([]);
        setIsOpen(false);
        return;
      }

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/search?q=${encodeURIComponent(query)}`,
        );
        const data = await res.json();
        setResults(data);
        setIsOpen(true);
      } catch {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [query]);

  const onSubmit = (data: FormData) => {
    console.log("Searching for:", data.search);
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full max-w-2xl", className)}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center bg-white rounded-md overflow-hidden shadow-sm border border-gray-200 focus-within:border-amber-500 transition-colors"
      >
        <div className="flex-1 flex items-center px-3">
          <input
            {...register("search")}
            type="text"
            autoComplete="off"
            placeholder="Поиск по сайту"
            className="w-full py-2.5 text-sm outline-none text-gray-800"
            onFocus={() => query?.length >= 2 && setIsOpen(true)}
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setValue("search", "");
                setResults([]);
              }}
              className="p-1 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>
          )}
        </div>
        <button
          type="submit"
          className="px-5 py-2.5 text-gray-400 transition-colors"
        >
          <Search size={20} strokeWidth={2.5} />
        </button>
      </form>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-xl z-[100] overflow-hidden">
          <div className="py-2">
            <div className="px-4 py-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              Категории
            </div>
            <ul>
              {results.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/catalog/${item.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-600 transition-colors"
                  >
                    <Search size={14} className="mr-3 text-gray-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
