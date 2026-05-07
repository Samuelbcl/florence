"use client";

/**
 * Embed Cal.com inline.
 * Reçoit l'URL complète d'un event Cal.com (ex: https://cal.com/florence-debattice/rdv-informatif)
 * et l'affiche en iframe responsive.
 */
type Props = {
  bookingUrl: string;
  className?: string;
};

export default function CalEmbed({ bookingUrl, className }: Props) {
  // On ajoute ?embed=true pour avoir le mode embed sans header Cal.com
  const url = new URL(bookingUrl);
  url.searchParams.set("embed", "true");
  url.searchParams.set("layout", "month_view");
  // On peut aussi passer un theme : url.searchParams.set("theme", "light");

  return (
    <div
      className={`w-full bg-white border border-border rounded-xl overflow-hidden shadow-md ${className ?? ""}`}
    >
      <iframe
        src={url.toString()}
        className="w-full border-0"
        style={{ minHeight: "640px" }}
        loading="lazy"
        title="Calendrier de réservation"
      />
    </div>
  );
}
