type Props = {
  query?: string;
  title?: string;
  className?: string;
};

/**
 * Carte Google Maps embarquée (sans clé API).
 * Lazy-loaded nativement par le navigateur via loading="lazy".
 */
export default function GoogleMap({
  query = "Rue de Beaufays 17b, 4870 Trooz, Belgique",
  title = "Cabinet de Florence Debattice — Naturopathe à Trooz",
  className = "",
}: Props) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed&hl=fr`;

  return (
    <div
      className={`relative w-full overflow-hidden shadow-md bg-primary-light/10 ${className}`}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allow="fullscreen"
        className="block w-full h-full border-0"
      />
    </div>
  );
}
