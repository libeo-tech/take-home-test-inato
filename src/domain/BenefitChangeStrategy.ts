import { DrugState } from "./DrugState";

export interface BenefitChangeStrategy {
  getChange(state: DrugState): number;
}
