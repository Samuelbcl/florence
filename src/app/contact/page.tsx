import type { Metadata } from "next";
import { getSiteSettings } from "../../lib/settings";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — Cabinet de naturopathie à Trooz",
  description:
    "Coordonnées du cabinet de naturopathie de Florence Debattice à Trooz (Liège, Wallonie) et inscription à la newsletter santé naturelle.",
  alternates: { canonical: "/contact" },
};

export default async function Contact() {
  const settings = await getSiteSettings();
  return <ContactClient settings={settings} />;
}
