/**
 * Drug object handling some of its property like name or benefit
 */
export class Drug {
  static MAX_BENEFIT_VALUE = 50;
  static MIN_BENEFIT_VALUE = 0;

  /**
   * Drug's constructor setting the drug's name, remaining expire days and benefit
   *
   * @param {string} name - The drud's name
   * @param {number} expiresIn - The drug's expiration date in number of days
   * @param {number} benefit - The current benefit value of the drug
   */
  constructor(name, expiresIn, benefit) {
    this.name      = name;
    this.expiresIn = expiresIn;
    this.benefit   = benefit;
  }

  /**
   * Increase the drug's benefit by 1 and keep it under MAX_BENEFIT_VALUE
   */
  increaseBenefit() {
    if (this.benefit < Drug.MAX_BENEFIT_VALUE) {
      this.benefit++;
    }
  }

  /**
   * Decrease the drug's benefit by 1 and keep it over MIN_BENEFIT_VALUE
   */
  decreaseBenefit() {
    if (this.benefit > Drug.MIN_BENEFIT_VALUE) {
      this.benefit--;
    }
  }
}

/**
 * Pharmacy class as a drug container handling drugs benefits over the days
 */
export class Pharmacy {
  /**
   * Pharmacy's constructor taking an array of drugs as parameter DEFAULT empty array
   *
   * @param {[Drug]} drugs - The stored drugs in the pharmacy DEFAULT empty
   */
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (let drug of this.drugs) {
      switch (drug.name) {
        case "Herbal Tea":
          // "Herbal Tea" actually increases in Benefit the older it gets
          drug.increaseBenefit();

          // Benefit increases twice as fast after the expiration date.
          if (drug.expiresIn < 0) {
            drug.increaseBenefit();
          }

          break;

        case "Fervex":
          // "Fervex", like Herbal Tea, increases in Benefit as its expiration date approaches
          drug.increaseBenefit();

          // Benefit increases by 2 when there are 10 days or less
          if (drug.expiresIn < 11) {
            drug.increaseBenefit();
          }

          // Benefit increases by 3 when there are 5 days or less
          if (drug.expiresIn < 6) {
            drug.increaseBenefit();
          }

          // Benefit drops to 0 after the expiration date
          if (drug.expiresIn < 0) {
            drug.benefit = 0;
          }

          break;

        case "Magic Pill":
          // "Magic Pill" never expires nor decreases in Benefit
          drug.increaseBenefit();
          break;

        default:
          drug.decreaseBenefit();
          drug.expiresIn--;

          // Once the expiration date has passed, Benefit degrades twice as fast
          if (drug.expiresIn < 0) {
            drug.decreaseBenefit();
          }
      }
    }

    return this.drugs;
  }
}
