/**
 * standard drug with no specific features
 */
export default class Drug {
  constructor(name, expiresIn, benefit) {
    if (!name || expiresIn == undefined || benefit == undefined) {
      throw new Error(
        "Must provide all 'name' , 'expiresIn' , 'benefit' arguments"
      );
    }

    if (typeof expiresIn !== "number" || typeof benefit !== "number") {
      throw new Error("args 'expiresIn' and 'benefit' must be integer");
    }

    if (benefit > 50) {
      throw new Error("benefit can't exceed 50");
    }

    this.name = name;
    this.expiresIn = Math.floor(expiresIn);
    this.benefit = Math.floor(benefit);
  }

  decreaseBenifit() {
    if (this.benefit > 0) {
      this.benefit--;
    }

    if (this.benefit > 0 && this.expiresIn <= 0) {
      this.benefit--;
    }
  }

  updateBenefitValue() {
    this.decreaseBenifit();
    this.expiresIn--;
    return this;
  }
}
