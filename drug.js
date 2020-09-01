import { WELL_KNOWN_DRUG_NAMES } from "./wellKnownDrugNames";
import { UPDATE_BENEFIT_STRATEGIES } from "./updateBenefitStrategies";

/**
 * Returns the strategy to apply to update drug benefit
 *
 * @param {string} name Drug name
 * @returns {string} Strategy to apply to update drug benefit
 */
function calculateUpdateBenefitStrategy(name) {
  switch (name) {
    case WELL_KNOWN_DRUG_NAMES.HERBAL_TEA:
      return UPDATE_BENEFIT_STRATEGIES.INCREASES_UNTIL_EXPIRATION_DATE_THEN_INCREASES_TWICE_AS_FAST;
    case WELL_KNOWN_DRUG_NAMES.FERVEX:
      return UPDATE_BENEFIT_STRATEGIES.INCREASES_UNTIL_EXPIRATION_DATE_LIKE_FIZZBUZZ;
    case WELL_KNOWN_DRUG_NAMES.MAGIC_PILL:
      return UPDATE_BENEFIT_STRATEGIES.BENEFIT_DOES_NOT_CHANGE;
    case WELL_KNOWN_DRUG_NAMES.DAFALGAN:
      return UPDATE_BENEFIT_STRATEGIES.DECREASES_TWICE_AS_FAST;
    default:
      return UPDATE_BENEFIT_STRATEGIES.DEFAULT;
  }
}

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.updateBenefitStrategy = calculateUpdateBenefitStrategy(name);
  }

  toJson() {
    return {
      name: this.name,
      expiresIn: this.expiresIn,
      benefit: this.benefit,
      updateBenefitStrategy: this.updateBenefitStrategy
    };
  }
}
