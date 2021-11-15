import Drugs from "../drug";

export default class MagicPill extends Drugs {
  constructor(expiresIn, benefit) {
    super("Magic Pill", expiresIn, benefit);
  }

  updateBenefit() {
  }

  updateExpiresIn() {
  }

}
