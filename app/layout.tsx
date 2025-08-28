import type { Metadata } from "next";
import Script from "next/script";
import { Outfit } from "next/font/google";
import "./globals.css";

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
        {children}

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
      </body>
    </html>
  );
}
