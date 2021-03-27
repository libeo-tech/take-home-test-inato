import { BenefitChangeStrategy } from "../BenefitChangeStrategy";

export class ConstantBenefitStrategy implements BenefitChangeStrategy {
  getChange(): number {
    return 0;
  }
}
