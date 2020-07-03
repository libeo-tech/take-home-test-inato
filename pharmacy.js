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

      switch (drug.name) {
        case "Magic Pill":
          continue;
        case "Herbal Tea":
          increaseBenefit(drug, drug.expiresIn <= 0 ? 2 : 1);
          break;
        case "Fervex":
          if (drug.expiresIn <= 0) {
            drug.benefit = 0;
          } else {
            if (drug.expiresIn <= 10) {
              amount = drug.expiresIn <= 5 ? 3 : 2;
            }
            increaseBenefit(drug, amount);
          }
          break;
        default:
          decreaseBenefit(drug, drug.expiresIn <= 0 ? 2 : 1);
      }

      drug.expiresIn--;
    }

    return this.drugs;
  }
}
