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
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const sparkling = localFont({
  src: "../../public/font/SparklingValentine.ttf",
  variable: "--font-sparkling",
  display: "swap",
  preload: true,
});

const SITE_URL = "https://flonaturopathie.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Florence Debattice — Naturopathe à Liège & Trooz",
    template: "%s | Florence Debattice",
  },
  description:
    "Naturopathe à Liège et Trooz. Florence Debattice vous accompagne en cabinet ou en ligne pour toute la Wallonie. Premier appel découverte gratuit.",
  authors: [{ name: "Florence Debattice" }],
  creator: "Florence Debattice",
  publisher: "Florence Debattice",
  alternates: {
    canonical: "/",
    languages: {
      "fr-BE": "/",
      fr: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: SITE_URL,
    siteName: "Florence Debattice — Naturopathe",
    title: "Florence Debattice — Naturopathe à Liège & Trooz",
    description:
      "Naturopathe certifiée à Trooz (Liège). Consultations en cabinet ou en ligne pour toute la Wallonie et la Belgique.",
    images: [
      {
        url: "/portrait-florence.png",
        width: 1200,
        height: 630,
        alt: "Florence Debattice — Naturopathe à Trooz (Liège)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Florence Debattice — Naturopathe à Liège & Trooz",
    description:
      "Naturopathe certifiée à Trooz (Liège). Consultations en cabinet ou en ligne.",
    images: ["/portrait-florence.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#5d6e54",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}#localbusiness`,
    name: "Florence Debattice — Naturopathe",
    alternateName: "Flo Naturopathie",
    description:
      "Cabinet de naturopathie à Trooz, près de Liège. Consultations en cabinet ou en ligne pour toute la Wallonie et la Belgique.",
    url: SITE_URL,
    telephone: settings.phone || "+32486927140",
    email: settings.email,
    image: `${SITE_URL}/portrait-florence.png`,
    logo: `${SITE_URL}/icon.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rue de Beaufays 17b",
      addressLocality: "Trooz",
      postalCode: "4870",
      addressCountry: "BE",
      addressRegion: "Liège",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.5612,
      longitude: 5.6877,
    },
    areaServed: [
      { "@type": "City", name: "Trooz" },
      { "@type": "City", name: "Liège" },
      { "@type": "City", name: "Verviers" },
      { "@type": "City", name: "Chaudfontaine" },
      { "@type": "City", name: "Fléron" },
      { "@type": "City", name: "Esneux" },
      { "@type": "AdministrativeArea", name: "Province de Liège" },
      { "@type": "AdministrativeArea", name: "Wallonie" },
      { "@type": "Country", name: "Belgique" },
    ],
    priceRange: "€€",
    paymentAccepted: "Espèces, Bancontact, Virement bancaire",
    currenciesAccepted: "EUR",
    knowsLanguage: ["fr", "fr-BE"],
    knowsAbout: [
      "Naturopathie",
      "Hygiène de vie",
      "Nutrition",
      "Phytothérapie",
      "Aromathérapie",
      "Santé hormonale féminine",
      "Conseil en santé naturelle",
      "Bilan vital",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Wednesday"],
        opens: "11:00",
        closes: "19:30",
      },
    ],
    sameAs: [settings.facebookUrl, settings.instagramUrl].filter(Boolean),
  };

  return (
    <html
      lang="fr-BE"
      className={`${cormorant.variable} ${inter.variable} ${sparkling.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Header settings={settings} />
        <main className="flex-1">{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
