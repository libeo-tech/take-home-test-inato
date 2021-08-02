import { limitBenefitToMax, decreaseExpiresIn } from "../lib";

export const updateFervex = drug => {
  let benefitUpdated = drug.benefit + 1;
  if (drug.expiresIn <= 0) {
    benefitUpdated = 0;
  }
  if (drug.expiresIn > 0 && drug.expiresIn <= 5) {
    benefitUpdated = drug.benefit + 3;
  }
  if (drug.expiresIn > 5 && drug.expiresIn <= 10) {
    benefitUpdated = drug.benefit + 2;
  }
  const benefitIncreased = {
    benefit: benefitUpdated
  };
  const expiresDecreased = decreaseExpiresIn(drug);
  const benefitSanitized = limitBenefitToMax(benefitIncreased);
  return { ...drug, ...expiresDecreased, ...benefitSanitized };
};
