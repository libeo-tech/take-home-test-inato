import { MAX_BENEFIT, MIN_BENEFIT } from "../pharmacy/constants";

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    if (benefit > MAX_BENEFIT) {
      this.benefit = MAX_BENEFIT;
      return;
    }
    if (benefit < MIN_BENEFIT) {
      this.benefit = MIN_BENEFIT;
      return;
    }
    this.benefit = benefit;
  }
}
