export const MAX_BENEFIT = 50
export const MIN_BENEFIT = 0

export interface DrugOptions {
  neverExpires?: boolean
  positive?: boolean
  unefficientExpired?: boolean
  benefitsPerDate?: {
    limitDate: number
    benefitValue: number
  }[]
}

export class Drug {
  name: string
  expiresIn: number
  benefit: number
  options?: DrugOptions

  constructor(
    name: string,
    expiresIn: number,
    benefit: number,
    options?: DrugOptions
  ) {
    this.name = name
    this.expiresIn = expiresIn
    this.benefit = benefit
    this.options = options
  }

  updateValues(): void {
    if (!this.options || !this.options.neverExpires) {
      // drug which expires
      this.updateExpirationValue()
      this.updateBenefitValue()
    }
  }

  updateExpirationValue(): void {
    this.expiresIn--
  }

  updateBenefitValue(): void {
    if (!this.unefficientExpired()) {
      const value = this.getBenefitValue()
      if (this.options && this.options.positive) {
        // positive drug
        this.increaseBenefitValue(value)
      } else {
        // normal drug
        this.decreaseBenefitValue(value)
      }
    }
  }

  unefficientExpired(): boolean {
    if (this.expiresIn < 0 && this.options && this.options.unefficientExpired) {
      this.benefit = 0
      return true
    }
    return false
  }

  getBenefitValue(): number {
    let value = 1

    if (this.expiresIn < 0) {
      // twice as fast
      value = 2
    }

    if (this.options && this.options.benefitsPerDate) {
      let minLimit
      // find the smallest limit which expiresIn is inferior to and get the value
      for (const benefitPerDate of this.options.benefitsPerDate) {
        const { limitDate, benefitValue } = benefitPerDate
        if (this.expiresIn <= limitDate) {
          if (minLimit === undefined || limitDate < minLimit) {
            minLimit = limitDate
            value = benefitValue
          }
        }
      }
    }

    return value
  }

  increaseBenefitValue(increase = 1): void {
    const increasedBenefit = this.benefit + increase
    this.benefit =
      increasedBenefit < MAX_BENEFIT ? increasedBenefit : MAX_BENEFIT
  }

  decreaseBenefitValue(decrease = 1): void {
    const decreasedBenefit = this.benefit - decrease
    this.benefit =
      decreasedBenefit > MIN_BENEFIT ? decreasedBenefit : MIN_BENEFIT
  }
}
