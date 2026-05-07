import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-2xl mb-3">Florence Debattice</h3>
          <p className="text-sm text-white/80 leading-relaxed">
            Naturopathe certifiée. Pour un retour à votre équilibre naturel,
            en douceur et en bienveillance.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase mb-4 text-white/70">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-accent">Bienvenue</Link></li>
            <li><Link href="/votre-naturopathe" className="hover:text-accent">Votre naturopathe</Link></li>
            <li><Link href="/pourquoi-consulter" className="hover:text-accent">Pourquoi consulter ?</Link></li>
            <li><Link href="/mes-prestations" className="hover:text-accent">Mes prestations</Link></li>
            <li><Link href="/blog" className="hover:text-accent">Blog</Link></li>
            <li><Link href="/prendre-rdv" className="hover:text-accent">Prendre RDV</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase mb-4 text-white/70">
            Contact
          </h4>
          <p className="text-sm text-white/80 mb-4">
            Cabinet de naturopathie<br />
            Adresse à compléter<br />
            06 00 00 00 00
          </p>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10">
              <span className="text-sm">f</span>
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10">
              <span className="text-sm">@</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/60">
          <span>© {new Date().getFullYear()} Florence Debattice Naturopathe</span>
          <Link href="/mentions-legales" className="hover:text-accent">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
