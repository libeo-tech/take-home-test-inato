import { Drug, DrugType } from './drug';

class Dafalgan extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super(DrugType.DAFALGAN, expiresIn, benefit);
  }

  updateBenefit(): void {
    const loss = this.expiresIn < 0 ? 4 : 2;
    this.benefit -= loss;

    super.updateBenefit();
  }

  updateExpiration(): void {
    this.expiresIn -= 1;
  }
}

export { Dafalgan };
