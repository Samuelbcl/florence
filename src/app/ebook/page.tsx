import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllEbooks } from "../../lib/ebooks";

export const metadata: Metadata = {
  title: "Ebook naturopathie — Guide saisonnier",
  description:
    "Ebook naturopathie de Florence Debattice (Liège) : guide bien-être pour retrouver forme et énergie au fil des 4 saisons. PDF téléchargeable.",
  alternates: { canonical: "/ebook" },
};

export default async function EbookPage() {
  const ebooks = await getAllEbooks();

  if (ebooks.length === 0) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-6 py-24 text-center">
        <div>
          <p className="font-script text-4xl md:text-5xl text-primary-dark mb-4">
            Bientôt disponible
          </p>
          <p className="text-foreground/75">
            De beaux ebooks arrivent prochainement. Restez connectés !
          </p>
        </div>
      </section>
    );
  }

  const featured = ebooks[0];
  const others = ebooks.slice(1);

  return (
    <>
      {/* ═══════════ HERO EBOOK PRINCIPAL ═══════════ */}
      <section className="relative bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-light/20 via-background to-background pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-12 pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Cover */}
            <div className="order-1 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5]">
                <Image
                  src={featured.cover}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-20 h-20 md:w-32 md:h-32 border-2 border-primary -z-10" />
                <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-20 h-20 md:w-32 md:h-32 bg-accent/30 -z-10" />
              </div>
            </div>

            {/* Texte + CTA */}
            <div className="order-2 lg:order-2 text-center lg:text-left">
              {featured.tag && (
                <span className="inline-block text-[10px] md:text-[11px] font-medium tracking-[0.25em] uppercase text-accent bg-accent/15 px-3 py-1 rounded-full mb-5">
                  {featured.tag}
                </span>
              )}
              <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase text-primary-dark mb-3 md:mb-4">
                Mon premier ebook
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-dark leading-[1.1] mb-5">
                {featured.title}
              </h1>
              {featured.subtitle && (
                <p className="text-base md:text-lg text-muted leading-relaxed mb-6">
                  {featured.subtitle}
                </p>
              )}
              <p className="text-base md:text-lg text-foreground/85 leading-[1.7] mb-8 max-w-xl mx-auto lg:mx-0">
                {featured.short}
              </p>

              <a
                href={featured.etsyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-primary-dark text-white text-xs tracking-[0.25em] uppercase hover:bg-primary transition-colors shadow-md"
              >
                {featured.ctaLabel || "Découvrir sur Etsy"} ↗
              </a>

              <p className="text-xs text-muted mt-4">
                Vente sécurisée sur Etsy · PDF téléchargeable instantanément
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ DESCRIPTION & POINTS CLÉS ═══════════ */}
      <section className="bg-primary-light/15 py-14 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-primary-dark mb-3 md:mb-4">
              Au programme
            </p>
            <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-primary-dark leading-none">
              Ce que vous découvrez
            </h2>
          </div>

          {featured.description && (
            <p className="text-base md:text-lg text-foreground/85 leading-[1.8] max-w-3xl mx-auto text-center mb-10 md:mb-12">
              {featured.description}
            </p>
          )}

          {featured.highlights && featured.highlights.length > 0 && (
            <ul className="max-w-3xl mx-auto space-y-4 md:space-y-5">
              {featured.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 md:gap-5">
                  <span className="shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary text-white flex items-center justify-center mt-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <p className="text-foreground/90 text-base md:text-lg leading-[1.7]">
                    {highlight}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ═══════════ APERÇUS (images secondaires) ═══════════ */}
      {(featured.image2 || featured.image3) && (
        <section className="bg-background py-14 md:py-24">
          <div className="max-w-5xl mx-auto px-5 md:px-6">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-primary-dark mb-3 md:mb-4">
                Aperçu
              </p>
              <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-primary-dark leading-none">
                Un avant-goût
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
              {featured.image2 && (
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={featured.image2}
                    alt={`${featured.title} — aperçu 1`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              )}
              {featured.image3 && (
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={featured.image3}
                    alt={`${featured.title} — aperçu 2`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ AUTRES EBOOKS (si plusieurs) ═══════════ */}
      {others.length > 0 && (
        <section className="bg-primary-light/10 py-14 md:py-24">
          <div className="max-w-7xl mx-auto px-5 md:px-6">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-primary-dark leading-none">
                Mes autres ebooks
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {others.map((ebook) => (
                <a
                  key={ebook.slug}
                  href={ebook.etsyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card overflow-hidden flex flex-col shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-background">
                    <Image
                      src={ebook.cover}
                      alt={ebook.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    {ebook.tag && (
                      <span className="text-[10px] tracking-[0.2em] uppercase text-accent mb-2">
                        {ebook.tag}
                      </span>
                    )}
                    <h3 className="font-display text-lg md:text-xl text-primary-dark mb-3 leading-snug">
                      {ebook.title}
                    </h3>
                    <p className="text-sm text-foreground/75 leading-relaxed mb-5 flex-1">
                      {ebook.short}
                    </p>
                    <span className="text-primary-dark border-b border-primary-dark pb-1 text-xs tracking-[0.2em] uppercase self-start group-hover:text-primary group-hover:border-primary">
                      {ebook.ctaLabel || "Découvrir sur Etsy"} ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ CTA FINAL ═══════════ */}
      <section className="relative py-16 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/cropped-cascade-foret.png')" }}
        />
        <div className="absolute inset-0 bg-primary-dark/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-6 text-center text-white">
          <p className="font-script text-3xl sm:text-4xl md:text-5xl text-accent mb-6 leading-none">
            Prête à retrouver votre énergie ?
          </p>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 font-light">
            Un compagnon naturopathique à garder près de vous toute l&apos;année.
          </p>
          <a
            href={featured.etsyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-accent text-primary-dark text-xs tracking-[0.3em] uppercase hover:bg-white transition-colors"
          >
            {featured.ctaLabel || "Découvrir sur Etsy"} ↗
          </a>
          <p className="text-xs text-white/70 mt-6">
            Une question avant d&apos;acheter ?{" "}
            <Link href="/contact" className="underline hover:text-accent">
              Contactez Florence
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
