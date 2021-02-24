export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name
    this.expiresIn = expiresIn
    this.benefit = benefit
  }
}

// I assumed benefit can equal 50 and 0 since it wasnt clear to me in instructions
export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs
  }
  // method assumes it wont be given a value higher than 50 or lower than 0,
  // those wouldnt be processed with this algo
  // there should be something to check for that normally
  updateBenefitValue() {
    for (let { name, expiresIn, benefit } of drugs) {
      // drugs where benefit decreases with time
      if (name != 'Herbal Tea' && name != 'Fervex') {
        if (benefit > 0) {
          if (name != 'Magic Pill') {
            benefit = benefit - 1
          }
        }
        // handling Dafalgan case making sure we respect not falling under 0
        if (name === 'Dafalgan' && benefit >= 2) {
          benefit = benefit - 2
        } else if (name === 'Dafalgan' && benefit < 2) {
          benefit = 0
        }
      } else {
        // drugs where benefit increases with time
        if (benefit < 50) {
          // INCREMENTING BENEFIT DRUGS REWRITE
          // added expiresIn = 0 case for fervex
          // made sure benef cant go above 50 or under 0 for fervex
          // and that it actually increments by more than 1 in relevant cases
          // added herbal tea process for post expiry
          // added common +1 incrementation for fervex and herbal tea
          if (name === 'Fervex') {
            if (expiresIn <= 0) {
              benefit = 0
            } else if (expiresIn < 11) {
              if (benefit <= 48) {
                benefit = benefit + 2
              } else if (benefit === 49) {
                benefit = 50
              }
            }
            if (expiresIn < 6) {
              if (benefit <= 47) {
                benefit = benefit + 3
              } else if (benefit > 47) {
                benefit = 50
              }
            }
          } else if (name === 'Herbal Tea' && expiresIn < 0) {
            benefit = benefit + 2
          } else {
            benefit = benefit + 1
          }
        }
      }
      // expiry update below
      if (name != 'Magic Pill') {
        expiresIn = expiresIn - 1
      }
      // handling benefit decrease twice as fast past expiry date
      if (expiresIn < 0 && benefit > 1) {
        if (name != 'Herbal Tea') {
          if (name != 'Fervex') {
            if (name != 'Magic Pill') {
              if (name != 'Dafalgan') {
                benefit = benefit - 2
              }
            }
          }
        }
        // handling case where benefit would become negative by just tuning it to 0
      } else if (expiresIn < 0 && benefit === 1) {
        benefit = 0
      }
      // handling dafalgan's decrease past expiry, twice as normal, AND twice as normal,
      // which should be 4 as opposed to 1
      if (expiresIn < 0 && benefit > 3) {
        if (name === 'Dafalgan') {
          benefit = benefit - 4
        }
        // handling case where benefit would become negative by just tuning it to 0
      } else if (expiresIn < 0 && benefit <= 4) {
        benefit = 0
      }
    }

    return this.drugs
  }
}
