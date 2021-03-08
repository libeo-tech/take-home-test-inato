import { Drug } from "../pharmacy";

export class Dafalgan extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
  }

  updateBenefit() {
    this.benefit > 0
      ? (this.benefit -= 1 * (this.expiresIn > 0 ? 2 : 4))
      : null;
    if (Math.sign(this.benefit) < 0) this.benefit = 0;
    this.updateExpireIn();
  }
}
