import { Drug } from './drug'

export class PositiveDrug extends Drug {
  constructor(name: string, expiresIn: number, benefit: number) {
    super(name, expiresIn, benefit)
  }

  updateBenefitValue(): void {
    this.expiresIn <= 0
      ? this.increaseBenefitValue(2)
      : this.increaseBenefitValue()
  }
}
