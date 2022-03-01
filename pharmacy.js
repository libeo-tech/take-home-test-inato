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
      // if (
      //   this.drugs[i].name != "Herbal Tea" &&
      //   this.drugs[i].name != "Fervex"
      // ) {
      //   if (this.drugs[i].benefit > 0) {
      //     if (this.drugs[i].name != "Magic Pill") {
      //       this.drugs[i].benefit = this.drugs[i].benefit - 1;
      //     }
      //   }
      // } else {
      //   if (this.drugs[i].benefit < 50) {
      //     this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //     if (this.drugs[i].name == "Fervex") {
      //       if (this.drugs[i].expiresIn < 11) {
      //         if (this.drugs[i].benefit < 50) {
      //           this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //         }
      //       }
      //       if (this.drugs[i].expiresIn < 6) {
      //         if (this.drugs[i].benefit < 50) {
      //           this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //         }
      //       }
      //     }
      //   }
      // }
      // if (this.drugs[i].name != "Magic Pill") {
      //   this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      // }
      // if (this.drugs[i].expiresIn < 0) {
      //   if (this.drugs[i].name != "Herbal Tea") {
      //     if (this.drugs[i].name != "Fervex") {
      //       if (this.drugs[i].benefit > 0) {
      //         if (this.drugs[i].name != "Magic Pill") {
      //           this.drugs[i].benefit = this.drugs[i].benefit - 1;
      //         }
      //       }
      //     } else {
      //       this.drugs[i].benefit =
      //         this.drugs[i].benefit - this.drugs[i].benefit;
      //     }
      //   } else {
      //     if (this.drugs[i].benefit < 50) {
      //       this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //     }
      //   }
      // }

      if (this.drugs[i].name !== "Magic Pill") {
        //HERBAL TEA
        if (this.drugs[i].name === "Herbal Tea") {
          if (this.drugs[i].expiresIn <= 0) {
            this.drugs[i].benefit =
              this.drugs[i].benefit + 2 > 50 ? 50 : this.drugs[i].benefit + 2;
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit + 1 > 50 ? 50 : this.drugs[i].benefit + 1;
          }
          //FERVEX
        } else if (this.drugs[i].name === "Fervex") {
          if (this.drugs[i].expiresIn > 10) {
            this.drugs[i].benefit =
              this.drugs[i].benefit + 1 > 50 ? 50 : this.drugs[i].benefit + 1;
          } else if (
            this.drugs[i].expiresIn <= 10 &&
            this.drugs[i].expiresIn > 5
          ) {
            this.drugs[i].benefit =
              this.drugs[i].benefit + 2 > 50 ? 50 : this.drugs[i].benefit + 2;
          } else if (
            this.drugs[i].expiresIn <= 5 &&
            this.drugs[i].expiresIn > 0
          ) {
            this.drugs[i].benefit =
              this.drugs[i].benefit + 3 > 50 ? 50 : this.drugs[i].benefit + 3;
          } else {
            this.drugs[i].benefit = 0;
          }
        } else if (this.drugs[i].name === "Dafalgan") {
          this.drugs[i].benefit =
            this.drugs[i].benefit - 2 < 0 ? 0 : this.drugs[i].benefit - 2;
        } else {
          //NORMAL
          if (this.drugs[i].expiresIn <= 0) {
            this.drugs[i].benefit =
              this.drugs[i].benefit - 2 < 0 ? 0 : this.drugs[i].benefit - 2;
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - 1 < 0 ? 0 : this.drugs[i].benefit - 1;
          }
        }
        this.drugs[i].expiresIn -= 1;
      }
    }

    return this.drugs;
  }
}
