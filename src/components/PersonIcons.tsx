/* eslint-disable @next/next/no-img-element */
type IconProps = {
  className?: string;
  alt?: string;
};

function makeIcon(src: string, defaultAlt: string) {
  return function Icon({ className, alt }: IconProps) {
    return (
      <img src={src} alt={alt ?? defaultAlt} className={className} />
    );
  };
}

// Mapping :
//   icon-1.svg → femme
//   icon-2.svg → homme
//   icon-3.svg → personne âgée (avec chignon)
//   icon-child.png → enfant / ado (transparent via remove.bg)
export const IconWoman = makeIcon("/icon-1.svg", "Femme");
export const IconMan = makeIcon("/icon-2.svg", "Homme");
export const IconElderly = makeIcon("/icon-3.svg", "Personne âgée");
export const IconChild = makeIcon("/icon-child.png", "Enfant");

// Couple / accompagnement pour tous : SVG inline (en attendant la version PNG transparente)
export function IconCouple({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 140 80"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`stroke-current fill-none ${className ?? ""}`}
      aria-hidden
    >
      {/* Personne gauche */}
      <path d="M50 12 C40 12, 37 18, 37 28 C37 36, 41 42, 50 42 C59 42, 63 36, 63 28 C63 18, 60 12, 50 12 Z" />
      <path d="M44 42 L43 50 C36 54, 28 64, 26 76" />
      <path d="M56 42 L57 50 C64 54, 70 60, 72 70" />
      {/* Personne droite */}
      <path d="M92 12 C82 12, 78 20, 78 30 C78 38, 82 44, 92 44 C102 44, 106 38, 106 30 C106 20, 102 12, 92 12 Z" />
      <path d="M86 44 L85 52 C78 56, 72 64, 70 76" />
      <path d="M98 44 L99 52 C107 56, 113 64, 115 76" />
    </svg>
  );
}
