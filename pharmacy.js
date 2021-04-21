export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  decreaseBenefitBy(n) {
    // The Benefit of an item is never negative.
    this.benefit -= this.benefit - n < 0 ? this.benefit : n
  }  
  increaseBenefitBy(n) {
    // The Benefit of an item is never more than 50.
    this.benefit += this.benefit + n > 50 ? 50 - this.benefit : n
  }

  defaultBenefitVariation() {
    return this.expiresIn > 0 ? 1 : 2
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  
  updateBenefitValue() {
    this.drugs.forEach(drug => {
      switch (drug.name) {
        case "Herbal Tea":
          drug.increaseBenefitBy(drug.defaultBenefitVariation())
          break;
        case "Magic Pill":
          drug.expiresIn += 1
          break;
        case "Fervex":
          if (drug.expiresIn <= 0) {
            drug.benefit = 0
          } else if (drug.expiresIn > 10) {
            drug.increaseBenefitBy(1)
          } else if (drug.expiresIn > 5) {
            drug.increaseBenefitBy(2)
          } else {
            drug.increaseBenefitBy(3)
          }
          break;
        case "Dafalgan":
          drug.decreaseBenefitBy(drug.defaultBenefitVariation()*2)
          break;      
        default:
          drug.decreaseBenefitBy(drug.defaultBenefitVariation())
        }
        drug.expiresIn -= 1
    })
    return this.drugs;
  }
}
