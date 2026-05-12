import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // ════════════ ARTICLES DE BLOG ════════════
      {
        name: "blog",
        label: "Articles de blog",
        path: "content/blog",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "tag",
            label: "Étiquette (ex: Premier article)",
          },
          {
            type: "string",
            name: "intro",
            label: "Introduction (italique)",
            ui: { component: "textarea" },
          },
          {
            type: "image",
            name: "image1",
            label: "Image principale",
          },
          {
            type: "string",
            name: "publishedAt",
            label: "Date de publication",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu de l'article",
            isBody: true,
          },
        ],
      },

      // ════════════ PRESTATIONS ════════════
      {
        name: "prestation",
        label: "Prestations",
        path: "content/prestations",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug (URL du site)",
            description:
              "Identifiant utilisé dans l'URL de la page (ex: /mes-prestations/rendez-vous-informatif). Ne pas modifier sans précaution !",
            required: true,
          },
          {
            type: "string",
            name: "bookingSlug",
            label: "Slug Cal.com (optionnel)",
            description:
              "À remplir uniquement si l'event Cal.com a un slug différent du slug d'URL ci-dessus. Ex: 'rdv-informatif' alors que l'URL du site est 'rendez-vous-informatif'.",
          },
          {
            type: "string",
            name: "short",
            label: "Description courte (carte)",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "description",
            label: "Description complète (page produit)",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "price",
            label: "Prix (ex: 80 € ou Gratuit)",
          },
          {
            type: "string",
            name: "duration",
            label: "Durée (ex: 90 min)",
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "number",
            name: "order",
            label: "Ordre d'affichage",
            description: "Plus petit = affiché en premier",
          },
        ],
      },

      // ════════════ PARAMÈTRES SITE ════════════
      {
        name: "settings",
        label: "Paramètres du site",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Nom affiché (ex: Florence Debattice)",
          },
          {
            type: "string",
            name: "tagline",
            label: "Tagline (ex: Naturopathe)",
          },
          {
            type: "string",
            name: "address",
            label: "Adresse du cabinet",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "email",
            label: "Email de contact",
          },
          {
            type: "string",
            name: "facebookUrl",
            label: "URL Facebook (optionnel)",
          },
          {
            type: "string",
            name: "instagramUrl",
            label: "URL Instagram (optionnel)",
          },
        ],
      },
    ],
  },
});
