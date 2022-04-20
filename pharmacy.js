export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

const drugsEvolution = {
  'Herbal Tea': (benefit, expiresIn) => {
    let newBenefit = benefit + 1
    if (expiresIn <= 0) newBenefit += 1

    return newBenefit > 50 ? 50 : newBenefit
  },
  'Fervex': (benefit, expiresIn) => {
    let newBenefit = benefit + 1

    if (expiresIn <= 0) return 0

    if (expiresIn <= 10) newBenefit += 1
    if (expiresIn <= 5) newBenefit += 1

    return newBenefit > 50 ? 50 : newBenefit
  },
  'Magic Pill': (benefit, expiresIn) => benefit,
  'Dafalgan': (benefit, expiresIn) => {
    let newBenefit = benefit - 2
    if (expiresIn <= 0) newBenefit -= 2
    return newBenefit > 0 ? newBenefit : 0
  }
}

const drugsWithSpecialRule = Object.keys(drugsEvolution)

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {

    for (const drug of this.drugs) {
      if (drugsWithSpecialRule.includes(drug.name)) {
        drug.benefit = drugsEvolution[drug.name](drug.benefit, drug.expiresIn)
      } else {
        drug.benefit -= 1
        if (drug.expiresIn <= 0) drug.benefit -= 1
        if (drug.benefit < 0) drug.benefit = 0
      }

      if (drug.name !== 'Magic Pill')
        drug.expiresIn -= 1

    }
    return this.drugs;
  }
}
