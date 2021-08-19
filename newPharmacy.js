export class Drug {
  constructor (name, expiresIn, benefit) {
    this.name = name
    this.expiresIn = expiresIn
    this.benefit = benefit
  }

  isExpired () {
    if (this.expiresIn > 0) return false
    return true
  }
}

export class Pharmacy {
  constructor (drugs = []) {
    this.drugs = drugs
  }

  fervexAmmountGenerator (drug) {
    if (drug.expiresIn > 10) {
      return 1
    } else if (drug.expiresIn > 5) {
      return 2
    } else if (drug.expiresIn > 0) {
      return 3
    } else {
      return 0
    }
  }

  increaseBenefit (drug, ammount) {
    drug.benefit += ammount
    if (drug.benefit > 50) drug.benefit = 50
    if (ammount === 0) drug.benefit = 0
  }

  decreaseBenefit (drug, ammount) {
    drug.benefit -= ammount
    if (drug.benefit < 0) drug.benefit = 0
    return drug
  }

  updateBenefitValue () {
    for (let i = 0; i < this.drugs.length; i++) {
      switch (this.drugs[i].name) {
        case 'Magic Pill':
          continue
        case 'Herbal Tea':
          this.increaseBenefit(this.drugs[i], !this.drugs[i].isExpired() ? 1 : 2)
          break
        case 'Fervex':
          this.increaseBenefit(this.drugs[i], this.fervexAmmountGenerator(this.drugs[i]))
          break
        case 'Dafalgan':
          this.decreaseBenefit(this.drugs[i], !this.drugs[i].isExpired() ? 2 : 4)
          break
        default:
          this.decreaseBenefit(this.drugs[i], !this.drugs[i].isExpired() ? 1 : 2)
          break
      }
      this.drugs[i].expiresIn--
    }
    return this.drugs
  }
}
