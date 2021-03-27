import { DrugState } from "../DrugState";
import { BenefitChangeStrategy } from "../BenefitChangeStrategy";

export class DecreaseBenefitStrategy implements BenefitChangeStrategy {
  constructor(private decreaseFactor: number = 1) {}
  getChange(state: DrugState): number {
    const change = state.getExpiresIn() > 0 ? -1 : -2;
    return change * this.decreaseFactor;
  }
}
