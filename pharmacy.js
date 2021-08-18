export class Drug {
  constructor (name, expiresIn, benefit) {
    this.name = name
    this.expiresIn = expiresIn
    this.benefit = benefit
  }

  isExpired () {
    if (this.expiresIn > 0) {
      return false
    }
    return true
  }
}

export class Pharmacy {
  constructor (drugs = []) {
    this.drugs = drugs
  }

  regularizeDrugsValues (drug) {
    switch (true) {
      case drug.benefit > 50:
        drug.benefit = 50
        break
      case drug.benefit < 0:
        drug.benefit = 0
        break
      case drug.expiresIn < 0:
        drug.expiresIn = 0
        break
    }
  }

  default (drug) {
    if (!drug.isExpired()) {
      drug.benefit -= 1
      drug.expiresIn -= 1
    } else drug.benefit -= 2
    return this.regularizeDrugsValues(drug)
  }

  updateHerbalTea (herbalTea) {
    if (!herbalTea.isExpired()) {
      herbalTea.benefit += 1
      herbalTea.expiresIn -= 1
    } else herbalTea.benefit += 2
    return this.regularizeDrugsValues(herbalTea)
  }

  updateFervex (fervex) {
    switch (true) {
      case !fervex.isExpired() && fervex.expiresIn > 10:
        fervex.benefit += 1
        fervex.expiresIn -= 1
        break
      case fervex.expiresIn <= 10 && fervex.expiresIn > 5:
        fervex.benefit += 2
        fervex.expiresIn -= 1
        break
      case fervex.expiresIn <= 5 && fervex.expiresIn > 0:
        fervex.benefit += 3
        fervex.expiresIn -= 1
        break
      case fervex.isExpired(): fervex.benefit = 0
        break
    }
  }

  updateBenefitValue () {
    this.drugs.forEach(drug => {
      switch (drug.name) {
        case 'Magic pill':
          break
        case 'Herbal tea':
          drug = this.updateHerbalTea(drug)
          break
        case 'Fervex':
          drug = this.updateFervex(drug)
          break
        default:
          drug = this.default(drug)
          break
      }
    })
    return this.drugs
  }
}
