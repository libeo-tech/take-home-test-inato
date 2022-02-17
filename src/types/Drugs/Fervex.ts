import { Drug } from "../Drug";
import { DrugInterface } from "./DrugInterface";
import { DrugInstance } from "./DrugInstance";

export class Fervex extends DrugInstance implements DrugInterface {
  constructor(drug: Drug) {
    super(drug);
  }

  updateDegradation(): void {
    const expiresIn = this.getExpiresIn();
    const benefit = this.getBenefit();

    if (expiresIn <= 0) {
      this.setBenefit(0);
    } else if (expiresIn <= 5) {
      this.setBenefit(benefit + 3);
    } else if (expiresIn <= 10) {
      this.setBenefit(benefit + 2);
    } else {
      this.setBenefit(benefit + 1);
    }
  }

  updateExpiration(): void {
    this.setExpiresIn(this.getExpiresIn() - 1);
  }
}
