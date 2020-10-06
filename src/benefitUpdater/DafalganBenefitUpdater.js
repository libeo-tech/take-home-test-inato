import { BenefitUpdater } from './BenefitUpdater';
import { MIN_BENEFIT_VALUE } from '../Constants';

export class DafalganBenefitUpdater extends BenefitUpdater {
  updateBenefitValue(benefit, expiresIn) {
    if (benefit > MIN_BENEFIT_VALUE) benefit--;
    if (benefit > MIN_BENEFIT_VALUE) benefit--;

    expiresIn--;

    if(expiresIn < 0){
      if(benefit > MIN_BENEFIT_VALUE) benefit--;
      if(benefit > MIN_BENEFIT_VALUE) benefit--;
    }

    return {benefit, expiresIn};
  }
  }