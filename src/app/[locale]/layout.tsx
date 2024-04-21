import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pokemonFont = localFont({
  src: "../assets/fonts/Early GameBoy.ttf",
  display: "swap",
  variable: "--font-pokemon",
});

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Generated by Jeffrey Romero",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={`${pokemonFont.variable} font-sans`}>{children}</body>
    </html>
  );
}
