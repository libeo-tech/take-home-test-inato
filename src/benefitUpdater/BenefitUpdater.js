import { MIN_BENEFIT_VALUE } from '../Constants';

export class BenefitUpdater {
  updateBenefitValue(benefit, expiresIn) {
    if (benefit > MIN_BENEFIT_VALUE) benefit--;
    expiresIn--;
    if (expiresIn < 0 && benefit > MIN_BENEFIT_VALUE) benefit--;

    return { benefit, expiresIn };
  }
}
