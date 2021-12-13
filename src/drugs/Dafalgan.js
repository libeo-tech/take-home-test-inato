import { Drug } from "./Drug.js";

/**
 * * class Dafalgan : a basic drug with a benefit factor of -2 (benefit decreases twice as fast as normal drug)
 * @extends Drug
 * @property {number} expiresIn - number of days before drug expires
 * @property {number} benefit - the benefit of the drug (0 <= benefit <= 50)
 */
export class Dafalgan extends Drug {
  constructor(_expiresIn, _benefit) {
    super("Dafalgan", _expiresIn, _benefit, -2);
  }
}
