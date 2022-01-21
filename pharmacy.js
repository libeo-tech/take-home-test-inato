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

  _defaultUpdateBenefitValue(benefit, expiresIn) {
    let newBenefit = benefit - 1
    if (expiresIn <= 0) newBenefit -= 1
    return newBenefit > 0 ? newBenefit : 0
  }

  _herbalTeaUpdateBenefitValue(benefit, expiresIn) {
    let newBenefit = benefit + 1
    if (expiresIn <= 0) newBenefit += 1

    return newBenefit > 50 ? 50 : newBenefit
  }
  _fervexUpdateBenefitValue(benefit, expiresIn) {
    let newBenefit = benefit + 1

    if (expiresIn <= 0) return 0

    if (expiresIn <= 10) newBenefit += 1
    if (expiresIn <= 5) newBenefit += 1

    return newBenefit > 50 ? 50 : newBenefit
  }

  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      switch (this.drugs[i].name) {
        case 'Herbal Tea':
          this.drugs[i].benefit = this._herbalTeaUpdateBenefitValue(this.drugs[i].benefit, this.drugs[i].expiresIn)
          break
        case 'Fervex':
          this.drugs[i].benefit = this._fervexUpdateBenefitValue(this.drugs[i].benefit, this.drugs[i].expiresIn)
          break
        case 'Magic Pill':
          break
        default:
          this.drugs[i].benefit = this._defaultUpdateBenefitValue(this.drugs[i].benefit, this.drugs[i].expiresIn)
          break
      }

      if (this.drugs[i].name !== 'Magic Pill')
        this.drugs[i].expiresIn -= 1
    }

    return this.drugs;
  }
}
