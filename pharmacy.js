export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

/* Doliprane : -1 benefit (expires >= 0), -2 benefit (expires < 0) */
/* Magic Pill : nothing happens */
/* Herbal Tea : +1 benefit (expires >= 0) / +2 benefit (expires < 0) */
/* Fervex : +1 benefit (expires > 10), +2 benefit (expires <= 10), +3 benefit (expires <= 5), drop 0 (expires < 0) */

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (let i = 0, l = this.drugs.length; i < l; ++i) {
      const { name, expiresIn, benefit } = this.drugs[i]
      let nextExpiresIn = expiresIn - 1
      let nextBenefit = benefit

      switch (name) {
        case 'Fervex':
          if (nextExpiresIn > 10) {
            nextBenefit = benefit + 1
          }

          if (nextExpiresIn <= 10) {
            nextBenefit = benefit + 2
          }

          if (nextExpiresIn <= 5 && nextExpiresIn >= 0) {
            nextBenefit = benefit + 3
          }

          if (nextExpiresIn < 0) {
            nextBenefit = 0
          }
          break

        case 'Herbal Tea':
          nextBenefit = nextExpiresIn >= 0 ? nextBenefit + 1 : nextBenefit + 2
          break
        case 'Magic Pill':
          nextExpiresIn = expiresIn
          break
        case 'Dafalgan':
          nextBenefit = nextExpiresIn >= 0 ? nextBenefit - 2 : nextBenefit - 4
          break
        default:
          nextBenefit = nextExpiresIn >= 0 ? nextBenefit - 1 : nextBenefit - 2
          break
      }
      nextBenefit = nextBenefit > 50 ? 50 : nextBenefit
      nextBenefit = nextBenefit < 0 ? 0 : nextBenefit
      this.drugs[i].expiresIn = nextExpiresIn
      this.drugs[i].benefit = nextBenefit
    }
    return this.drugs
  }
}
