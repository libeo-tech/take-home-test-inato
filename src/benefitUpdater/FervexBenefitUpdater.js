import { BenefitUpdater } from "./BenefitUpdater";
import { MAX_BENEFIT_VALUE } from "../Constants";

export class FervexBenefitUpdater extends BenefitUpdater {
  updateBenefitValue(benefit, expiresIn) {
    if (benefit < MAX_BENEFIT_VALUE) benefit++;
    if(expiresIn <= 10 && benefit < MAX_BENEFIT_VALUE) benefit++;
    if(expiresIn <= 5 && benefit < MAX_BENEFIT_VALUE) benefit++;
    expiresIn--;
    if(expiresIn < 0) benefit = 0;

    return { benefit, expiresIn };
  }
}
