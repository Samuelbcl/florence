# Florence Debattice — Naturopathe

Site vitrine et prise de rendez-vous pour Florence Debattice, naturopathe.

Construit avec **Next.js 16** (App Router), **TypeScript** et **Tailwind CSS v4**.
Déployé sur **Vercel**.

## Démarrage

```bash
npm install
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/` — Pages (App Router Next.js)
  - `page.tsx` — Accueil (Bienvenue)
  - `votre-naturopathe/` — Présentation de Florence
  - `la-naturopathie/` — Bases & techniques
  - `pourquoi-consulter/` — Motifs de consultation, témoignages
  - `mes-prestations/` — Tarifs et services
  - `blog/` — Articles
  - `prendre-rdv/` — Réservation en ligne
- `src/components/` — Header / Footer partagés
- `src/app/globals.css` — Variables de thème (couleurs, polices)

## Palette

- Vert sauge `#7a8b6f`
- Vert sauge foncé `#5d6e54`
- Crème `#fbf8f3`
- Brun terre `#2d2a24`
- Beige doré `#d4b896`

## À faire

- [ ] Remplacer les textes copiés du site de référence par les contenus propres à Florence
- [ ] Ajouter les vraies photos
- [ ] Intégrer le widget de réservation Resalib (page `prendre-rdv`)
- [ ] Compléter les coordonnées (téléphone, email, adresse) dans `Footer.tsx` et `prendre-rdv/page.tsx`
- [ ] Ajouter une page `mentions-legales`
- [ ] Connecter le repo à Vercel pour le déploiement continu
