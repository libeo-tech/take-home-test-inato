export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

function decreaseBenefit(drug, amount = 1) {
  if (drug.benefit > 0) drug.benefit -= amount;

  return drug.benefit;
}

function increaseBenefit(drug, amount = 1) {
  drug.benefit += amount;

  if (drug.benefit > 50) drug.benefit = 50;

  return drug.benefit;
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      let drug = this.drugs[i];
      if (drug.name === "Magic Pill") {
        continue;
      }

      if (drug.name != "Herbal Tea" && drug.name != "Fervex") {
        decreaseBenefit(drug);
      } else {
        let amount = 0;
        if (drug.name == "Fervex" && drug.expiresIn < 11) {
          if (drug.expiresIn < 6) {
            amount = 3;
          } else {
            amount = 2;
          }
        } else {
          amount = 1;
        }
        increaseBenefit(drug, amount);
      }

      drug.expiresIn--;
      if (drug.expiresIn < 0) {
        if (drug.name != "Herbal Tea") {
          if (drug.name != "Fervex") {
            decreaseBenefit(drug);
          } else {
            drug.benefit = 0;
          }
        } else {
          increaseBenefit(drug);
        }
      }
    }

    return this.drugs;
  }
}
