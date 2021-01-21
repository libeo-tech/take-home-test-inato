export const MAX_BENEFIT = 50
export const MIN_BENEFIT = 0

export interface DrugOptions {
  neverExpires?: boolean
  positive?: boolean
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
      this.updateExpirationValue()
      this.updateBenefitValue()
    }
  }

  updateExpirationValue(): void {
    this.expiresIn--
  }

  updateBenefitValue(): void {
    const value = this.expiresIn <= 0 ? 2 : 1
    if (!this.options || !this.options.positive) {
      this.decreaseBenefitValue(value)
    } else {
      this.increaseBenefitValue(value)
    }
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
