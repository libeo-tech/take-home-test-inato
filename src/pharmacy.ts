import { Drug } from './drug'

export class Pharmacy {
  public drugs: Array<Drug>

  constructor(drugs: Array<Drug> = []) {
    this.drugs = drugs
  }

  updateBenefitValue(): Array<Drug> {
    this.drugs = this.drugs.map((drug) => Drug.Update(drug))
    return this.drugs
  }
}
