import type { Metadata } from "next";
import Link from "next/link";
import { getSiteSettings } from "../../lib/settings";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données — site flonaturopathie.com. RGPD, droits utilisateurs, cookies, newsletter.",
  alternates: { canonical: "/politique-de-confidentialite" },
};

export default async function PolitiqueConfidentialite() {
  const settings = await getSiteSettings();

  return (
    <>
      <nav className="bg-background pt-6 md:pt-8" aria-label="Fil d'Ariane">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          <ol className="flex items-center gap-2 text-xs md:text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-primary-dark">
                Accueil
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-foreground/85">Politique de confidentialité</li>
          </ol>
        </div>
      </nav>

      <section className="bg-background py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          <h1 className="font-display text-3xl md:text-5xl text-primary-dark leading-tight mb-8 md:mb-10">
            Politique de confidentialité
          </h1>

          <p className="text-sm text-muted mb-10">
            Dernière mise à jour : 2026. Conforme au RGPD (Règlement Général
            sur la Protection des Données) et à la loi belge du 30 juillet
            2018 relative à la protection des personnes physiques à
            l&apos;égard des traitements de données à caractère personnel.
          </p>

          <article className="space-y-10 text-base text-foreground/85 leading-[1.75]">
            {/* RESPONSABLE TRAITEMENT */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Responsable du traitement
              </h2>
              <p>
                <strong>Florence Debattice</strong>, naturopathe, est la
                responsable du traitement de vos données personnelles
                collectées via le site flonaturopathie.com.
              </p>
              <p className="mt-3">
                Vous pouvez la contacter pour toute question relative à vos
                données personnelles à l&apos;adresse{" "}
                <a
                  href={`mailto:${settings.email}`}
                  className="text-primary-dark underline hover:text-primary"
                >
                  {settings.email}
                </a>
                .
              </p>
            </section>

            {/* DONNÉES COLLECTÉES */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Données collectées
              </h2>
              <p>
                Les seules données personnelles collectées via le site sont
                celles que vous nous fournissez activement :
              </p>
              <ul className="mt-3 ml-5 space-y-2 list-disc">
                <li>
                  <strong>Inscription à la newsletter</strong> : adresse
                  email + consentement explicite (case à cocher).
                </li>
                <li>
                  <strong>Prise de rendez-vous (via Cal.com)</strong> : nom,
                  email, motif de consultation, créneau choisi. Ces données
                  sont traitées par Cal.com et nécessaires à la gestion du
                  rendez-vous.
                </li>
                <li>
                  <strong>Email envoyé directement</strong> : contenu du
                  message et adresse email de l&apos;expéditeur.
                </li>
              </ul>
              <p className="mt-3">
                Le site n&apos;utilise <strong>aucun cookie de tracking</strong>
                {" "}publicitaire ni d&apos;outil d&apos;analyse comportementale
                tiers.
              </p>
            </section>

            {/* FINALITÉS */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Finalités du traitement
              </h2>
              <p>Vos données sont utilisées exclusivement pour :</p>
              <ul className="mt-3 ml-5 space-y-2 list-disc">
                <li>Vous envoyer la newsletter à laquelle vous vous êtes inscrit(e) ;</li>
                <li>Gérer et confirmer votre rendez-vous ;</li>
                <li>Répondre à vos demandes envoyées par email ;</li>
                <li>Assurer le suivi naturopathique le cas échéant.</li>
              </ul>
              <p className="mt-3">
                Vos données ne sont <strong>jamais vendues ni cédées</strong> à
                des tiers à des fins commerciales.
              </p>
            </section>

            {/* BASE LÉGALE */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Base légale
              </h2>
              <p>Le traitement de vos données repose sur :</p>
              <ul className="mt-3 ml-5 space-y-2 list-disc">
                <li>
                  Votre <strong>consentement explicite</strong> pour la
                  newsletter (article 6.1.a du RGPD) ;
                </li>
                <li>
                  L&apos;<strong>exécution d&apos;un contrat</strong> ou de
                  mesures pré-contractuelles pour la prise de rendez-vous
                  (article 6.1.b) ;
                </li>
                <li>
                  L&apos;<strong>intérêt légitime</strong> à répondre à vos
                  demandes par email (article 6.1.f).
                </li>
              </ul>
            </section>

            {/* DURÉE */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Durée de conservation
              </h2>
              <ul className="ml-5 space-y-2 list-disc">
                <li>
                  <strong>Newsletter</strong> : jusqu&apos;à votre désinscription
                  (lien présent dans chaque email).
                </li>
                <li>
                  <strong>Rendez-vous</strong> : 5 ans à partir du dernier
                  rendez-vous, conformément aux obligations de conservation
                  des dossiers de soins.
                </li>
                <li>
                  <strong>Emails reçus</strong> : 3 ans à compter de votre
                  dernière interaction, sauf demande de suppression de votre
                  part.
                </li>
              </ul>
            </section>

            {/* DESTINATAIRES */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Destinataires des données
              </h2>
              <p>
                Vos données sont accessibles uniquement à Florence Debattice
                et aux sous-traitants techniques nécessaires au fonctionnement
                du site :
              </p>
              <ul className="mt-3 ml-5 space-y-2 list-disc">
                <li>
                  <strong>Vercel Inc.</strong> (hébergement) — basé aux
                  États-Unis, conforme aux clauses contractuelles types de
                  la Commission européenne.
                </li>
                <li>
                  <strong>Systeme.io</strong> (gestion newsletter) — basé en
                  France/UE.
                </li>
                <li>
                  <strong>Cal.com</strong> (gestion rendez-vous) — conforme
                  RGPD.
                </li>
                <li>
                  <strong>Hostinger</strong> (boîte mail professionnelle).
                </li>
              </ul>
            </section>

            {/* DROITS */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Vos droits
              </h2>
              <p>Conformément au RGPD, vous disposez à tout moment des droits suivants :</p>
              <ul className="mt-3 ml-5 space-y-2 list-disc">
                <li><strong>Droit d&apos;accès</strong> à vos données ;</li>
                <li><strong>Droit de rectification</strong> de données inexactes ;</li>
                <li><strong>Droit à l&apos;effacement</strong> (« droit à l&apos;oubli ») ;</li>
                <li><strong>Droit à la limitation</strong> du traitement ;</li>
                <li><strong>Droit à la portabilité</strong> de vos données ;</li>
                <li><strong>Droit d&apos;opposition</strong> au traitement ;</li>
                <li>
                  <strong>Droit de retirer votre consentement</strong> à tout
                  moment (notamment via le lien de désinscription de la
                  newsletter).
                </li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, envoyez votre demande à{" "}
                <a
                  href={`mailto:${settings.email}`}
                  className="text-primary-dark underline hover:text-primary"
                >
                  {settings.email}
                </a>
                . Une réponse vous sera apportée dans un délai d&apos;un mois
                maximum.
              </p>
            </section>

            {/* RÉCLAMATION */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Droit de réclamation
              </h2>
              <p>
                Si vous estimez que le traitement de vos données ne respecte
                pas le RGPD, vous pouvez introduire une réclamation auprès de
                l&apos;<strong>Autorité de protection des données (APD)</strong>
                {" "}belge :
              </p>
              <p className="mt-2">
                Rue de la Presse 35, 1000 Bruxelles
                <br />
                <a
                  href="https://www.autoriteprotectiondonnees.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-dark underline hover:text-primary"
                >
                  www.autoriteprotectiondonnees.be
                </a>
              </p>
            </section>

            {/* COOKIES */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Cookies
              </h2>
              <p>
                Le site flonaturopathie.com n&apos;utilise{" "}
                <strong>aucun cookie de tracking ni de publicité</strong>.
                Seuls les cookies techniques strictement nécessaires au
                fonctionnement du site peuvent être déposés (préférences
                d&apos;affichage, session). Ils sont exemptés de consentement
                explicite par la réglementation.
              </p>
            </section>

            {/* MODIFICATIONS */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Modifications
              </h2>
              <p>
                La présente politique peut être mise à jour. La date de
                dernière mise à jour figure en tête de cette page.
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
