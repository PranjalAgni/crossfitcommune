import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { EarlyBirdDialogProvider } from "@/components/early-bird-dialog";

export const metadata: Metadata = {
  title: "Crossfit Commune",
  description: "Crossfit Commune - Move Connect Transform",
  icons: {
    icon: "/favicon.png", // default favicon
  },
  keywords: [
    "CrossFit",
    "Fitness",
    "Gym",
    "Workout",
    "Training",
    "Strength",
    "Hyrox",
    "Personal Training",
    "Remote Coaching",
  ],
  authors: [{ name: "Crossfit Commune Team" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

// Do the layout changes to render common sections in the layout itself
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
        cz-shortcut-listen="true"
      >
        <EarlyBirdDialogProvider>{children}</EarlyBirdDialogProvider>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C20QEVTR8B"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C20QEVTR8B', { anonymize_ip: true });
          `}
        </Script>
        <Analytics />
      </body>
    </html>
  );
}
