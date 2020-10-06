import { BenefitUpdater } from "./BenefitUpdater";
import { MAX_BENEFIT_VALUE } from "../Constants";

export class HerbalTeaBenefitUpdate extends BenefitUpdater {
  updateBenefitValue(benefit, expiresIn) {
    if (benefit < MAX_BENEFIT_VALUE) benefit++;
    expiresIn--;
    if (expiresIn < 0 && benefit < MAX_BENEFIT_VALUE) benefit++;

    return { benefit, expiresIn };
  }
}
