export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  /* GETTER / SETTER*/
  getName() {
    return this.name;
  }

  getBenefit() {
    return this.benefit;
  }
  setBenefit(benefit) {
    this.benefit = benefit;
  }

  getExpiresIn() {
    return this.expiresIn;
  }

  setExpiresIn(days) {
    this.expiresIn = days;
  }

  isFervex() {
    return this.getName() === "Fervex";
  }

  isHerbalTea() {
    return this.getName() === "Herbal Tea";
  }

  isMagicPill() {
    return this.getName() === "Magic Pill";
  }

  isPositiveBenefit() {
    return this.benefit >= 0 && this.benefit <= 50;
  }

  notHerbalAndFervex() {
    return !this.isHerbalTea() && !this.isFervex();
  }

  hasExpireDate() {
    return this.expiresIn < 0;
  }

  updateBenefit(benefit, decrease = false) {
    this.setBenefit(
      decrease ? this.getBenefit() - benefit : this.getBenefit() + benefit
    );
  }

  updateExpireIn(days, decrease = false) {
    this.setExpiresIn(
      decrease ? this.getExpiresIn() - days : this.getExpiresIn() + days
    );
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      const drug = this.drugs[i];

      this.checkBenefit(drug);
      this.expireIfNotMagicPill(drug);
      this.afterExpireDate(drug);
      this.checkBenefitNeverNegative(drug);
      this.checkBenefitToMoreThanFifty(drug);
    }
    return this.drugs;
  }

  checkBenefit(drug) {
    if (drug.isPositiveBenefit()) {
      if (drug.notHerbalAndFervex() && !drug.isMagicPill()) {
        drug.updateBenefit(1, true);
      } else {
        this.addBenefitToOtherDrugOrFervexAreNotExpire(drug);
      }
    }
  }

  addBenefitToOtherDrugOrFervexAreNotExpire(drug) {
    if (!drug.isMagicPill()) {
      drug.updateBenefit(1);
    }
    if (drug.isFervex()) {
      drug.updateBenefit(drug.getExpiresIn() < 6 ? 2 : 1);
    }
  }

  expireIfNotMagicPill(drug) {
    if (!drug.isMagicPill()) {
      drug.updateExpireIn(1, true);
    }
  }

  afterExpireDate(drug) {
    if (drug.hasExpireDate()) {
      this.herbalExpireWithBenefit(drug);
      this.fervexExpire(drug);
      this.otherDrugExpireWithBenefit(drug);
    }
  }

  herbalExpireWithBenefit(drug) {
    if (drug.isHerbalTea() && drug.isPositiveBenefit()) {
      drug.updateBenefit(1);
    }
  }

  fervexExpire(drug) {
    if (drug.isFervex()) {
      drug.updateBenefit(drug.getBenefit(), true);
    }
  }

  otherDrugExpireWithBenefit(drug) {
    if (drug.isPositiveBenefit() && !drug.isMagicPill()) {
      drug.updateBenefit(1, true);
    }
  }

  checkBenefitNeverNegative(drug) {
    if (drug.getBenefit() < 0) {
      drug.setBenefit(0);
    }
  }

  checkBenefitToMoreThanFifty(drug) {
    if (drug.getBenefit() > 50) {
      drug.setBenefit(50);
    }
  }
}