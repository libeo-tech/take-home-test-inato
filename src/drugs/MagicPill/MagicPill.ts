import { Drug } from '../Drug';

export class MagicPill extends Drug {
  constructor(expiresIn = 15, benefit = 40) {
    super('Magic Pill', expiresIn, benefit);
  }

  updateBenefit() {
    // Does not expires nor decrease in benefit;
  }
}
