import Drugs from "../drug";

export default class Doliprane extends Drugs {
  constructor(expiresIn, benefit) {
    super("Magic Pill", expiresIn, benefit);
  }
}
