import drugEffects from './drugEffects';

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  getDrugEffects() {
    return drugEffects[this.name] || drugEffects.default;
  }

  getExpirationStatus() {
    return this.expiresIn > 0 ?
      "regular" :
      "expired"
  }

  updateBenefitLimits() {
    this.benefit = this.benefit > 50 ? 50 : this.benefit;
    this.benefit = this.benefit < 0 ? 0 : this.benefit;
  }

  update(benefitValue) {
    const drugEffects = this.getDrugEffects();
    const expirationStatus = this.getExpirationStatus();
    this.benefit = this.benefit + drugEffects.benefitIncrements[expirationStatus];
    this.updateBenefitLimits();

    this.expiresIn -= 1;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs.forEach(drug => drug.update());
    // for (var i = 0; i < this.drugs.length; i++) {
    //   if (
    //     this.drugs[i].name != "Herbal Tea" &&
    //     this.drugs[i].name != "Fervex"
    //   ) {
    //     if (this.drugs[i].benefit > 0) {
    //       if (this.drugs[i].name != "Magic Pill") {
    //         this.drugs[i].benefit = this.drugs[i].benefit - 1;
    //       }
    //     }
    //   } else {
    //     if (this.drugs[i].benefit < 50) {
    //       this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //       if (this.drugs[i].name == "Fervex") {
    //         if (this.drugs[i].expiresIn < 11) {
    //           if (this.drugs[i].benefit < 50) {
    //             this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //           }
    //         }
    //         if (this.drugs[i].expiresIn < 6) {
    //           if (this.drugs[i].benefit < 50) {
    //             this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (this.drugs[i].name != "Magic Pill") {
    //     this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
    //   }
    //   if (this.drugs[i].expiresIn < 0) {
    //     if (this.drugs[i].name != "Herbal Tea") {
    //       if (this.drugs[i].name != "Fervex") {
    //         if (this.drugs[i].benefit > 0) {
    //           if (this.drugs[i].name != "Magic Pill") {
    //             this.drugs[i].benefit = this.drugs[i].benefit - 1;
    //           }
    //         }
    //       } else {
    //         this.drugs[i].benefit =
    //           this.drugs[i].benefit - this.drugs[i].benefit;
    //       }
    //     } else {
    //       if (this.drugs[i].benefit < 50) {
    //         this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //       }
    //     }
    //   }
    // }

    return this.drugs;
  }
}
