import { Drug } from './drug'

export class Pharmacy {
  drugs: Drug[]
  constructor(drugs: Drug[] = []) {
    this.drugs = drugs
  }
  updateBenefitValue(): Drug[] {
    for (let i = 0; i < this.drugs.length; i++) {
      if (
        this.drugs[i].name != 'Herbal Tea' &&
        this.drugs[i].name != 'Fervex'
      ) {
        if (this.drugs[i].name != 'Magic Pill') {
          this.drugs[i].decreaseBenefitValue()
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].increaseBenefitValue()
          if (this.drugs[i].name == 'Fervex') {
            if (this.drugs[i].expiresIn < 11) {
              this.drugs[i].increaseBenefitValue()
            }
            if (this.drugs[i].expiresIn < 6) {
              this.drugs[i].increaseBenefitValue()
            }
          }
        }
      }
      if (this.drugs[i].name != 'Magic Pill') {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != 'Herbal Tea') {
          if (this.drugs[i].name != 'Fervex') {
            if (this.drugs[i].name != 'Magic Pill') {
              this.drugs[i].decreaseBenefitValue()
            }
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit
          }
        } else {
          this.drugs[i].increaseBenefitValue()
        }
      }
    }

    return this.drugs
  }
}
