import { BenefitUpdater } from "./BenefitUpdater";

export class HerbalTeaBenefitUpdate extends BenefitUpdater {
  updateBenefitValue(benefit, expiresIn) {
    return "herbal tea benefit updater";
  }
}
