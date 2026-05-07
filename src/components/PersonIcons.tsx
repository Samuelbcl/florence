/* eslint-disable @next/next/no-img-element */
type IconProps = {
  className?: string;
  alt?: string;
};

function makeIcon(src: string, defaultAlt: string, extraClass?: string) {
  return function Icon({ className, alt }: IconProps) {
    return (
      <img
        src={src}
        alt={alt ?? defaultAlt}
        className={`${extraClass ?? ""} ${className ?? ""}`.trim()}
      />
    );
  };
}

// Mapping :
//   icon-1.svg → femme
//   icon-2.svg → homme
//   icon-3.svg → personne âgée (avec chignon)
//   icon-child.png et couple.png ont du padding interne dans leurs PNG :
//   on applique un scale-[1.4] CSS pour que la silhouette apparaisse à
//   la même échelle que les SVG line-art à boîte égale.
export const IconWoman = makeIcon("/icon-1.svg", "Femme");
export const IconMan = makeIcon("/icon-2.svg", "Homme");
export const IconElderly = makeIcon("/icon-3.svg", "Personne âgée");
export const IconChild = makeIcon("/icon-child.png", "Enfant", "scale-[1.4]");
export const IconCouple = makeIcon(
  "/couple.png",
  "Accompagnement pour tous",
  "scale-[1.7]"
);
