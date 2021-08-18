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

  regularizeBenefitValues (drug) {
    if (drug.benefit > 50) drug.benefit = 50
    else if (drug.benefit < 0) drug.benefit = 0
  }

  updateDefault (drug) {
    if (!drug.isExpired()) {
      drug.benefit -= 1
    } else drug.benefit -= 2
    return this.regularizeBenefitValues(drug)
  }

  updateHerbalTea (herbalTea) {
    if (!herbalTea.isExpired()) {
      herbalTea.benefit += 1
    } else herbalTea.benefit += 2
    return this.regularizeBenefitValues(herbalTea)
  }

  updateFervex (fervex) {
    switch (true) {
      case !fervex.isExpired() && fervex.expiresIn > 10:
        fervex.benefit += 1
        break
      case fervex.expiresIn <= 10 && fervex.expiresIn > 5:
        fervex.benefit += 2
        break
      case fervex.expiresIn <= 5 && fervex.expiresIn > 0:
        fervex.benefit += 3
        break
      case fervex.isExpired(): fervex.benefit = 0
        break
    }
    return this.regularizeBenefitValues(fervex)
  }

  updateDafalgan (dafalgan) {
    if (!dafalgan.isExpired()) {
      dafalgan.benefit -= 2
    } else dafalgan.benefit -= 4
    return this.regularizeBenefitValues(dafalgan)
  }

  updateBenefitValue () {
    for (let i = 0; i < this.drugs.length; i++) {
      switch (this.drugs[i].name) {
        case 'Magic Pill':
          continue
        case 'Herbal Tea':
          this.updateHerbalTea(this.drugs[i])
          break
        case 'Fervex':
          this.updateFervex(this.drugs[i])
          break
        case 'Dafalgan':
          this.updateDafalgan(this.drugs[i])
          break
        default:
          this.updateDefault(this.drugs[i])
          break
      }
      this.drugs[i].expiresIn--
    }
    return this.drugs
  }
}
