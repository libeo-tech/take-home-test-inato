export class Drug {
  constructor (name, expiresIn, benefit) {
    this.name = name
    this.expiresIn = expiresIn
    this.benefit = benefit
  }
}

export class Pharmacy {
  constructor (drugs = []) {
    this.drugs = drugs
  }

  cleanObject (drug) {
    if (drug.benefit > 50) {
      drug.benefit = 50
    } if (drug.expiresIn < 0) {
      drug.expiresIn = 0
    } if (drug.benefit < 0) {
      drug.benefit = 0
    }
    return drug
  }

  updateBenefitValue () {
    if(!this.drugs.length) {
      return 
    }
    this.drugs.map((drug) => {
      if (drug.name === 'Magic Pill') {
        return null
      } else if (drug.name === 'Herbal Tea') {
        if (drug.benefit < 50 && drug.expiresIn > 0) {
          drug.benefit += 1
        } else if (drug.benefit < 50 && drug.expiresIn === 0) {
          drug.benefit += 2
        }
      } else if (drug.name === 'Fervex') {
        if (drug.benefit < 50 && drug.expiresIn > 0) {
          if (drug.expiresIn < 6) {
            drug.benefit += 3
          } else if (drug.expiresIn < 11) {
            drug.benefit += 2
          } else {
            drug.benefit += 1
          }
        } else {
          drug.benefit = 0
        }
      } else {
        if (drug.expiresIn > 0) {
          if (drug.name === 'Dafalgan') {
            drug.benefit -= 2
          } else {
            drug.benefit -= 1
          }
        } else {
          if (drug.name === 'Dafalgan') {
            drug.benefit -= 4
          } else {
            drug.benefit -= 2
          }
        }
      }
      drug.expiresIn -= 1
      drug = this.cleanObject(drug)
    })
    return this.drugs
  }
}
