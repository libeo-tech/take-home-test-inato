export class Drug {
  constructor(name, expiresIn, benefit, expirePerDay = -1, benefitPerDay = []) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.expirePerDay = expirePerDay;
    this.benefitPerDay = benefitPerDay;

    // If constructor data cannot be changed, do some exceptions here, example :
    // if (name === 'Doliprane') {
    //   this.expirePerDay = X
    //   this.benefitPerDay = X
    // } else if (name === 'Herbal Teal') {}
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  compare(post, operator, value) {
    switch (operator) {
      case '>':   return post > value;
      case '<':   return post < value;
      case '===': return post === value;
    }
  }

  calculateBenefitPerDay(drug) {
    if (drug.benefitPerDay.length) {
      if (typeof drug.benefitPerDay[0] === 'number') {
        return drug.benefit + drug.benefitPerDay[0]
      }

      let benefits = drug.benefit - 1

      drug.benefitPerDay.forEach(benefit => {
        const [operator, value, valueData] = benefit
        const comparedBenefitCase = this.compare(drug.expiresIn, operator, value)

        if (comparedBenefitCase) {
          if (operator === '===') {
            benefits = 0
            return
          }

          benefits = drug.benefit + valueData
          return
        }
      })

      return benefits
    }

    return drug.benefit - 1
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => {
      const basicBenefitPerDay = this.calculateBenefitPerDay(drug)
      const twiceBenefitPerDay = basicBenefitPerDay * 2

      if (drug.expiresIn === 0) {
        // If drugs expired the benefits decreased twice fast
        drug.benefit = twiceBenefitPerDay
      } else if (drug.benefit > 0) {
        // Else benefits loose basic number
        drug.benefit = basicBenefitPerDay
      }

      // Benefit never subceed 0
      if (drug.benefit < 0) {
        drug.benefit = 0
      }

      // Benefit never exceed 50
      if (drug.benefit > 50) {
        drug.benefit = 50
      }

      if (drug.expiresIn > 0) {
        drug.expiresIn += drug.expirePerDay
      }
    })

    return this.drugs;
  }
}
