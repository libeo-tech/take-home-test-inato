import { Drug } from '../drug';

export class Dafalgan extends Drug {
  constructor(expiresIn, benefit) {
		super(Dafalgan.name, expiresIn, benefit);
	}

  decreaseExpiresIn() {
    this.expiresIn -= 1;
    if (super.isExpired()) {
      this.benefit -= super.defaultBenefitPerDay * 4;
    } else {
      this.benefit -= super.defaultBenefitPerDay * 2;
    }
  }
}
