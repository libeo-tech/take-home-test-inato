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
    this.specialDrugs = ["Herbal Tea", "Magic Pill", "Dafalgan"];
    this.drugsEvolution = { "Herbal Tea": 1, Dafalgan: -2, general: -1 };
  }
  benefitEvolitionOrLimitValue(benefit, evolution) {
    if (evolution > 0) {
      if (benefit + evolution < 50) return benefit + evolution
      if (benefit + evolution >= 50) return 50
    } else if (evolution < 0) {
      if (benefit + evolution > 0) return benefit + evolution
      if (benefit + evolution <= 0) return 0
    }
  }
  updateBenefitValueXDays(x) {
    for (let i = 0; i < x; i++) {
      this.updateBenefitValue();
    }
    return this.drugs;
  }
  updateBenefitValue() {
    if (!this.drugs || !this.drugs.length) return [];
    this.drugs.forEach((drug) => {
      if (drug.name === "Magic Pill") return drug;
      if (drug.name === "Fervex") return console.log("fervex!");
      const drugType = this.specialDrugs.includes(drug.name) ? drug.name : "general";

      // console.log("drugType :", drugType);
      const timeInfluenceOnBenefit =
        drug.expiresIn > 0
          ? this.drugsEvolution[drugType]
          : this.drugsEvolution[drugType] * 2;
      const newBenefit = this.benefitEvolitionOrLimitValue(drug.benefit, timeInfluenceOnBenefit)
      // console.log("timeInfluenceOnBenefit :", timeInfluenceOnBenefit);
      // console.log("drug.benefit", drug.benefit);
      // console.log("drug.expiresIn :", drug.expiresIn);
      drug.expiresIn -= 1;
      drug.benefit = newBenefit;
    });
    return this.drugs;
  }

  // updateBenefitValue() {
  //   for (var i = 0; i < drug.length; i++) {
  //     if (
  //       this.drugs[i].name != "Herbal Tea" &&
  //       this.drugs[i].name != "Fervex"
  //     ) {
  //       if (this.drugs[i].benefit > 0) {
  //         if (this.drugs[i].name != "Magic Pill") {
  //           this.drugs[i].benefit = this.drugs[i].benefit - 1;
  //         }
  //       }
  //     } else {
  //       if (this.drugs[i].benefit < 50) {
  //         this.drugs[i].benefit = this.drugs[i].benefit + 1;
  //         if (this.drugs[i].name == "Fervex") {
  //           if (this.drugs[i].expiresIn < 11) {
  //             if (this.drugs[i].benefit < 50) {
  //               this.drugs[i].benefit = this.drugs[i].benefit + 1;
  //             }
  //           }
  //           if (this.drugs[i].expiresIn < 6) {
  //             if (this.drugs[i].benefit < 50) {
  //               this.drugs[i].benefit = this.drugs[i].benefit + 1;
  //             }
  //           }
  //         }
  //       }
  //     }
  //     if (this.drugs[i].name != "Magic Pill") {
  //       this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
  //     }
  //     if (this.drugs[i].expiresIn < 0) {
  //       if (this.drugs[i].name != "Herbal Tea") {
  //         if (this.drugs[i].name != "Fervex") {
  //           if (this.drugs[i].benefit > 0) {
  //             if (this.drugs[i].name != "Magic Pill") {
  //               this.drugs[i].benefit = this.drugs[i].benefit - 1;
  //             }
  //           }
  //         } else {
  //           this.drugs[i].benefit =
  //             this.drugs[i].benefit - this.drugs[i].benefit;
  //         }
  //       } else {
  //         if (this.drugs[i].benefit < 50) {
  //           this.drugs[i].benefit = this.drugs[i].benefit + 1;
  //         }
  //       }
  //     }
  //   }
  //   return this.drugs;
  // }
}
