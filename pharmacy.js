import { defaultDrug, otherDrugs } from "./config/drugSpecifications";
import { limits } from "./config/limits";

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  /**
   * Updates the current drug benefit and expiresIn value
   */
  update() {
    const drugSpecs = otherDrugs[this.name] || defaultDrug;

    this.benefit += this._getCurrentBenefitChange(drugSpecs);

    this._checkLimits();

    if (drugSpecs.default.expires) {
      this.expiresIn--;
    }
  }

  /**
   * Get current benefits changes using the drugs specs and its expiresIn value
   * @param drugSpecs The specs of the current drug
   * @returns {number|*} The benefit to add to the current one
   * @private
   */
  _getCurrentBenefitChange(drugSpecs) {
    const state = drugSpecs.stateChanges
      .filter(state => {
        return state.fromExpiresIn >= this.expiresIn; // only keep previous state changing points
      })
      .sort((prevState, nextState) => {
        return prevState.fromExpiresIn - nextState.fromExpiresIn; // sort by expiration
      })[0]; // keep the first one (the one that has the lowest expiration point change)
    if (!state || state.fromExpiresIn < this.expiresIn) {
      return drugSpecs.default.benefitChange;
    } else {
      return state.benefitChange;
    }
  }

  /**
   * Checks the limits of the current drug
   * @private
   */
  _checkLimits() {
    if (this.benefit >= limits.MAX_DRUG_BENEFIT) {
      this.benefit = limits.MAX_DRUG_BENEFIT;
    } else if (this.benefit < limits.MIN_DRUG_BENEFIT) {
      this.benefit = limits.MIN_DRUG_BENEFIT;
    }
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (const drug of this.drugs) {
      drug.update();
    }

    return this.drugs;
  }
}
