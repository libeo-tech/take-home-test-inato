const MAX_BENEFIT = 50;

export class Drug {
  /**
   *
   * @param {string} name - name
   * @param {number} expiresIn - nb day before the expiration date is reached, < 0 if the date is passed
   * @param {number} benefit - always > 0
   */
  constructor(name, expiresIn, benefit) {
    if (benefit < 0) {
      throw new Error("benefit must be > 0");
    }

    if (benefit > MAX_BENEFIT) {
      throw new Error(`benefit must be < MAX_BENEFIT`);
    }

    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  /**
   * ensure that benefit never exceed the max and is never negative
   */
  checkBenefit() {
    if (this.benefit >= MAX_BENEFIT) {
      this.benefit = MAX_BENEFIT;
    }
    if (this.benefit < 0) {
      this.benefit = 0;
    }

    return this;
  }

  updateBenefit() {
    switch (this.name) {
      case "Magic Pill": {
        // magic pills attributes are not changing
        break;
      }
      case "Herbal Tea": {
        this.updateHerbalTeaBenefit();
        break;
      }
      case "Fervex": {
        this.updateFervexBenefit();
        break;
      }
      default: {
        this.updateCommonDrugBenefit();
        break;
      }
    }

    return this.checkBenefit();
  }

  updateHerbalTeaBenefit() {
    this.expiresIn -= 1;

    if (this.expiresIn < 0) {
      this.benefit += 2;
      return;
    }

    this.benefit += 1;
  }

  updateFervexBenefit() {
    this.expiresIn -= 1;

    if (this.expiresIn < 0) {
      this.benefit = 0;
      return;
    }

    if (this.expiresIn < 5) {
      this.benefit += 3;
      return;
    }

    if (this.expiresIn < 10) {
      this.benefit += 2;
      return;
    }

    this.benefit += 1;
  }

  updateCommonDrugBenefit() {
    this.expiresIn -= 1;

    if (this.benefit === 0) {
      return;
    }

    if (this.expiresIn < 0) {
      this.benefit -= 2;
      return;
    }

    this.benefit -= 1;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    return this.drugs.map((drug) => drug.updateBenefit());
  }
}
