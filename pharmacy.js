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
      if (this.drugs[i].name === "Magic Pill") {
        continue;
      }

      if (
        this.drugs[i].name != "Herbal Tea" &&
        this.drugs[i].name != "Fervex"
      ) {
        decreaseBenefit(this.drugs[i]);
      } else {
        let amount = 0;
        if (this.drugs[i].name == "Fervex" && this.drugs[i].expiresIn < 11) {
          if (this.drugs[i].expiresIn < 6) {
            amount = 3;
          } else {
            amount = 2;
          }
        } else {
          amount = 1;
        }
        increaseBenefit(this.drugs[i], amount);
      }

      this.drugs[i].expiresIn--;
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != "Herbal Tea") {
          if (this.drugs[i].name != "Fervex") {
            decreaseBenefit(this.drugs[i]);
          } else {
            this.drugs[i].benefit = 0;
          }
        } else {
          increaseBenefit(this.drugs[i]);
        }
      }
    }

    return this.drugs;
  }
}
