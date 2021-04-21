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

    // switch (drug.name) {
    //   case "Herbal Tea":

    //     break;
    //   case "Magic Pill":

    //     break;
    //   case "Fervex":

    //     break;
    //   case "Dafalgan":

    //     break;      
    //   default:
    //     drug += 1;
    // }

    this.drugs.forEach(drug => {
      if (
        drug.name != "Herbal Tea" &&
        drug.name != "Fervex"
      ) {
        if (drug.benefit > 0) {
          if (drug.name != "Magic Pill") {
            drug.benefit -= 1;
          }
        }
      } else {
        if (drug.benefit < 50) {
          drug.benefit += 1;
          if (drug.name == "Fervex") {
            if (drug.expiresIn < 11) {
              if (drug.benefit < 50) {
                drug.benefit += 1;
              }
            }
            if (drug.expiresIn < 6) {
              if (drug.benefit < 50) {
                drug.benefit += 1;
              }
            }
          }
        }
      }
      if (drug.name != "Magic Pill") {
        drug.expiresIn = drug.expiresIn - 1;
      }
      if (drug.expiresIn < 0) {
        if (drug.name != "Herbal Tea") {
          if (drug.name != "Fervex") {
            if (drug.benefit > 0) {
              if (drug.name != "Magic Pill") {
                drug.benefit -= 1;
              }
            }
          } else {
            drug.benefit =
              drug.benefit - drug.benefit;
          }
        } else {
          if (drug.benefit < 50) {
            drug.benefit += 1;
          }
        }
      }
    })

    return this.drugs;
  }

  // decreaseBenefitBy(n) {
  //   this.benefit -= n
  // }  
  // increaseBenefitBy(n) {
  //   this.benefit += n
  // }  
  
}
