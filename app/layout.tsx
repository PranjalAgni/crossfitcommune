import type { Metadata } from "next";
import { Outfit } from "next/font/google"
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crossfit Commune",
  description: "Crossfit Commune - The Ultimate CrossFit Experience",
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`} cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
