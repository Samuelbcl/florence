"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks: {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}[] = [
  { href: "/", label: "Bienvenue" },
  { href: "/votre-naturopathe", label: "Votre naturopathe" },
  { href: "/pourquoi-consulter", label: "Pourquoi consulter ?" },
  { href: "/mes-prestations", label: "Mes prestations" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // Pages dont le hero doit passer derrière le header transparent
  const transparentPages = ["/", "/votre-naturopathe"];
  const hasTransparentHero = transparentPages.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = hasTransparentHero && !scrolled;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur shadow-[0_1px_0_0_var(--border)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl tracking-wide text-primary-dark">
            Florence Debattice
          </span>
          <span className="text-xs tracking-[0.3em] uppercase text-muted mt-1">
            Naturopathe
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
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
            className="ml-2 px-5 py-2.5 bg-primary text-white text-xs tracking-[0.2em] uppercase hover:bg-primary-dark transition-colors"
          >
            Prendre RDV
          </Link>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span className="w-6 h-px bg-foreground" />
          <span className="w-6 h-px bg-foreground" />
          <span className="w-6 h-px bg-foreground" />
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 flex flex-col">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-sm text-muted hover:text-primary"
                      >
                        — {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/prendre-rdv"
              onClick={() => setMobileOpen(false)}
              className="mt-3 px-5 py-3 bg-primary text-white text-xs tracking-[0.2em] uppercase text-center"
            >
              Prendre RDV
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
