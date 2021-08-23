import { Drug } from "./Drug";

export class Dafalgan extends Drug {
  constructor(expiresIn, benefit) {
    super("Dafalgan", expiresIn, benefit);
  }
  updateBenefit() {
    if (this.expiresIn < 0) {
      if (this.benefit - 4 >= 0) {
        this.benefit = this.benefit - 4;
      } else if (this.benefit - 3 === 0) {
        this.benefit = this.benefit - 3;
      } else if (this.benefit - 2 === 0) {
        this.benefit = this.benefit - 2;
      } else if (this.benefit - 1 === 0) {
        this.benefit = this.benefit - 1;
      }
    } else if (this.expiresIn >= 0) {
      if (this.benefit - 2 >= 0) this.benefit = this.benefit - 2;
      else if (this.benefit - 1 === 0) this.benefit = this.benefit - 1;
    }
  }
}
