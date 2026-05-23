"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { SiteSettings } from "../lib/settings";

const navLinks: {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}[] = [
  { href: "/", label: "Bienvenue" },
  { href: "/votre-naturopathe", label: "Votre naturopathe" },
  { href: "/pourquoi-consulter", label: "Pourquoi consulter ?" },
  { href: "/mes-prestations", label: "Mes prestations" },
  { href: "/ebook", label: "Ebook" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ settings }: { settings: SiteSettings }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const transparentPages = ["/", "/votre-naturopathe", "/pourquoi-consulter"];
  const hasTransparentHero = transparentPages.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloque le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Ferme le drawer si la fenêtre passe en desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const transparent = hasTransparentHero && !scrolled && !mobileOpen;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeAndScroll = () => {
    setMobileOpen(false);
    scrollToTop();
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          transparent ? "bg-transparent" : "bg-background/95 backdrop-blur"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-6 py-4 md:py-5 flex items-center justify-between">
          <Link
            href="/"
            onClick={scrollToTop}
            className="flex flex-col leading-none"
          >
            <span className="font-display text-lg sm:text-xl md:text-2xl tracking-wide text-primary-dark">
              {settings.siteName}
            </span>
            <span className="text-[9px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase text-muted mt-1">
              {settings.tagline}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  onClick={scrollToTop}
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="bg-card border border-border shadow-lg rounded-sm py-2 min-w-[180px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={scrollToTop}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-background hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/prendre-rdv"
              onClick={scrollToTop}
              className="ml-2 px-5 py-2.5 bg-primary text-white text-xs tracking-[0.2em] uppercase hover:bg-primary-dark transition-colors"
            >
              Prendre RDV
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[60]"
          >
            <span
              className={`block h-px w-6 bg-foreground transition-transform duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-foreground transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-foreground transition-transform duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer plein écran (rendu conditionnel) */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background pt-[68px] md:pt-[80px]">
          <nav className="h-full overflow-y-auto px-6 py-8 flex flex-col text-center">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-border">
                  <Link
                    href={link.href}
                    onClick={closeAndScroll}
                    className="block py-4 text-lg font-display text-primary-dark hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/prendre-rdv"
              onClick={closeAndScroll}
              className="mt-8 mx-auto px-8 py-4 bg-primary-dark text-white text-xs tracking-[0.25em] uppercase hover:bg-primary transition-colors"
            >
              Prendre RDV
            </Link>

            <div className="mt-auto pt-10">
              <p className="text-xs tracking-[0.25em] uppercase text-muted mb-3">
                Cabinet
              </p>
              <p className="text-sm text-foreground/85 leading-relaxed whitespace-pre-line">
                {settings.address}
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
