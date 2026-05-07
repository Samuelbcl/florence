/* eslint-disable @next/next/no-img-element */
type IconProps = {
  className?: string;
  alt?: string;
};

function makeIcon(src: string, defaultAlt: string) {
  return function Icon({ className, alt }: IconProps) {
    return (
      <img
        src={src}
        alt={alt ?? defaultAlt}
        className={className}
      />
    );
  };
}

// Mapping (à valider) :
//   icon-1.svg → femme
//   icon-2.svg → homme
//   icon-3.svg → personne âgée (avec chignon)
//   icon-child.png → enfant / ado
//   icon-group.png → couple / accompagnement pour tous
export const IconWoman = makeIcon("/icon-1.svg", "Femme");
export const IconMan = makeIcon("/icon-2.svg", "Homme");
export const IconElderly = makeIcon("/icon-3.svg", "Personne âgée");
export const IconChild = makeIcon("/icon-child.png", "Enfant");
export const IconCouple = makeIcon("/icon-group.png", "Accompagnement pour tous");
