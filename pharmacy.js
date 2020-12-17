export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit > 50 ? 50 : benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      const drug = this.drugs[i];
      const { name, benefit, expiresIn } = drug;

      switch (name) {
        case "Herbal Tea": {
          let newBenefit = benefit + 1;
          if (expiresIn <= 0) {
            newBenefit += 1;
          }
          if (newBenefit > 50) {
            newBenefit = 50;
          }
          drug.benefit = newBenefit;
          drug.expiresIn = expiresIn - 1;
          break;
        }
        case "Fervex": {
          if (expiresIn <= 0) {
            drug.benefit = 0;
          } else {
            let newBenefit = benefit + 1;
            drug.benefit = newBenefit;
            if (expiresIn < 11) {
              newBenefit += 1;
            }
            if (expiresIn < 6) {
              newBenefit += 1;
            }
            if (newBenefit > 50) {
              newBenefit = 50;
            }
            drug.benefit = newBenefit;
          }
          drug.expiresIn = expiresIn - 1;
          break;
        }
        case "Magic Pill":
          break;
        case "Dafalgan": {
          let newBenefit = benefit - 2;
          if (expiresIn <= 0) {
            newBenefit -= 2;
          }
          if (newBenefit < 0) {
            newBenefit = 0;
          }
          drug.benefit = newBenefit;
          drug.expiresIn = expiresIn - 1;
          break;
        }
        default: {
          let newBenefit = benefit - 1;
          if (expiresIn <= 0) {
            newBenefit -= 1;
          }
          if (newBenefit < 0) {
            newBenefit = 0;
          }
          drug.benefit = newBenefit;
          drug.expiresIn = expiresIn - 1;
          break;
        }
      }
    }

    return this.drugs;
  }
}
