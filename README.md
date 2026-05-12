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
  - `pourquoi-consulter/` — Motifs de consultation
  - `mes-prestations/` — Liste + page produit dynamique `[slug]`
  - `blog/` — Article
  - `prendre-rdv/` — Réservation (embed Cal.com)
  - `contact/` — Coordonnées + formulaire newsletter
- `src/components/` — Header / Footer / PersonIcons / CalEmbed
- `src/lib/prestations.ts` — Source unique des 5 prestations
- `src/app/globals.css` — Variables de thème (couleurs, polices)

## Palette

- Vert sauge `#7a8b6f`
- Vert sauge foncé `#5d6e54`
- Crème `#fbf8f3`
- Brun terre `#2d2a24`
- Beige doré `#d4b896`

## Configuration Cal.com (réservation)

Le système de prise de rendez-vous est branché sur **[Cal.com](https://cal.com)** — alternative open-source à Calendly, gratuite à vie pour le besoin du site.

### Étapes pour Florence

1. **Créer un compte gratuit** sur [cal.com/signup](https://cal.com/signup)
   - Choisir un username (ex : `florence-debattice`)
2. **Connecter son Google Calendar** (Settings → Integrations) → indispensable pour que Cal.com voie ses RDV existants et bloque les créneaux.
3. **Configurer les disponibilités** générales (Settings → Availability) : jours travaillés et heures.
4. **Créer 5 Event Types** avec ces slugs (URL) exacts :
   | Slug Cal.com | Durée | Description |
   |---|---|---|
   | `rdv-informatif` | 30 min | Premier échange gratuit |
   | `consultation-initiale-en-ligne` | 90 min | 80 € — visio Google Meet |
   | `consultation-suivi-en-ligne` | 60 min | 65 € — visio Google Meet |
   | `consultation-initiale-cabinet` | 90 min | 80 € — au cabinet (Trooz) |
   | `consultation-suivi-cabinet` | 60 min | 65 € — au cabinet (Trooz) |
5. Pour chaque event :
   - Définir lieu (visio auto-créée pour "en ligne", adresse du cabinet pour "cabinet")
   - Activer rappels email automatiques
   - Délai mini de réservation (ex : 24h)

### Côté code

Une fois le compte créé :
- Si le username Cal.com est `flo-naturopathe` (déjà configuré) → **rien à toucher**, tout fonctionnera automatiquement.
- Si le username est différent : éditer la constante `CAL_USER` au début de [`src/lib/prestations.ts`](src/lib/prestations.ts).
- Si un slug d'event Cal.com diffère du slug de l'URL du site : ajouter `bookingSlug` dans le JSON correspondant de [`content/prestations/`](content/prestations/) (ou via Tina CMS).
  Exemple : pour le rendez-vous informatif, l'URL du site est `/mes-prestations/rendez-vous-informatif` mais Cal.com utilise `rdv-informatif` → on a donc `"bookingSlug": "rdv-informatif"` dans le JSON.

### Désactiver des jours / fermer des plages horaires

Tout se gère depuis Cal.com directement (Settings → Availability ou Schedules).
Aucun déploiement nécessaire — les changements sont instantanés sur le site.

## À faire

- [x] Branch Cal.com (structure prête, attente création compte)
- [ ] Brancher le formulaire newsletter (`/contact`) à un service réel (Brevo, Mailchimp ou Resend)
- [ ] Ajouter une page `mentions-legales`
- [ ] Compléter le SEO (meta descriptions, og:image)
