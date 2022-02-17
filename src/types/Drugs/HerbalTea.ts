import { Drug } from "../Drug";
import { DrugInterface } from "./DrugInterface";
import { DrugInstance } from "./DrugInstance";

export class HerbalTea extends DrugInstance implements DrugInterface {
  constructor(drug: Drug) {
    super(drug);
  }

  updateDegradation(): void {
    const benefit = this.getBenefit();

    if (this.getExpiresIn() > 0) {
      this.setBenefit(benefit + 1);
    } else {
      this.setBenefit(benefit + 2);
    }
  }

  updateExpiration(): void {
    this.setExpiresIn(this.getExpiresIn() - 1);
  }
}
