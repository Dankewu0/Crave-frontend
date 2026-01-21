import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer";
import HeaderMobile from "./_components/Header/HeaderMobile";
import BottomMenu from "./_components/MobileComponents/BottomMenu";
import { cn } from "@/app/_lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crave Shop",
  description: "Лучший магазин электроники",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased min-h-screen flex flex-col",
        )}
      >
        <HeaderMobile className="lg:hidden" />
        <Header className="hidden lg:block" />

        <main className="flex-1 pb-20 lg:pb-8">{children}</main>

        <BottomMenu className="lg:hidden" />
        <Footer className="block border-t" />
      </body>
    </html>
  );
}
