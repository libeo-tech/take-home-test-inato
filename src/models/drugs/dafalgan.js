import Drugs from "../drug";

export default class Dafalgan extends Drugs {
  constructor(expiresIn, benefit) {
    super("Dafalgan", expiresIn, benefit);
  }

  updateBenefit() {
    super.updateBenefit();
    super.updateBenefit();
  }
}
