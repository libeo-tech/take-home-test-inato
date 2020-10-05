import { BenefitUpdater } from "./BenefitUpdater";

export class MagicPillBenefitUpdater extends BenefitUpdater {
  updateBenefitValue(benefit, expiresIn) {
    return { benefit, expiresIn };
  }
}
