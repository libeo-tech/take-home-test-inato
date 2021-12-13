import { Drug } from "./Drug.js";

/**
 * * class Doliprane : a basic drug
 * @extends Drug
 * @property {number} expiresIn - number of days before drug expires
 * @property {number} benefit - the benefit of the drug (0 <= benefit <= 50)
 */
export class Doliprane extends Drug {
  constructor(_expiresIn, _benefit) {
    super("Doliprane", _expiresIn, _benefit);
  }
}
