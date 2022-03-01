export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    return this.drugs.map(drug => {
      if (drug.name === "Magic Pill") {
        drug.benefit = this.checkBenefitRange(drug.benefit);
        return drug;
      }

      drug.expiresIn = this.computeExpirationDate(drug);
      drug.benefit += this.computeBenefit(drug);

      drug.benefit = this.checkBenefitRange(drug.benefit);

      return drug;
    });
  }

  /**
   *
   * @param {Drug} drug
   * @returns {int} The new expiresIn value
   */
  computeExpirationDate(drug) {
    return drug.name === "Magic Pill" ? drug.expiresIn : drug.expiresIn - 1;
  }

  /**
   *
   * @param {Drug} drug
   * @returns {int} The value to impact on drug's benefit
   */
  computeBenefit(drug) {
    let impactValue;

    switch (drug.name) {
      case "Herbal Tea":
        impactValue = drug.expiresIn > 0 ? 1 : 2;
        break;
      case "Fervex":
        if (drug.expiresIn <= 0) {
          // Drops to 0 when expired
          impactValue = -Math.abs(drug.benefit);
        } else if (drug.expiresIn <= 5) {
          impactValue = 3;
        } else if (drug.expiresIn <= 10) {
          impactValue = 2;
        } else {
          impactValue = 1;
        }
        break;
      default:
        impactValue = drug.expiresIn > 0 ? -1 : -2;
        break;
    }
    return impactValue;
  }

  /**
   * Normalize a benefit value so that it is not out of range
   * @param {int} benefit Then benefit to check
   * @returns {int} the computed value in range [0-50]
   */
  checkBenefitRange(benefit) {
    return Math.min(Math.max(0, benefit), 50);
  }
}
