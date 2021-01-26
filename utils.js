export const DRUGS = {
  DAFALGAN: "Dafalgan",
  FERVEX: "Fervex",
  HERBAL_TEA: "Herbal Tea",
  MAGIC_PILL: "Magic Pill",
};

const { DAFALGAN, FERVEX, HERBAL_TEA, MAGIC_PILL } = DRUGS;

export const calculateExpirationValue = (drug) => {
  return drug.name === MAGIC_PILL ? drug.expiresIn : drug.expiresIn - 1;
};

const applyBoundaries = (value) => {
  if (value > 50) return 50;
  if (value < 0) return 0;
  return value;
};

const BASE_DEGRADATION = 1;
const getBenefitValueWithoutBoundaries = (drug) => {
  switch (drug.name) {
    case DAFALGAN:
      return drug.expiresIn > 0
        ? drug.benefit - 2 * BASE_DEGRADATION
        : drug.benefit - 2 * 2 * BASE_DEGRADATION; // 2 x normal degradation after expiration

    case FERVEX:
      if (drug.expiresIn <= 0) return 0;

      if (drug.expiresIn <= 5) {
        return drug.benefit + 3 * BASE_DEGRADATION;
      }

      if (drug.expiresIn > 5 && drug.expiresIn <= 10) {
        return drug.benefit + 2 * BASE_DEGRADATION;
      }

      return drug.benefit + BASE_DEGRADATION;

    case HERBAL_TEA:
      return drug.expiresIn > 0
        ? drug.benefit + BASE_DEGRADATION
        : drug.benefit + 2 * BASE_DEGRADATION;

    case MAGIC_PILL:
      return drug.benefit;

    default:
      return drug.expiresIn > 0
        ? drug.benefit - BASE_DEGRADATION
        : drug.benefit - 2 * BASE_DEGRADATION;
  }
};

export const calculateBenefitValue = (drug) => {
  return applyBoundaries(getBenefitValueWithoutBoundaries(drug));
};
