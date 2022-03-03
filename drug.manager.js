import drugs from "./drugs";

const BENEFIT_MAX_THRESHOLD = 50;
const BENEFIT_MIN_THRESHOLD = 0;

const benefitThreasholdGuard = benefit => {
  if (benefit > BENEFIT_MAX_THRESHOLD) {
    return BENEFIT_MAX_THRESHOLD;
  } else if (benefit < BENEFIT_MIN_THRESHOLD) {
    return BENEFIT_MIN_THRESHOLD;
  }

  return benefit;
};

export default {
  [drugs.HerbalTea]: ({ benefit, expiresIn }) => ({
    updateBenefitValue() {
      const newBenefit = expiresIn < 0 ? benefit + 2 : benefit + 1;

      return benefitThreasholdGuard(newBenefit);
    }
  }),

  [drugs.MagicPill]: ({ benefit }) => ({
    updateBenefitValue() {
      return benefitThreasholdGuard(benefit);
    },
    withoutExpire: true
  }),

  [drugs.Fervex]: ({ benefit, expiresIn }) => ({
    updateBenefitValue() {
      let newBenefit = benefit;

      if (expiresIn < 0) {
        newBenefit = 0;
      } else if (expiresIn <= 5) {
        newBenefit = benefit + 3;
      } else if (expiresIn <= 10) {
        newBenefit = benefit + 2;
      } else {
        newBenefit = benefit + 1;
      }

      return benefitThreasholdGuard(newBenefit);
    }
  }),

  [drugs.Dafalgan]: ({ benefit, expiresIn }) => ({
    updateBenefitValue() {
      const newBenefit = expiresIn < 0 ? benefit - 4 : benefit - 2;
      return benefitThreasholdGuard(newBenefit);
    }
  }),

  default: ({ benefit, expiresIn }) => ({
    updateBenefitValue() {
      const newBenefit = expiresIn < 0 ? benefit - 2 : benefit - 1;
      return benefitThreasholdGuard(newBenefit);
    }
  })
};
