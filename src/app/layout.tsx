import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getSiteSettings } from "../lib/settings";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sparkling = localFont({
  src: "../../public/font/SparklingValentine.ttf",
  variable: "--font-sparkling",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Florence Debattice — Naturopathe",
  description:
    "Florence Debattice, naturopathe certifiée. Accompagnement naturel pour retrouver votre équilibre et votre vitalité.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${inter.variable} ${sparkling.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header settings={settings} />
        <main className="flex-1">{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
