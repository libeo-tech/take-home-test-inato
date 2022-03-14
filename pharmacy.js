export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  
  /**
   * @Dev call this to update the benefit value for this drug. This may decrease expiresIn by 1. 
   * It finds the correct increment of benefit to apply by finding withing which of the given ranges this.expiresIn falls into.
   * @param {tickParams[n]} expiryParams : an array of tickParams. A tickParam contains the increment to apply to benefit and a range.
   * i.e: tickParams = [ 
   *  increment: number, 
   *  [
   *    expiresInLowerBound: number|+/-Infinity,
   *    expiresInUpperBound: number|+/-Infinity
   *  ] 
   * ]
   */
  updateBenefitValue(expiryParams = [ [-1, [0, Infinity ] ], [-2, [-Infinity, 0] ] ]) {
    try {
      // when no expiry date, do not decrease this.expiresIn
      // (NOTE: I don't like that ... we're not tracking the passing of days at all...)
      if(!(expiryParams.length === 1 && expiryParams[0][1].toString() === ([-Infinity, Infinity]).toString())){
        this.expiresIn -= 1
      }
      let _incr = ( expiryParams.find( param => this.expiresIn >= param[1][0] && this.expiresIn < param[1][1]) )[0]
      
      // when _incr is a string, it is not an increment but the actual value for benefit (hardcoded)
      let _calculatedBenefit = typeof _incr === 'string'
        ? Math.min(50, Number(_incr))
        : Math.min(50, this.benefit + _incr)

      this.benefit = Math.max(0, _calculatedBenefit);

    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
    this.drugsExpiryParams = {}
  }
  setDrugsExpiryParams(expiryParams) {
    try {
      if(!expiryParams) { throw new Error('INATO: expiryParams must be provided') }
      this.drugsExpiryParams = expiryParams
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  
  updateBenefitValue() {
    try {
      for (var i = 0; i < this.drugs.length; i++) {
        this.drugs[i].updateBenefitValue(this.drugsExpiryParams[this.drugs[i].name])
      }

      return this.drugs;
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}


/**
 * updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (
        this.drugs[i].name != "Herbal Tea" &&
        this.drugs[i].name != "Fervex"
      ) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name != "Magic Pill") {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name == "Fervex") {
            if (this.drugs[i].expiresIn < 11) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
            if (this.drugs[i].expiresIn < 6) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
          }
        }
      }
      if (this.drugs[i].name != "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != "Herbal Tea") {
          if (this.drugs[i].name != "Fervex") {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != "Magic Pill") {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }
            }
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
          }
        } else {
          if (this.drugs[i].benefit < 50) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
        }
      }
    }

    return this.drugs;
  }
 */