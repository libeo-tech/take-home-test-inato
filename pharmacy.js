import { FERVEX, MAGIC_PILL, HERBAL_TEA } from "./constants";

/**
 * Class representing a Drug
 */
export class Drug {
  constructor (name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

/**
 * Class representing a Pharmacy containing drugs
 */
export class Pharmacy {
  constructor (drugs = []) {
    this.drugs = drugs;
  }
  /**
   * @description update benefit for a single drug
   * @param {string} name
   * @param {number} benefit
   * @param {number} expiresIn
   * @returns {number}
   */
  getUpdatedDrugBenefit (name, benefit, expiresIn) {
    let benefitChange;
    switch (name) {
      case FERVEX:
        benefitChange = this.getFervexBenefitChange(expiresIn);
        break;
      case MAGIC_PILL:
        benefitChange = 0;
        break;
      case HERBAL_TEA:
        benefitChange = expiresIn > 0 ? 1 : 2;
        break;
      default:
        benefitChange = expiresIn > 0 ? -1 : -2;
    }

    return benefit + benefitChange;
  }

  /**
   * @description update benefits for all drugs
   * @returns {array}
   */
  updateBenefitValue () {
    this.drugs.forEach(drug => {
      const updatedBenefit = this.getUpdatedDrugBenefit(
        drug.name,
        drug.benefit,
        drug.expiresIn
      );
      if (updatedBenefit >= 0 && updatedBenefit <= 50) {
        drug.benefit = updatedBenefit;
      }
      drug.expiresIn--;
    });
    return this.drugs;
  }

  /**
   * @description returns the change to a fervex's benefit
   * @param {number} expiresIn
   * @returns {number}
   */
  getFervexBenefitChange (expiresIn) {
    switch (true) {
      case expiresIn > 5 && expiresIn <= 10:
        return 2;
      case expiresIn <= 5 && expiresIn >= 0:
        return 3;
      case expiresIn < 0:
        return 0;
      default:
        return 1;
    }
  }
}
