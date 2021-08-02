import { limitBenefitToMax, decreaseExpiresIn } from "../lib";

export const updateHerbalTea = drug => {
  const benefitIncreased = {
    benefit: drug.expiresIn <= 0 ? drug.benefit + 2 : drug.benefit + 1
  };
  const expiresDecreased = decreaseExpiresIn(drug);
  const benefitSanitized = limitBenefitToMax(benefitIncreased);
  return { ...drug, ...expiresDecreased, ...benefitSanitized };
};
