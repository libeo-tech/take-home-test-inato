import { Drug } from "../Drug";
import { DrugInterface } from "./DrugInterface";
import { DrugInstance } from "./DrugInstance";

export class CommonDrug extends DrugInstance implements DrugInterface {
  constructor(drug: Drug) {
    super(drug);
  }

  updateDegradation(): void {
    let newBenefit;
    const expiresIn = this.getExpiresIn();
    const benefit = this.getBenefit();

    if (expiresIn > 0) {
      newBenefit = benefit - 1;
    } else {
      newBenefit = benefit - 2;
    }

    newBenefit > 0 ? this.setBenefit(newBenefit) : this.setBenefit(0);
  }

  updateExpiration(): void {
    this.setExpiresIn(this.getExpiresIn() - 1);
  }
}
