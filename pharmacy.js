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
      var drugName = this.drugs[i].name;
      var drugExpiresIn = this.drugs[i].expiresIn;
      var drugBenefit = this.drugs[i].benefit;

      // console.log(i, drugName);

      switch (drugName) {
        case "Magic Pill":
          // console.log("Magic Pill");

          break;

        case "Herbal Tea":
          // console.log("Herbal Tea");

          if (drugExpiresIn > 0) {
            this.drugs[i].benefit += 1;
          } else {
            this.drugs[i].benefit += 2;
          }
          this.drugs[i].expiresIn -= 1;

          if (this.drugs[i].benefit >= 50) {
            this.drugs[i].expiresIn -= 1;
            this.drugs[i].benefit = 50;
            break;
          }

          // Si benefit == 50 expiresIn-- et break
          // Si expiresIn >= 0 alors benefit +=1 et expiresIn--
          // Si expiresIn <0 alors benefit +=2 et expiresIn--

          break;

        case "Fervex":
          // console.log("Fervex");
          break;

        case "Dafalgan":
          // console.log("Dafalgan");
          break;

        default:
          console.log("Normal drug");
      }

      //   if (
      //     this.drugs[i].name != "Herbal Tea" &&
      //     this.drugs[i].name != "Fervex" &&
      //     this.drugs[i].benefit > 0
      //   ) {
      //     if (this.drugs[i].name != "Magic Pill") {
      //       //!
      //       this.drugs[i].benefit -= 1;
      //     }
      //   } else {
      //     if (this.drugs[i].benefit < 50) {
      //       this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //       if (this.drugs[i].name == "Fervex") {
      //         if (this.drugs[i].expiresIn < 11) {
      //           if (this.drugs[i].benefit < 50) {
      //             //!
      //             this.drugs[i].benefit += 1;
      //           }
      //         }
      //         if (this.drugs[i].expiresIn < 6) {
      //           if (this.drugs[i].benefit < 50) {
      //             //!
      //             this.drugs[i].benefit += 1;
      //           }
      //         }
      //       }
      //     }
      //   }
      //   if (this.drugs[i].name != "Magic Pill") {
      //     //!
      //     this.drugs[i].expiresIn -= 1;
      //   }
      //   if (this.drugs[i].expiresIn < 0) {
      //     if (this.drugs[i].name != "Herbal Tea") {
      //       if (this.drugs[i].name != "Fervex") {
      //         if (this.drugs[i].benefit > 0) {
      //           if (this.drugs[i].name != "Magic Pill") {
      //             //!
      //             this.drugs[i].benefit -= 1;
      //           }
      //         }
      //       } else {
      //         //!
      //         this.drugs[i].benefit = 0;
      //       }
      //     } else {
      //       if (this.drugs[i].benefit < 50) {
      //         //!
      //         this.drugs[i].benefit += 1;
      //       }
      //     }
      //   }
    }

    return this.drugs;
  }
}

// Magic Pill
// benefit reste constant
// expiresIn reste constant

// HerbalTea
// Si benefit == 50 expiresIn-- et break
// Si benefit == 0 expiresIn-- et break
// Si expiresIn >= 0 alors benefit +=1 et expiresIn--
// Si expiresIn <0 alors benefit +=2 et expiresIn--

// Fervex
// Si benefit == 50 expiresIn-- et break
// Si benefit == 0 expiresIn-- et break
// Si expiresIn <10 alors benefit +=2 et expiresIn--
// Si expiresIn <5 alors benefit +=3 et expiresIn--
// Si expiresIn <0 alors benefit =0 et expiresIn--

// Dafalgan
// Si benefit == 50 expiresIn-- et break
// Si benefit == 0 expiresIn-- et break
// Si expiresIn >= 0 alors benefit -=2
// Si expiresIn < 0 alors benefit -=4

// Autres cas
// Si benefit == 50 expiresIn-- et break
// Si benefit == 0 expiresIn-- et break
// Si expiresIn >= 0 alors benefit -=1
// Si expiresIn < 0 alors benefit -2
