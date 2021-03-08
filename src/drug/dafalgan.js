import { RateDrug } from "./rate";

export class Dafalgan extends RateDrug {
  constructor(expiresIn, benefit) {
    super("Dafalgan", expiresIn, benefit, 2);
  }
}
