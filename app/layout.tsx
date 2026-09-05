import type { Metadata } from "next";
import { Manrope, Roboto } from "next/font/google";

import CalProvider from "@/components/CalProvider";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tesla — Model 3",
  description:
    "Model 3 — 1.99% APR. Жолоодож үзэх цагаа онлайнаар захиалаарай.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn" className={`${manrope.variable} ${roboto.variable}`}>
      <body>
        {children}
        <CalProvider />
      </body>
    </html>
  );
}
