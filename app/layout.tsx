import type { Metadata } from "next";
import { Outfit } from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "Crossfit Commune",
  description: "Crossfit Commune - Move Connect Transform",
  icons: {
    icon: "/favicon.png",                // default favicon
  },
  keywords: ["CrossFit", "Fitness", "Gym", "Workout", "Training", "Strength", "Hyrox", "Personal Training", "Remote Coaching"],
  authors: [{ name: "Crossfit Commune Team" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
}

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
