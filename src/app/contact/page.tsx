import type { Metadata } from "next";
import { getSiteSettings } from "../../lib/settings";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — Florence Debattice",
  description:
    "Coordonnées du cabinet de naturopathie de Florence Debattice à Trooz et inscription à la newsletter.",
};

export default async function Contact() {
  const settings = await getSiteSettings();
  return <ContactClient settings={settings} />;
}
