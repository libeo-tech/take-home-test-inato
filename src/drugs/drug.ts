export const MAX_BENEFIT = 50
export const MIN_BENEFIT = 0

export class Drug {
  name: string
  expiresIn: number
  benefit: number
  expires: boolean

  constructor(
    name: string,
    expiresIn: number,
    benefit: number,
    expires = true
  ) {
    this.name = name
    this.expiresIn = expiresIn
    this.benefit = benefit
    this.expires = expires
  }

  updateValues(): void {
    if (this.expires) {
      this.updateExpirationValue()
      this.updateBenefitValue()
    }
  }

  updateExpirationValue(): void {
    this.expiresIn--
  }

  updateBenefitValue(): void {
    this.expiresIn <= 0
      ? this.decreaseBenefitValue(2)
      : this.decreaseBenefitValue()
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
