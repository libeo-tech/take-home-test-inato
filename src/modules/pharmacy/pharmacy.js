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
        if (drug.expiresIn < 0) {
          drug.benefit = this.incrementBenefit(drug, 2);
        } else {
          drug.benefit = this.incrementBenefit(drug, 1);
        }
        return drug;
      }

      if (drug.expiresIn < 0) {
        drug.benefit = this.decrementBenefit(drug, 2);
      } else {
        drug.benefit = this.decrementBenefit(drug, 1);
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

  OldupdateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (
        this.drugs[i].name !== "Herbal Tea" &&
        this.drugs[i].name !== "Fervex"
      ) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name !== "Magic Pill") {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name === "Fervex") {
            if (this.drugs[i].expiresIn < 11) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
            if (this.drugs[i].expiresIn < 6) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
          }
        }
      }
      if (this.drugs[i].name !== "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name !== "Herbal Tea") {
          if (this.drugs[i].name !== "Fervex") {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name !== "Magic Pill") {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }
            }
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
          }
        } else {
          if (this.drugs[i].benefit < 50) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
        }
      }
    }

    return this.drugs;
  }
}
