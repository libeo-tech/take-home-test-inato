/**
 * Represents a drug item.
 */
export class Drug {
  /**
   * Instanciate a drug item.
   * @param {string} name The name of the drug.
   * @param {number} expiresIn Denotes the number of days we have until the item expires.
   * @param {number} benefit Denotes how powerful the drug is.
   */
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.degradationRate = 1;
    this.degradationMethod = {};
    this.degradationMethod['Doliprane'] = () => this.nomalDrugBenefitUpdate();
    this.degradationMethod['Herbal Tea'] = () => this.herbalTeaBenefitUpdate();
    this.degradationMethod['Fervex'] = () => this.fervexBenefitUpdate();
    this.degradationMethod['Magic Pill'] = () => this.magicPillBenefitUpdate();
    this.degradationMethod['Dafalgan'] = () => this.nomalDrugBenefitUpdate();

    if (this.name == "Dafalgan") this.degradationRate = 2;
  }

  /**
   * Update the benefit and expiresIn values accordingly with the drugs names.
   */
  updateBenefitValue() {
    if (this.degradationMethod.hasOwnProperty(this.name)) {
      this.degradationMethod[this.name]();
    } else {
      // If the drug is not known considers it as a normal drug.
      this.nomalDrugBenefitUpdate();
    }
  }

  /**
   * Once the expiration date has passed, Benefit degrades twice as fast.
   * The Benefit of an item is never negative.
   */
  nomalDrugBenefitUpdate() {
    this.expiresIn--;
    if (this.expiresIn < 0) {
      this.benefit -= 2 * this.degradationRate;
    } else {
      this.benefit -= this.degradationRate;
    }
    this.checkBenefitValue();
  }

  /**
   * "Herbal Tea" actually increases in Benefit the older it gets.
   * Benefit increases twice as fast after the expiration date.
   * The Benefit of an item is never more than 50.
   * The Benefit of an item is never negative.
   */
  herbalTeaBenefitUpdate() {
    this.expiresIn--;
    if (this.expiresIn < 0) {
      this.benefit += 2;
    } else {
      this.benefit++;
    }
    this.checkBenefitValue();
  }

  checkBenefitValue() {
    if (this.benefit < 0) this.benefit = 0;
    if (this.benefit > 50) this.benefit = 50;
  }

  /**
   * "Magic Pill" never expires nor decreases in Benefit.
   */
  magicPillBenefitUpdate() {
    this.checkBenefitValue();
  }

  /**
   * "Fervex", like Herbal Tea, increases in Benefit as its expiration date approaches.
   * Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less
   * but Benefit drops to 0 after the expiration date.
   */
  fervexBenefitUpdate() {
    this.expiresIn--;
    if (this.expiresIn < 0) {
      this.benefit = 0;
    } else {
      this.benefit++;
      if (this.expiresIn <= 10) this.benefit++;
      if (this.expiresIn <= 5) this.benefit++;
    }
    this.checkBenefitValue();
  }
}