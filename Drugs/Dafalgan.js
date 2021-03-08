import { Drug } from "../pharmacy";

export class Dafalgan extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
  }

  updateBenefit() {
    this.benefit > 1
      ? (this.benefit -= 2)
      : this.benefit > 0
      ? (this.benefit -= 1)
      : null;
  }
}
