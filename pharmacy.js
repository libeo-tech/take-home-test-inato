export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  decreaseBenefit() {
    this.benefit = Math.max(this.benefit - 1, 0);
  }

  decreaseExpiresIn() {
    this.expiresIn -= 1;
  }
}

export class CustomDrug extends Drug {
}

export class HerbalTea extends CustomDrug {
  decreaseBenefit() {
    if (this.expiresIn <= 0) {
      this.benefit += 2;
      return;
    }
    this.benefit += 1;
  }
}

export class Fervex extends CustomDrug {
  decreaseBenefit() {
    if (this.expiresIn <= 0) {
      this.benefit = 0;
      return;
    }
    if (this.expiresIn <= 5) {
      this.benefit += 3;
      return;
    }
    if (this.expiresIn <= 10) {
      this.benefit += 2;
      return;
    }
    this.benefit += 1;
  }
}

export class MagicPill extends CustomDrug {
  decreaseBenefit() {
  }

  decreaseExpiresIn() {
  }
}

export class Dafalgan extends CustomDrug {
  decreaseBenefit() {
    this.benefit = Math.max(this.benefit - 2, 0);
  }
}

export const buildDrug = (name, expiresIn, benefit, type = null) => {
  try {
    if (type) {
      if (!(new type() instanceof Drug)) {
        throw `${type.name} is not a know drug type`;
      }
      return new type(name, expiresIn, benefit);
    }
    return new Drug(name, expiresIn, benefit);
  } catch (e) {
    // what do we do here ?
    throw `Unable to create drug ${name} : ${e}`;
  }
};

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    // for (var i = 0; i < this.drugs.length; i++) {
    //     if (
    //         this.drugs[i].name != "Herbal Tea" &&
    //         this.drugs[i].name != "Fervex"
    //     ) {
    //         if (this.drugs[i].benefit > 0) {
    //             if (this.drugs[i].name != "Magic Pill") {
    //                 this.drugs[i].benefit = this.drugs[i].benefit - 1;
    //             }
    //         }
    //     } else {
    //         if (this.drugs[i].benefit < 50) {
    //             this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //             if (this.drugs[i].name == "Fervex") {
    //                 if (this.drugs[i].expiresIn < 11) {
    //                     if (this.drugs[i].benefit < 50) {
    //                         this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //                     }
    //                 }
    //                 if (this.drugs[i].expiresIn < 6) {
    //                     if (this.drugs[i].benefit < 50) {
    //                         this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //     if (this.drugs[i].name != "Magic Pill") {
    //         this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
    //     }
    //     if (this.drugs[i].expiresIn < 0) {
    //         if (this.drugs[i].name != "Herbal Tea") {
    //             if (this.drugs[i].name != "Fervex") {
    //                 if (this.drugs[i].benefit > 0) {
    //                     if (this.drugs[i].name != "Magic Pill") {
    //                         this.drugs[i].benefit = this.drugs[i].benefit - 1;
    //                     }
    //                 }
    //             } else {
    //                 this.drugs[i].benefit =
    //                     this.drugs[i].benefit - this.drugs[i].benefit;
    //             }
    //         } else {
    //             if (this.drugs[i].benefit < 50) {
    //                 this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //             }
    //         }
    //     }
    // }
    /* eslint-disable no-console */
    return this.drugs.map(drug => {
      drug.decreaseBenefit();
      drug.decreaseExpiresIn();
      return drug;
    });
    /* eslint-enable no-console */
  }
}
