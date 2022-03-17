import { Drug } from './Drug';

class MagicPill extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super('Magic Pill', expiresIn, benefit);
  }

  updateExpiration(): void {}

  // "Magic Pill" never expires nor decreases in Benefit.
  updateBenefit(): void {
    super.updateBenefit();
  }
}

export { MagicPill };
