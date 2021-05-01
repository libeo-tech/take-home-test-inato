export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  isHerbalTea() {
    return this.name === "Herbal Tea";
  }

  isMagicPill() {
    return this.name === "Magic Pill";
  }

  isFervex() {
    return this.name === "Fervex";
  }

  isDafalgan() {
    return this.name === "Dafalgan";
  }

  isExpired() {
    return this.expiresIn <= 0;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  handleHerbalTeaBenefit(drug) {
    if (drug.isExpired()) {
      this.increaseBenefitOf(drug, 2);
    } else {
      this.increaseBenefitOf(drug);
    }
  }

  handleFervexBenefit(drug) {
    if (drug.expiresIn <= 0) {
      this.decreaseBenefitOf(drug, drug.benefit);
    } else if (drug.expiresIn <= 5) {
      this.increaseBenefitOf(drug, 3);
    } else if (drug.expiresIn <= 10) {
      this.increaseBenefitOf(drug, 2);
    } else {
      this.increaseBenefitOf(drug);
    }
  }

  handleDafalganBenefit(drug) {
    if (drug.expiresIn <= 0) {
      this.decreaseBenefitOf(drug, 4);
    } else {
      this.decreaseBenefitOf(drug, 2);
    }
  }

  increaseBenefitOf(drug, by = 1) {
    drug.benefit += by;
    if (drug.benefit > 50) {
      drug.benefit = 50;
    }
  }

  decreaseBenefitOf(drug, by = 1) {
    drug.benefit -= by;
    if (drug.benefit < 0) {
      drug.benefit = 0;
    }
  }

  decreaseExpirationOf(drug) {
    drug.expiresIn -= 1;
  }

  updateBenefitValue() {
    for (const drug of this.drugs) {
      if (drug.isMagicPill()) {
        continue;
      }

      if (drug.isHerbalTea()) {
        this.handleHerbalTeaBenefit(drug);
      } else if (drug.isFervex()) {
        this.handleFervexBenefit(drug);
      } else if (drug.isDafalgan()) {
        this.handleDafalganBenefit(drug);
      } else if (drug.isExpired()) {
        this.decreaseBenefitOf(drug, 2);
      } else {
        this.decreaseBenefitOf(drug);
      }
      this.decreaseExpirationOf(drug);
    }
    return this.drugs;
  }
}
