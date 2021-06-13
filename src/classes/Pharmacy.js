import { updatedDrugValues } from "../utils";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
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

    for (var i = 0; i < this.drugs.length; i++) {
      updatedDrugValues(this.drugs[i]);
    }

    return this.drugs;
  }
}

/**
  * Bénéfices:
  *  - decroient tous les jours ✅
  *  - n'est jamais négatif ✅
  *  - n'est jamais supérieur à 50
  *  - décroit 2 x plus vite si la date d'expiration est passée ✅
  */

  /**
   * expiresIn:
   *  - decroient tous les jours ✅
   */

  /** ✅
   * Herbal Tea:
   *  - augmente en bénéfice chaque jours ✅
   *  - augmente en bénéfice 2 x plus vite si la date d'expiration est passée ✅
   *  - augmente en bénéfices si sa date d'expiration approche:
   *   - x2 si on est days <= 10
   *   - x3 si on est days <= 5
   *   - n'augmente plus si on dépasse la date d'expiration -> 0
   */

  /** ✅
   * Fervex:
   *  - augmente en bénéfices si sa date d'expiration approche:
   *   - x2 si on est days <= 10
   *   - x3 si on est days <= 5
   *   - n'augmente plus si on dépasse la date d'expiration -> 0
   */

  /** ✅
   * Magic Pill:
   *  - n'expire jamais
   *  - ne perds jamais en bénéfices
   */

  