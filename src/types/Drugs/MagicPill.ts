import { Drug } from "../Drug";
import { DrugInterface } from "./DrugInterface";
import { DrugInstance } from "./DrugInstance";

export class MagicPill extends DrugInstance implements DrugInterface {
  constructor(drug: Drug) {
    super(drug);
  }

  updateDegradation(): number {
    return this.getBenefit();
  }

  updateExpiration(): void {
    // magic pill do not expire
  }
}
