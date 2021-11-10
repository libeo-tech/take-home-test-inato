import { Drug, DrugType } from './drug';

class HerbalTea extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super(DrugType.HERBAL_TEA, expiresIn, benefit);
  }

  updateBenefit(): void {
    const gain = this.expiresIn < 0 ? 2 : 1;
    this.benefit += gain;

    super.updateBenefit();
  }

  updateExpiration(): void {
    this.expiresIn -= 1;
  }
}

export { HerbalTea };
