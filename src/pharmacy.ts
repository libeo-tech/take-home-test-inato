import { Drug } from './drug'

export class Pharmacy {
  drugs: Drug[]

  constructor(drugs: Drug[] = []) {
    this.drugs = drugs
  }

  updateBenefitValue(): Drug[] {
    for (let i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateValues()
    }

    return this.drugs
  }
}
