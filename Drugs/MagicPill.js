import { Drug } from "../pharmacy";

export class MagicPill extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
  }

  updateExpireIn() {}

  updateBenefit() {}
}
