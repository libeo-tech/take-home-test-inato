import { Drug } from "../Drug";
import { DrugInterface } from "./DrugInterface";
import { DrugInstance } from "./DrugInstance";

export class Dafalgan extends DrugInstance implements DrugInterface {
  constructor(drug: Drug) {
    super(drug);
  }

  updateDegradation(): void {
    this.setBenefit(this.getBenefit() - 2);
  }

  updateExpiration(): void {
    this.setExpiresIn(this.getExpiresIn() - 1);
  }
}
