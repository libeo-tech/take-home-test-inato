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
  increaseBenefit(drug, num) {
    drug.benefit = drug.benefit + num > 50 ? 50 : drug.benefit + num;
    return drug;
  }
  decreaseBenefit(drug, num) {
    drug.benefit = drug.benefit - num < 0 ? 0 : drug.benefit - num;
    return drug;
  }

  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (this.drugs[i].name !== "Magic Pill") {
        //HERBAL TEA
        if (this.drugs[i].name === "Herbal Tea") {
          if (this.drugs[i].expiresIn <= 0) {
            this.increaseBenefit(this.drugs[i], 2);
          } else {
            this.increaseBenefit(this.drugs[i], 1);
          }
          //FERVEX
        } else if (this.drugs[i].name === "Fervex") {
          if (this.drugs[i].expiresIn > 10) {
            this.increaseBenefit(this.drugs[i], 1);
          } else if (
            this.drugs[i].expiresIn <= 10 &&
            this.drugs[i].expiresIn > 5
          ) {
            this.increaseBenefit(this.drugs[i], 2);
          } else if (
            this.drugs[i].expiresIn <= 5 &&
            this.drugs[i].expiresIn > 0
          ) {
            this.increaseBenefit(this.drugs[i], 3);
          } else {
            this.drugs[i].benefit = 0;
          }
        } else if (this.drugs[i].name === "Dafalgan") {
          this.decreaseBenefit(this.drugs[i], 2);
        } else {
          //NORMAL
          if (this.drugs[i].expiresIn <= 0) {
            this.decreaseBenefit(this.drugs[i], 2);
          } else {
            this.decreaseBenefit(this.drugs[i], 1);
          }
        }
        this.drugs[i].expiresIn -= 1;
      }
    }

    return this.drugs;
  }
}
