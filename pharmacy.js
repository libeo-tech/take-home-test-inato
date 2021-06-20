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
  updateBenefitValue() {
    this.drugs.forEach(drug => {
      if (drug.name === "Magic Pill") {
        return;
      }

      if (drug.name !== "Herbal Tea" && drug.name !== "Fervex") {
        if (drug.benefit > 0) {
          drug.benefit--;
        }
      } else {
        if (drug.benefit < 50) {
          drug.benefit++;
          if (drug.name === "Fervex") {
            if (drug.expiresIn < 11) {
              drug.benefit++;
            }
            if (drug.expiresIn < 6) {
              drug.benefit++;
            }
          }
        }
      }

      drug.expiresIn--;

      if (drug.expiresIn < 0) {
        if (drug.name === "Herbal Tea" && drug.benefit < 50) {
          drug.benefit++;
          return;
        }
        if (drug.name === "Fervex") {
          drug.benefit = 0;
          return;
        }
        if (drug.benefit > 0) {
          drug.benefit--;
        }
      }
    });

    return this.drugs;
  }
}
