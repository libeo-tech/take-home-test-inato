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
    return this.drugs.map(drug => {
      if (
        drug.name != "Herbal Tea" &&
        drug.name != "Fervex"
      ) {
        if (drug.benefit > 0) {
          if (drug.name != "Magic Pill") {
            drug.benefit--;
          }
        }
      } else {
        if (drug.benefit < 50) {
          drug.benefit++;
          if (drug.name == "Fervex") {
            if (drug.expiresIn < 11) {
              if (drug.benefit < 50) {
                drug.benefit++;
              }
            }
            if (drug.expiresIn < 6) {
              if (drug.benefit < 50) {
                drug.benefit++;
              }
            }
          }
        }
      }
      if (drug.name != "Magic Pill") {
        drug.expiresIn--;
      }
      if (drug.expiresIn < 0) {
        if (drug.name != "Herbal Tea") {
          if (drug.name != "Fervex") {
            if (drug.benefit > 0) {
              if (drug.name != "Magic Pill") {
                drug.benefit--;
              }
            }
          } else {
            drug.benefit -= drug.benefit;
          }
        } else {
          if (drug.benefit < 50) {
            drug.benefit++;
          }
        }
      }

      return drug;
    });
  }
}
