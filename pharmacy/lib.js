import { MIN_BENEFIT_VALUE, MAX_BENEFIT_VALUE } from "./constants";

export const limitBenefitToMin = drug => {
  if (drug.benefit < MIN_BENEFIT_VALUE) {
    return { benefit: MIN_BENEFIT_VALUE };
  }
  return drug;
};

export const limitBenefitToMax = drug => {
  if (drug.benefit > MAX_BENEFIT_VALUE) {
    return { benefit: MAX_BENEFIT_VALUE };
  }
  return drug;
};

export const decreaseExpiresIn = drug => {
  return {
    expiresIn: drug.expiresIn - 1
  };
};
