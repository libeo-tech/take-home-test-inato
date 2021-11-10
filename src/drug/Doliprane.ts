import { Drug, DrugType } from './drug';

class Doliprane extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super(DrugType.DOLIPRANE, expiresIn, benefit);
  }

  updateBenefit(): void {
    const loss = this.expiresIn < 0 ? 2 : 1;
    this.benefit -= loss;

    super.updateBenefit();
  }

  updateExpiration(): void {
    this.expiresIn -= 1;
  }
}

export { Doliprane };
