import { Drug } from "./Drug.js";

export class MagicPill extends Drug {
    constructor(expiresIn, benefit) {
      super("Magic Pill", expiresIn, benefit);
    }
    updateBenefit() {
      this.benefit = this.benefit;
    }
  }
  