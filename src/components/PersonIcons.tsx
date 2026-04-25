type IconProps = {
  className?: string;
};

const baseSvg = "stroke-current fill-none";

export function IconWoman({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 100 110"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${baseSvg} ${className ?? ""}`}
      aria-hidden
    >
      {/* Cheveux longs ondulés */}
      <path d="M30 38 Q26 60, 30 82" />
      <path d="M70 38 Q74 60, 70 82" />
      {/* Visage / tête */}
      <ellipse cx="50" cy="40" rx="17" ry="20" />
      {/* Mèche frange */}
      <path d="M37 30 Q45 22, 50 28 Q55 22, 63 30" />
      {/* Cou */}
      <path d="M44 60 L44 70 M56 60 L56 70" />
      {/* Épaules */}
      <path d="M28 90 Q40 78, 50 78 Q60 78, 72 90" />
    </svg>
  );
}

export function IconMan({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 100 110"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${baseSvg} ${className ?? ""}`}
      aria-hidden
    >
      {/* Tête */}
      <ellipse cx="50" cy="40" rx="16" ry="19" />
      {/* Cheveux courts */}
      <path d="M34 32 Q42 22, 50 22 Q58 22, 66 32" />
      <path d="M36 36 Q43 30, 50 30 Q57 30, 64 36" />
      {/* Cou */}
      <path d="M44 59 L44 70 M56 59 L56 70" />
      {/* Épaules */}
      <path d="M26 90 Q38 76, 50 76 Q62 76, 74 90" />
    </svg>
  );
}

export function IconElderly({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 100 110"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${baseSvg} ${className ?? ""}`}
      aria-hidden
    >
      {/* Chignon */}
      <circle cx="50" cy="20" r="6" />
      {/* Tête */}
      <ellipse cx="50" cy="42" rx="16" ry="19" />
      {/* Cheveux tirés vers chignon */}
      <path d="M36 36 Q42 28, 50 26 Q58 28, 64 36" />
      {/* Lunettes ovales */}
      <ellipse cx="44" cy="42" rx="3.5" ry="2.5" />
      <ellipse cx="56" cy="42" rx="3.5" ry="2.5" />
      <path d="M47.5 42 L52.5 42" />
      {/* Cou */}
      <path d="M45 60 L45 70 M55 60 L55 70" />
      {/* Épaules */}
      <path d="M28 90 Q40 78, 50 78 Q60 78, 72 90" />
    </svg>
  );
}

export function IconChild({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 100 110"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${baseSvg} ${className ?? ""}`}
      aria-hidden
    >
      {/* Tête plus ronde */}
      <circle cx="50" cy="42" r="18" />
      {/* Cheveux mèche courte */}
      <path d="M34 38 Q42 26, 50 26 Q58 26, 66 38" />
      <path d="M40 32 Q45 28, 50 30" />
      {/* Cou */}
      <path d="M45 62 L45 72 M55 62 L55 72" />
      {/* Épaules plus étroites */}
      <path d="M32 92 Q42 80, 50 80 Q58 80, 68 92" />
    </svg>
  );
}

export function IconCouple({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 140 110"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${baseSvg} ${className ?? ""}`}
      aria-hidden
    >
      {/* Personne gauche */}
      <ellipse cx="50" cy="40" rx="14" ry="17" />
      <path d="M36 32 Q44 22, 50 22 Q56 22, 64 32" />
      <path d="M30 90 Q42 76, 50 76 Q58 76, 66 84" />
      {/* Personne droite (femme) */}
      <ellipse cx="92" cy="42" rx="14" ry="17" />
      <path d="M78 36 Q75 56, 78 76" />
      <path d="M106 36 Q109 56, 106 76" />
      <path d="M74 90 Q86 78, 92 78 Q100 78, 110 90" />
    </svg>
  );
}
