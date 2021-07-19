export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs = this.drugs.map(drug => {
      if (drug.name === "Magic Pill") return drug;

      drug.expiresIn = drug.expiresIn - 1;

      if (drug.name === "Fervex") {
        if (drug.expiresIn < 0) {
          drug.benefit = 0;
        } else if (drug.expiresIn <= 5) {
          drug.benefit = this.incrementBenefit(drug, 3);
        } else if (drug.expiresIn <= 10) {
          drug.benefit = this.incrementBenefit(drug, 2);
        } else {
          drug.benefit = this.incrementBenefit(drug, 1);
        }
        return drug;
      }

      if (drug.name === "Herbal Tea") {
        drug.benefit = this.incrementBenefit(drug, drug.expiresIn < 0 ? 2 : 1);
        return drug;
      }

      if (drug.name === "Dafalgan") {
        drug.benefit = this.decrementBenefit(drug, drug.expiresIn < 0 ? 4 : 2);
      } else {
        drug.benefit = this.decrementBenefit(drug, drug.expiresIn < 0 ? 2 : 1);
      }

      return drug;
    });
    return this.drugs;
  }

  incrementBenefit(drug, amount) {
    return drug.benefit + amount < 50 ? drug.benefit + amount : 50;
  }

  decrementBenefit(drug, amount) {
    return drug.benefit - amount > 0 ? drug.benefit - amount : 0;
  }
}
