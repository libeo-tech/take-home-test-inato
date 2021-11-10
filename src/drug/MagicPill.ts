import { Drug, DrugType } from './drug';

class MagicPill extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super(DrugType.MAGIC_PILL, expiresIn, benefit);
  }

  updateBenefit(): void {
    super.updateBenefit();
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-empty-function
  updateExpiration(): void {}
}

export { MagicPill };
