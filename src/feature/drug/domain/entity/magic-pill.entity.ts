import { Drug } from "./drug.entity";

export class MagicPill extends Drug {
  get expiresIn() {
    return this._expiresIn;
  }
  get benefit() {
    return Math.min(this._benefit, this._benefitLimit);
  }
}
