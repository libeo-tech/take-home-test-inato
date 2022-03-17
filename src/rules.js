import { MAX_BENEFIT, MIN_BENEFIT } from './constant.js';
export const drugRules = {
  'Magic Pill': ({ name, expiresIn, benefit }) => ({ name, expiresIn, benefit }),
  'Herbal Tea': ({ name, expiresIn, benefit }) => {
    const calculatedBenefit = expiresIn > 0 ? benefit + 1 : benefit + 2;
    return {
      name,
      expiresIn: --expiresIn,
      benefit: calculatedBenefit > MAX_BENEFIT ? MAX_BENEFIT : calculatedBenefit,
    };
  },
  Fervex: ({ name, benefit, expiresIn }) => {
    const calculatedBenefit =
      expiresIn > 10 ? benefit + 1 : expiresIn > 5 ? benefit + 2 : expiresIn > 0 ? benefit + 3 : 0;
    return {
      name,
      expiresIn: --expiresIn,
      benefit: calculatedBenefit > MAX_BENEFIT ? MAX_BENEFIT : calculatedBenefit,
    };
  },
  Dafalgan: ({ name, benefit, expiresIn }) => {
    const calculatedBenefit = expiresIn <= 0 ? benefit - 4 : benefit - 2;
    return {
      name,
      expiresIn: --expiresIn,
      benefit:
        calculatedBenefit > MAX_BENEFIT
          ? MAX_BENEFIT
          : calculatedBenefit < MIN_BENEFIT
          ? MIN_BENEFIT
          : calculatedBenefit,
    };
  },
  default: ({ name, benefit, expiresIn }) => {
    const calculatedBenefit = expiresIn <= 0 ? benefit - 2 : benefit - 1;
    return {
      name,
      expiresIn: --expiresIn,
      benefit:
        calculatedBenefit > MAX_BENEFIT
          ? MAX_BENEFIT
          : calculatedBenefit < MIN_BENEFIT
          ? MIN_BENEFIT
          : calculatedBenefit,
    };
  },
};
