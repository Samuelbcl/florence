import Link from "next/link";
import type { SiteSettings } from "../lib/settings";

export default function Footer({ settings }: { settings: SiteSettings }) {
  const hasFacebook = settings.facebookUrl.trim().length > 0;
  const hasInstagram = settings.instagramUrl.trim().length > 0;
  const hasSocial = hasFacebook || hasInstagram;

  return (
    <footer className="bg-primary-dark text-white mt-16 md:mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-3 gap-8 md:gap-12">
        <div>
          <h3 className="font-display text-xl md:text-2xl mb-3">
            {settings.siteName}
          </h3>
          <p className="text-sm text-white/80 leading-relaxed">
            {settings.tagline} certifiée. Pour un retour à votre équilibre
            naturel, en douceur et en bienveillance.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 text-white/70">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-accent">Bienvenue</Link></li>
            <li><Link href="/votre-naturopathe" className="hover:text-accent">Votre naturopathe</Link></li>
            <li><Link href="/pourquoi-consulter" className="hover:text-accent">Pourquoi consulter ?</Link></li>
            <li><Link href="/mes-prestations" className="hover:text-accent">Mes prestations</Link></li>
            <li><Link href="/ebook" className="hover:text-accent">Ebook</Link></li>
            <li><Link href="/blog" className="hover:text-accent">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-accent">FAQ</Link></li>
            <li><Link href="/prendre-rdv" className="hover:text-accent">Prendre RDV</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 text-white/70">
            Contact
          </h4>
          <p className="text-sm text-white/80 mb-4 whitespace-pre-line">
            Cabinet de naturopathie
            {"\n"}
            {settings.address}
          </p>
          <p className="text-sm text-white/80 mb-4">
            <a
              href={`mailto:${settings.email}`}
              className="hover:text-accent break-all"
            >
              {settings.email}
            </a>
          </p>
          {settings.phone && (
            <p className="text-sm text-white/80 mb-4">
              <a
                href={`tel:${settings.phone.replace(/\s/g, "")}`}
                className="hover:text-accent"
              >
                {settings.phoneDisplay || settings.phone}
              </a>
            </p>
          )}
          {hasSocial && (
            <div className="flex gap-3">
              {hasFacebook && (
                <a
                  href={settings.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10"
                >
                  <span className="text-sm">f</span>
                </a>
              )}
              {hasInstagram && (
                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10"
                >
                  <span className="text-sm">@</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/60">
          <span>© {new Date().getFullYear()} {settings.siteName} {settings.tagline}</span>
          <div className="flex gap-4 md:gap-5">
            <Link href="/mentions-legales" className="hover:text-accent">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-accent">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
