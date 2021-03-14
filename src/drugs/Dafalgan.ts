import { Drug } from "./drug";

export class Dafalgan extends Drug {
  updateBenefitValue() {
    super.updateBenefitValue();
    super.updateBenefitValue();
    this.expiresIn++;
  }
}
