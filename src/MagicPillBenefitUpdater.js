import { BenefitUpdater } from "./benefitUpdater/BenefitUpdater";

export class MagicPillBenefitUpdater extends BenefitUpdater {
  updateBenefitValue(benefit, expiresIn) {
    return "this is the MAgic Pill Benefit updater";
  }
}
