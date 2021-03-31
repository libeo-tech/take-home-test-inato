import { FERVEX, MAX_BENEFIT_VALUE } from "./constants";
import { Drug } from "./drug";

const getNewBenefitValue = ({ expiresIn, benefit }) => {
  if (expiresIn < 0) {
    return 0;
  }

  if (expiresIn < 5) {
    return benefit + 3;
  }

  if (expiresIn < 10) {
    return benefit + 2;
  }

  return benefit + 1;
};

export class Fervex extends Drug {
  constructor(expiresIn, benefit) {
    super(FERVEX, expiresIn, benefit);
  }

  updateDrugValues() {
    this.expiresIn--;

    const newBenefit = getNewBenefitValue({
      expiresIn: this.expiresIn,
      benefit: this.benefit
    });

    this.benefit = Math.min(MAX_BENEFIT_VALUE, newBenefit);
  }
}
