import { BenefitUpdater } from "./BenefitUpdater";

export class FervexBenefitUpdater extends BenefitUpdater {
  updateBenefitValue(benefit, expiresIn) {
    return "This is fervex Benefit updater";
  }
}
