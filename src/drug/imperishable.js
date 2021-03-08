import { Drug } from "./base";

export class ImperishableDrug extends Drug {
  /**
   * Imperishable drugs do not age
   */
  updateBenefit() {}
}
