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
      let amount = 1;

      if (drug.name === "Magic Pill") {
        continue;
      }

      if (!["Herbal Tea", "Fervex"].includes(drug.name)) {
        decreaseBenefit(drug);
      } else {
        if (drug.name === "Fervex" && drug.expiresIn < 11) {
          amount = drug.expiresIn < 6 ? 3 : 2;
        }
        increaseBenefit(drug, amount);
      }

      drug.expiresIn--;

      if (drug.expiresIn < 0) {
        if (drug.name === "Fervex") {
          drug.benefit = 0;
        } else if (drug.name === "Herbal Tea") {
          increaseBenefit(drug);
        } else {
          decreaseBenefit(drug);
        }
      }
    }

    return this.drugs;
  }
}
