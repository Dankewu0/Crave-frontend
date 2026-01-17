"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

type FormData = { search: string };
type Category = { slug: string; name: string };

export default function SearchBar() {
  const { register, watch } = useForm<FormData>();
  const [results, setResults] = useState<Category[]>([]);
  const query = watch("search");

  useEffect(() => {
    const handler = setTimeout(() => {
      if (!query) {
        setResults([]);
        return;
      }

      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/search?q=${encodeURIComponent(query)}`,
      )
        .then((res) => res.json())
        .then(setResults)
        .catch(() => setResults([]));
    }, 300);

    return () => clearTimeout(handler);
  }, [query]);

  return (
    <div className="flex flex-col gap-2 w-80">
      <div className="flex border-2 border-gray-100 rounded-lg items-center">
        <input
          {...register("search")}
          type="text"
          placeholder="Поиск..."
          className="flex-1 px-2 py-1 outline-none"
        />
        <Button className="flex items-center gap-2 bg-white hover:bg-gray-100">
          <Search />
        </Button>
      </div>

      {results.length > 0 && (
        <ul className="border rounded p-2 bg-white">
          {results.map((item) => (
            <li key={item.slug} className="py-1">
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
