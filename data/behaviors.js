import { DrugBehavior } from "../models/drugBehavior";

const commonBehavior = new DrugBehavior({
  expirationSpeed: -1,
  benefitDefaultSpeed: -1,
  benefitStageSpeeds: [{ days: 0, speed: -2 }],
  dropBenefitAfterExpiration: false
});

const herbalTea = new DrugBehavior({
  expirationSpeed: -1,
  benefitDefaultSpeed: 1,
  benefitStageSpeeds: [{ days: 0, speed: 2 }],
  dropBenefitAfterExpiration: false
});

const magicPill = new DrugBehavior({
  expirationSpeed: 0,
  benefitDefaultSpeed: 0,
  benefitStageSpeeds: [],
  dropBenefitAfterExpiration: false
});

const fervex = new DrugBehavior({
  expirationSpeed: -1,
  benefitDefaultSpeed: 1,
  benefitStageSpeeds: [{ days: 10, speed: 2 }, { days: 5, speed: 3 }],
  dropBenefitAfterExpiration: true
});

const dafalgan = new DrugBehavior({
  expirationSpeed: -1,
  benefitDefaultSpeed: -2,
  benefitStageSpeeds: [{ days: 0, speed: -4 }],
  dropBenefitAfterExpiration: false
});

const behaviors = {
  "Herbal Tea": herbalTea,
  "Magic Pill": magicPill,
  Fervex: fervex,
  Dafalgan: dafalgan
};

export const getDrugBehavior = name => {
  return behaviors[name] || commonBehavior;
};
