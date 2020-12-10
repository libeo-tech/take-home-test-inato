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
    this.maxBenefit = 50
    this.minBenefit = 0
  }

  setBenefitInInterval(benefit){
    
    benefit = benefit < this.minBenefit ?  this.minBenefit :  benefit
    benefit = benefit > this.maxBenefit ? this.maxBenefit : benefit
    return benefit
  }
  updateBenefitValue() {
    /* iterate through each drugs to apply benefits */
    this.drugs = this.drugs.map((drug) => {
      let newBenefit = drug.benefit
      switch (drug.name) {
        case 'Herbal Tea':
          newBenefit = drug.expiresIn <= 0 ? newBenefit + 2 : newBenefit + 1
          drug.benefit = this.setBenefitInInterval(newBenefit)
          drug.expiresIn -= 1
          break;
        case "Magic Pill":
          /*case magic Pill we dont modificate  expiration date nor benefit*/
          break
        case "Fervex":
          if (drug.expiresIn > 10) {
            newBenefit += 1
          }
          else if (drug.expiresIn <= 10 && drug.expiresIn > 5){
            newBenefit += 2
  
          }
          else if (drug.expiresIn <= 5 && drug.expiresIn > 0){
            newBenefit += 3
  
          } else {
            // case where expiration date is under 0
            newBenefit = 0
          }
          drug.benefit = this.setBenefitInInterval(newBenefit)
          drug.expiresIn -= 1
          break
        case "Dafalgan":
          newBenefit = drug.expiresIn <= 0 ? newBenefit - 4 : newBenefit - 2
          drug.benefit = this.setBenefitInInterval(newBenefit)
          drug.expiresIn -= 1
          break

        default:
          // all other drugs
          newBenefit = drug.expiresIn <= 0 ? newBenefit - 2 : newBenefit - 1
          drug.benefit = this.setBenefitInInterval(newBenefit)
          drug.expiresIn -= 1

      }
      return drug
    })
    return this.drugs;
  }
}
