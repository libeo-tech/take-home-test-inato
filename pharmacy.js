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
    for (var i = 0; i < this.drugs.length; i++) {
      const drugName = this.drugs[i].name;

      if (drugName == "Doliprane") {
        if (this.drugs[i].benefit > 0) {
          this.drugs[i].benefit = this.drugs[i].benefit - 1;
        }

        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;

        if (this.drugs[i].expiresIn < 0 && this.drugs[i].benefit > 0) {
          this.drugs[i].benefit = this.drugs[i].benefit - 1;
        }

        continue;
      }

      const allButHerbalTeaOrFervex =
        drugName != "Herbal Tea" && drugName != "Fervex";

      if (allButHerbalTeaOrFervex) {
        if (this.isBenefitsAtLeastMoreThan0(i)) {
          const allButMagicPills = drugName != "Magic Pill";
          if (allButMagicPills) {
            this.substractOneFromBenefits(i);
          }
        }
      } else {
        if (this.isBenefitsLessThan50(i)) {
          this.drugs[i].benefit = this.addOneToBenefits(this.drugs[i].benefit);
          if (drugName == "Fervex") {
            this.getBenefitsForFervex(i);
          }
        }
      }
      if (drugName != "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (drugName != "Herbal Tea") {
          if (drugName != "Fervex") {
            if (this.isBenefitsAtLeastMoreThan0(i)) {
              if (drugName != "Magic Pill") {
                this.substractOneFromBenefits(i);
              }
            }
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
          }
        } else {
          if (this.isBenefitsLessThan50(i)) {
            this.drugs[i].benefit = this.addOneToBenefits(
              this.drugs[i].benefit
            );
          }
        }
      }
    }

    return this.drugs;
  }

  isBenefitsAtLeastMoreThan0(i) {
    return this.drugs[i].benefit > 0;
  }

  isBenefitsLessThan50(i) {
    return this.drugs[i].benefit < 50;
  }

  getBenefitsForFervex(i) {
    if (this.drugs[i].expiresIn < 11) {
      if (this.drugs[i].benefit < 50) {
        this.drugs[i].benefit = this.addOneToBenefits(this.drugs[i].benefit);
      }
    }
    if (this.drugs[i].expiresIn < 6) {
      if (this.drugs[i].benefit < 50) {
        this.drugs[i].benefit = this.addOneToBenefits(this.drugs[i].benefit);
      }
    }
  }

  addOneToBenefits(actualBenefit) {
    return actualBenefit + 1;
  }

  substractOneFromBenefits(i) {
    this.drugs[i].benefit = this.drugs[i].benefit - 1;
  }
}
