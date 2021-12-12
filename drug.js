// We abstract this value out of the code in case it needs to change
const maxBenefitValue = 50;

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  sanitizeBenefitValue(benefit) {
    if (benefit < 0) {
      return 0;
    }
    if (benefit > maxBenefitValue) {
      return maxBenefitValue;
    }
    return benefit;
  }

  updateBenefits() {
    // The "expiresIn" can go far in negative, but I assumed it is a number of days and can never reach
    // values that are annoying for JS
    this.expiresIn -= 1;
    switch (this.name) {
      case "Dafalgan":
        this.benefit = this.updateDafalganBenefits();
        break;
      case "Fervex":
        this.benefit = this.updateFervexBenefits();
        break;
      case "Herbal Tea":
        this.benefit = this.updateHerbalTeaBenefits();
        break;
      case "Magic Pill":
        this.benefit = this.updateMagicPillBenefits();
        this.expiresIn += 1;
        break;
      default:
        this.benefit = this.updateGenericDrugBenefits();
    }
  }

  // We do a different function for each drug that has specificities. We could try to fit them all under one case but
  // it would break at nearly every addition, every drug having it's specificities. If the pharmacy goes big and start
  // having thousands of references, the best will be to split into drug categories that make sense from a 'business'
  // perspective.
  updateGenericDrugBenefits() {
    let nextBenefit = this.benefit;
    if (this.expiresIn < 0) {
      nextBenefit -= 2;
    } else {
      nextBenefit -= 1;
    }
    return this.sanitizeBenefitValue(nextBenefit);
  }

  updateDafalganBenefits() {
    let nextBenefit = this.benefit;
    if (this.expiresIn < 0) {
      nextBenefit -= 4;
    } else {
      nextBenefit -= 2;
    }
    return this.sanitizeBenefitValue(nextBenefit);
  }

  updateFervexBenefits() {
    let nextBenefit = this.benefit;
    if (this.expiresIn < 0) {
      nextBenefit = 0;
    } else {
      if (this.expiresIn <= 10) {
        nextBenefit += 2;
      }
      if (this.expiresIn <= 5) {
        nextBenefit += 1;
      }
    }
    return this.sanitizeBenefitValue(nextBenefit);
  }

  updateHerbalTeaBenefits() {
    let nextBenefit = this.benefit;
    if (this.expiresIn < 0) {
      nextBenefit += 2;
    } else {
      nextBenefit += 1;
    }
    return this.sanitizeBenefitValue(nextBenefit);
  }

  updateMagicPillBenefits() {
    return this.sanitizeBenefitValue(this.benefit);
  }
}
