import { DrugState } from "../DrugState";
import { BenefitChangeStrategy } from "../BenefitChangeStrategy";

export class DecreaseBenefitStrategy implements BenefitChangeStrategy {
  getChange(state: DrugState): number {
    return state.getExpiresIn() > 0 ? -1 : -2;
  }
}
