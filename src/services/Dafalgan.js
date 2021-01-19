import Drug from "./Drug";

export const DAFALGAN = "Dafalgan";
/**
 *
 */
export default class Dafalgan extends Drug {
  constructor(expiresIn, benefit) {
    super(DAFALGAN, expiresIn, benefit);
  }

  updateBenefitValue() {
    // Decrease benifit twice
    super.decreaseBenifit();
    super.decreaseBenifit();
    this.expiresIn--;
    return this;
  }
}
