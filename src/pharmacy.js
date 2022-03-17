/* export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
} */

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  //never_expiring_drugs = ["Magic Pill"];
  // modifyDrugBenefit = (drug, by) => drug + by;
  // getDrugDegradation = (drugName, expirationDays) => {
  //   // case "Magic Pill"
  //   if (drugName === "Magic Pill") return 0;
  //   // case "Herbal Tea"
  //   else if (drugName === "Herbal Tea" && expirationDays >= 0) return 1;
  //   else if (drugName === "Herbal Tea" && expirationDays >= 0) return 1;

  //   return -1;
  // };
  updateBenefitValue() {
    // this.drugs.forEach(drug => {
    //   const { benefit, name, expiresIn } = drug;
    //   // first, handle general behavior
    //   if (benefit < 50) {
    //     return;
    //   }
    //   drug.benefit++;
    // });
    for (var i = 0; i < this.drugs.length; i++) {
      if (
        this.drugs[i].name != "Herbal Tea" &&
        this.drugs[i].name != "Fervex"
      ) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name != "Magic Pill") {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name == "Fervex") {
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
      if (this.drugs[i].name != "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != "Herbal Tea") {
          if (this.drugs[i].name != "Fervex") {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != "Magic Pill") {
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
