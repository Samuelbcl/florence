import { describe, it, expect } from "vitest";
import { getAllPrestations, getPrestation } from "./prestations";

describe("getAllPrestations", () => {
  it("retourne toutes les prestations triées par order croissant", async () => {
    const all = await getAllPrestations();
    expect(all.length).toBeGreaterThan(0);
    const orders = all.map((p) => p.order ?? 99);
    const sorted = [...orders].sort((a, b) => a - b);
    expect(orders).toEqual(sorted);
  });

  it("utilise bookingSlug pour construire l'URL Cal.com quand il est présent", async () => {
    const rdv = await getPrestation("rendez-vous-informatif");
    expect(rdv).toBeDefined();
    // Régression du bug Cal.com : sans bookingSlug, l'URL pointait vers
    // /rendez-vous-informatif qui n'existe pas chez Cal.com (event = rdv-informatif)
    expect(rdv?.bookingUrl).toBe(
      "https://cal.com/flo-naturopathe/rdv-informatif"
    );
  });

  it("retombe sur slug pour bookingUrl quand bookingSlug est absent", async () => {
    const presta = await getPrestation("consultation-initiale-en-ligne");
    expect(presta).toBeDefined();
    expect(presta?.bookingUrl).toBe(
      "https://cal.com/flo-naturopathe/consultation-initiale-en-ligne"
    );
  });
});

describe("getPrestation", () => {
  it("retourne undefined pour un slug inconnu", async () => {
    const result = await getPrestation("slug-qui-existe-pas");
    expect(result).toBeUndefined();
  });
});
