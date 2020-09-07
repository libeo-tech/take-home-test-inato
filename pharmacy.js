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
  incrementBenefitValue(benefit, factor) {
    const sum = benefit + factor;
    if (sum > 50) return 50;
    return sum;
  }

  decrementBenefitValue(benefit, factor) {
    const result = benefit - factor;
    if (result < 0) return 0;
    return result;
  }

  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      const drug = this.drugs[i];
      switch (drug.name) {
        case "Herbal Tea":
          // eslint-disable-next-line prettier/prettier
          drug.benefit = drug.expiresIn > 0
            ? this.incrementBenefitValue(drug.benefit, 1)
            : this.incrementBenefitValue(drug.benefit, 2);
          break;
        case "Dafalgan":
          drug.benefit = drug.expiresIn < 0
            ? this.decrementBenefitValue(drug.benefit, 4)
            : this.decrementBenefitValue(drug.benefit, 2);
          break;
        case "Fervex":
          if (drug.expiresIn < 0) {
            drug.benefit = 0;
          } else {
            if (drug.expiresIn <= 5) {
              drug.benefit = this.incrementBenefitValue(drug.benefit, 3);
            }
            if (drug.expiresIn > 6 && drug.expiresIn <= 10) {
              drug.benefit = this.incrementBenefitValue(drug.benefit, 2);
            }
            if (drug.expiresIn > 10) {
              drug.benefit = this.incrementBenefitValue(drug.benefit, 1);
            }
          }

          break;
        case "Magic Pill":
          break;
        default:
          drug.benefit = drug.expiresIn < 0
            ? this.decrementBenefitValue(drug.benefit, 2)
            : this.decrementBenefitValue(drug.benefit, 1);
      }
      if (drug.name !== "Magic Pill") {
        drug.expiresIn--;
      }
      this.drugs[i] = drug;
    }

    return this.drugs;
  }
}
