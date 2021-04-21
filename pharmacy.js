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
    // Once the expiration date has passed, Benefit degrades twice as fast.
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
          // "Herbal Tea" actually increases in Benefit the older it gets. Benefit increases twice as fast after the expiration date.
          drug.increaseBenefitBy(drug.defaultBenefitVariation())
          break;
        case "Magic Pill":
          // "Magic Pill" never expires nor decreases in Benefit.
          drug.expiresIn += 1
          break;
        case "Fervex":
          // "Fervex", like Herbal Tea, increases in Benefit as its expiration date approaches. Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Benefit drops to 0 after the expiration date.
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
          // "Dafalgan" degrades in Benefit twice as fast as normal drugs.
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
