import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Florence Debattice — Naturopathe à Liège",
    short_name: "Flo Naturopathie",
    description:
      "Naturopathe certifiée à Trooz (Liège). Consultations en cabinet ou en ligne pour toute la Wallonie et la Belgique.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf8f3",
    theme_color: "#5d6e54",
    lang: "fr-BE",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
