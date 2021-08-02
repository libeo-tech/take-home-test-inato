import { limitBenefitToMin, decreaseExpiresIn } from "../lib";

export const updateDafalgan = drug => {
  const benefitDecreased = {
    benefit: drug.expiresIn <= 0 ? drug.benefit - 4 : drug.benefit - 2
  };
  const expiresDecreased = decreaseExpiresIn(drug);
  const benefitSanitized = limitBenefitToMin(benefitDecreased);
  return { ...drug, ...expiresDecreased, ...benefitSanitized };
};
