import { Drug, DrugType } from './drug';

class Fervex extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super(DrugType.FERVEX, expiresIn, benefit);
  }

  updateBenefit(): void {
    if (this.expiresIn < 0) {
      this.benefit = 0;
      return;
    }

    if (this.expiresIn <= 5) {
      this.benefit += 3;
    } else if (this.expiresIn <= 10) {
      this.benefit += 2;
    } else {
      this.benefit += 1;
    }

    super.updateBenefit();
  }

  updateExpiration(): void {
    this.expiresIn -= 1;
  }
}

export { Fervex };
