import { RateDrug } from "./rate";

export class HerbalTea extends RateDrug {
  constructor(expiresIn, benefit) {
    super("Herbal Tea", expiresIn, benefit, -1);
  }
}
