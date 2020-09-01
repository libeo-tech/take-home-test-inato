import { UPDATE_BENEFIT_STRATEGIES } from "./updateBenefitStrategies";

const BENEFIT_LOWER_BOUND = 0;
const BENEFIT_HIGHER_BOUND = 50;

/**
 * Fixes drug benefit to be within acceptable bounds
 *
 * @param {number} drugBenefit Drug benefit
 * @returns {number} Fixed drug benefit
 */
function fixDrugBenefitWithinBounds(drugBenefit) {
  const fixedBenefitOnLowerBound = Math.max(drugBenefit, BENEFIT_LOWER_BOUND);
  const fixedBenefitOnHigherBound = Math.min(
    fixedBenefitOnLowerBound,
    BENEFIT_HIGHER_BOUND
  );

  return fixedBenefitOnHigherBound;
}

/**
 * Updates drug based on default strategy
 *
 * @param {object} drug Drug to update
 * @returns {object} Updated drug
 */
function updateBenefitDefaultStrategy(drug) {
  const hasExpired = drug.expiresIn === 0;
  const valueToSubtract = hasExpired ? 2 : 1;
  const benefit = drug.benefit - valueToSubtract;
  const expiresIn = Math.max(0, drug.expiresIn - 1);

  const updatedDrug = {
    ...drug,
    expiresIn,
    benefit: fixDrugBenefitWithinBounds(benefit)
  };

  return updatedDrug;
}

/**
 * Updates drug based on 'increases-until-expiration-date-then-increases-twice-as-fast' strategy
 *
 * @param {object} drug Drug to update
 * @returns {object} Updated drug
 */
function updateBenefitIncreasesUntilExpirationDateThenIncreasesTwiceAsFastStrategy(
  drug
) {
  const hasExpired = drug.expiresIn === 0;
  const valueToAdd = hasExpired ? 2 : 1;
  const benefit = drug.benefit + valueToAdd;
  const expiresIn = Math.max(0, drug.expiresIn - 1);

  const updatedDrug = {
    ...drug,
    expiresIn,
    benefit: fixDrugBenefitWithinBounds(benefit)
  };

  return updatedDrug;
}

/**
 * Returns the value to add to drug's benefit for 'Fizzbuzz' strategy
 *
 * @param {number} currentBenefit Drug's current benefit
 * @param {number} expiresIn Drug's number of days until expiration
 * @returns {number} Value to add to drug's benefit
 */
function calculateValueToAddForFizzbuzzStrategy(currentBenefit, expiresIn) {
  const hasExpired = expiresIn === 0;

  if (hasExpired) {
    return -currentBenefit;
  }

  if (expiresIn <= 5) {
    return 3;
  }

  if (expiresIn <= 10) {
    return 2;
  }

  return 1;
}

/**
 * Updates drug based on 'increases-until-expiration-date-like-fizzbuzz' strategy
 *
 * @param {object} drug Drug to update
 * @returns {object} Updated drug
 */
function updateBenefitIncreasesUntilExpirationDateLikeFizzbuzzStrategy(drug) {
  const valueToAdd = calculateValueToAddForFizzbuzzStrategy(
    drug.benefit,
    drug.expiresIn
  );
  const benefit = drug.benefit + valueToAdd;
  const expiresIn = Math.max(0, drug.expiresIn - 1);

  const updatedDrug = {
    ...drug,
    expiresIn,
    benefit: fixDrugBenefitWithinBounds(benefit)
  };

  return updatedDrug;
}

/**
 * Updates drug based on 'decreases-twice-as-fast' strategy
 *
 * @param {object} drug Drug to update
 * @returns {object} Updated drug
 */
function updateBenefitDecreasesTwiceAsFastStrategy(drug) {
  const hasExpired = drug.expiresIn === 0;
  const valueToSubtract = hasExpired ? 4 : 2;
  const benefit = drug.benefit - valueToSubtract;
  const expiresIn = Math.max(0, drug.expiresIn - 1);

  const updatedDrug = {
    ...drug,
    expiresIn,
    benefit: fixDrugBenefitWithinBounds(benefit)
  };

  return updatedDrug;
}

/**
 * Updates drug based on 'benefit-does-not-change' strategy
 *
 * @param {object} drug Drug to update
 * @returns {object} Updated drug
 */
function updateBenefitBenefitDoesNotChangeStrategy(drug) {
  const updatedDrug = {
    ...drug,
    benefit: fixDrugBenefitWithinBounds(drug.benefit)
  };

  return updatedDrug;
}

// Map of applicable update benefit strategies
const updateBenefitStrategies = {
  [UPDATE_BENEFIT_STRATEGIES.DEFAULT]: updateBenefitDefaultStrategy,
  [UPDATE_BENEFIT_STRATEGIES.INCREASES_UNTIL_EXPIRATION_DATE_THEN_INCREASES_TWICE_AS_FAST]: updateBenefitIncreasesUntilExpirationDateThenIncreasesTwiceAsFastStrategy,
  [UPDATE_BENEFIT_STRATEGIES.INCREASES_UNTIL_EXPIRATION_DATE_LIKE_FIZZBUZZ]: updateBenefitIncreasesUntilExpirationDateLikeFizzbuzzStrategy,
  [UPDATE_BENEFIT_STRATEGIES.BENEFIT_DOES_NOT_CHANGE]: updateBenefitBenefitDoesNotChangeStrategy,
  [UPDATE_BENEFIT_STRATEGIES.DECREASES_TWICE_AS_FAST]: updateBenefitDecreasesTwiceAsFastStrategy
};

/**
 * Updates drug based on applicable update benefit strategy
 *
 * @param {object} drug Drug to update
 * @returns {object} Updated drug
 */
function updateBenefit(drug) {
  if (!drug.updateBenefitStrategy) {
    throw new Error(`Drug '${drug.name}' has no update benefit strategy`);
  }

  const updateBenefitStrategy =
    updateBenefitStrategies[drug.updateBenefitStrategy];

  if (!updateBenefitStrategy) {
    throw new Error(
      `There is no update benefit strategy named '${drug.updateBenefitStrategy}'`
    );
  }

  const updatedDrug = updateBenefitStrategy(drug);

  return updatedDrug;
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs = this.drugs.map(updateBenefit);

    // This is just so the result fits 'output.txt'
    const formattedDrugs = this.drugs.map(drug => ({
      name: drug.name,
      expiresIn: drug.expiresIn,
      benefit: drug.benefit
    }));

    return formattedDrugs;
  }
}
