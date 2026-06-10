import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPrestations, getPrestation } from "../../../lib/prestations";

const SITE_URL = "https://flonaturopathie.com";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const prestations = await getAllPrestations();
  return prestations.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const prestation = await getPrestation(slug);
  if (!prestation) return { title: "Prestation" };
  return {
    title: `${prestation.title} — Naturopathe Liège`,
    description: `${prestation.short} Avec Florence Debattice, naturopathe à Trooz (Liège) et en ligne pour toute la Wallonie.`,
    alternates: { canonical: `/mes-prestations/${slug}` },
  };
}

/** Extrait un prix numérique depuis une string comme "80 €", "65€" ou "Gratuit". */
function parsePrice(priceStr: string): string {
  const cleaned = priceStr.toLowerCase().replace(/\s/g, "");
  if (cleaned.includes("gratuit") || cleaned === "0" || cleaned === "0€") {
    return "0";
  }
  const match = priceStr.match(/(\d+[.,]?\d*)/);
  return match ? match[1].replace(",", ".") : "0";
}

export default async function PrestationPage({ params }: Props) {
  const { slug } = await params;
  const prestation = await getPrestation(slug);
  if (!prestation) notFound();

  const price = parsePrice(prestation.price);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: prestation.title,
    description: prestation.description ?? prestation.short,
    serviceType: "Naturopathie",
    provider: { "@id": `${SITE_URL}#localbusiness` },
    areaServed: [
      { "@type": "City", name: "Trooz" },
      { "@type": "City", name: "Liège" },
      { "@type": "AdministrativeArea", name: "Province de Liège" },
      { "@type": "AdministrativeArea", name: "Wallonie" },
    ],
    url: `${SITE_URL}/mes-prestations/${slug}`,
    image: `${SITE_URL}${prestation.image}`,
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/prendre-rdv?service=${slug}`,
      validFrom: "2026-01-01",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Mes prestations", item: `${SITE_URL}/mes-prestations` },
      { "@type": "ListItem", position: 3, name: prestation.title, item: `${SITE_URL}/mes-prestations/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* BREADCRUMB visuel */}
      <nav className="bg-background pt-6 md:pt-8" aria-label="Fil d'Ariane">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <ol className="flex items-center gap-2 text-xs md:text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-primary-dark">
                Accueil
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li>
              <Link href="/mes-prestations" className="hover:text-primary-dark">
                Mes prestations
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-foreground/85 truncate max-w-[200px] md:max-w-none">
              {prestation.title}
            </li>
          </ol>
        </div>
      </nav>

      <section className="bg-background py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <Link
            href="/mes-prestations"
            className="inline-block text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.25em] uppercase text-primary-dark hover:text-primary mb-8 md:mb-10"
          >
            ← Toutes les prestations
          </Link>

          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start">
            {/* IMAGE À GAUCHE — carrée */}
            <div className="relative">
              <div className="relative aspect-square w-full overflow-hidden shadow-xl bg-background">
                <Image
                  src={prestation.image}
                  alt={`${prestation.title} — Naturopathe à Trooz (Liège)`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-14 h-14 md:w-20 md:h-20 border-2 border-accent -z-10" />
            </div>

            {/* TITRE + DESC + PRIX/DURÉE À DROITE */}
            <div className="md:pt-4 text-center md:text-left">
              <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-accent font-medium mb-3 md:mb-4">
                Prestation
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary-dark leading-tight mb-5 md:mb-6">
                {prestation.title}
              </h1>

              <p className="text-foreground/85 text-base md:text-lg leading-[1.7] md:leading-[1.8] mb-7 md:mb-8">
                {prestation.description}
              </p>

              {/* Prix + Durée */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10 py-5 md:py-6 border-y border-border mb-7 md:mb-8">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-md font-body font-bold text-xl md:text-2xl">
                    €
                  </span>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-1">
                      Tarif
                    </p>
                    <p className="font-body text-2xl md:text-3xl text-accent font-bold leading-none">
                      {prestation.price}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                  <span className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-md">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-1">
                      Durée
                    </p>
                    <p className="font-body text-2xl md:text-3xl text-accent font-bold leading-none">
                      {prestation.duration}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href={`/prendre-rdv?service=${prestation.slug}`}
                className="inline-block px-7 py-3.5 md:px-8 md:py-4 bg-primary-dark text-white text-xs tracking-[0.25em] uppercase hover:bg-primary transition-colors"
              >
                Réserver ce rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
