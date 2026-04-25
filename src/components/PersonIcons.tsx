type IconProps = {
  className?: string;
};

const baseSvg = "stroke-current fill-none";

export function IconWoman({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${baseSvg} ${className ?? ""}`}
      aria-hidden
    >
      {/* Tête simple */}
      <path d="M40 12 C30 12, 26 20, 26 30 C26 38, 30 44, 40 44 C50 44, 54 38, 54 30 C54 20, 50 12, 40 12 Z" />
      {/* Cou + épaules avec petit léger évasement (suggère cheveux longs) */}
      <path d="M34 44 L33 52 C25 56, 18 64, 16 76" />
      <path d="M46 44 L47 52 C55 56, 62 64, 64 76" />
    </svg>
  );
}

export function IconMan({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${baseSvg} ${className ?? ""}`}
      aria-hidden
    >
      {/* Tête plus carrée */}
      <path d="M40 12 C30 12, 27 18, 27 28 C27 36, 31 42, 40 42 C49 42, 53 36, 53 28 C53 18, 50 12, 40 12 Z" />
      {/* Cou + épaules plus larges */}
      <path d="M34 42 L33 50 C24 54, 16 64, 14 76" />
      <path d="M46 42 L47 50 C56 54, 64 64, 66 76" />
    </svg>
  );
}

export function IconElderly({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${baseSvg} ${className ?? ""}`}
      aria-hidden
    >
      {/* Petit chignon */}
      <circle cx="40" cy="10" r="4" />
      {/* Tête */}
      <path d="M40 14 C30 14, 26 22, 26 32 C26 40, 30 46, 40 46 C50 46, 54 40, 54 32 C54 22, 50 14, 40 14 Z" />
      {/* Cou + épaules */}
      <path d="M34 46 L33 54 C25 58, 18 66, 16 76" />
      <path d="M46 46 L47 54 C55 58, 62 66, 64 76" />
    </svg>
  );
}

export function IconChild({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${baseSvg} ${className ?? ""}`}
      aria-hidden
    >
      {/* Tête plus ronde et plus petite */}
      <path d="M40 18 C32 18, 29 24, 29 32 C29 38, 32 43, 40 43 C48 43, 51 38, 51 32 C51 24, 48 18, 40 18 Z" />
      {/* Cou + épaules plus étroites */}
      <path d="M35 43 L34 50 C28 54, 22 62, 20 76" />
      <path d="M45 43 L46 50 C52 54, 58 62, 60 76" />
    </svg>
  );
}

export function IconCouple({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 140 80"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${baseSvg} ${className ?? ""}`}
      aria-hidden
    >
      {/* Personne gauche (homme) */}
      <path d="M50 12 C40 12, 37 18, 37 28 C37 36, 41 42, 50 42 C59 42, 63 36, 63 28 C63 18, 60 12, 50 12 Z" />
      <path d="M44 42 L43 50 C36 54, 28 64, 26 76" />
      <path d="M56 42 L57 50 C64 54, 70 60, 72 70" />
      {/* Personne droite (femme) */}
      <path d="M92 12 C82 12, 78 20, 78 30 C78 38, 82 44, 92 44 C102 44, 106 38, 106 30 C106 20, 102 12, 92 12 Z" />
      <path d="M86 44 L85 52 C78 56, 72 64, 70 76" />
      <path d="M98 44 L99 52 C107 56, 113 64, 115 76" />
    </svg>
  );
}
