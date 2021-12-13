import { Drug } from "./Drug.js";

/**
 * * class HerbalTea : a drug that increases in benefit the older it gets.
 * Benefit increases twice as fast after the expiration date.
 * @extends Drug
 * @property {number} expiresIn - number of days before drug expires
 * @property {number} benefit - the benefit of the drug (0 <= benefit <= 50)
 */
export class HerbalTea extends Drug {
  constructor(_expiresIn, _benefit) {
    super("Herbal Tea", _expiresIn, _benefit, 1);
  }
}
