import { MAX_BENEFIT } from "../pharmacy/constants";

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    if (benefit > 50) {
      this.benefit = MAX_BENEFIT;
      return;
    }
    this.benefit = benefit;
  }
}
