import {
  defaultUpdateBenefit,
  herbalTeaUpdateBenefit,
  magicPillUpdateBenefit,
  fervexUpdateBenefit,
  dafalganUpdateBenefit
} from "./benefits";

const drugsUpdateBenefitMapping = {
  "Herbal Tea": herbalTeaUpdateBenefit,
  "Magic Pill": magicPillUpdateBenefit,
  Fervex: fervexUpdateBenefit,
  Dafalgan: dafalganUpdateBenefit
};

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefit() {
    const updateStrategy =
      drugsUpdateBenefitMapping[this.name] || defaultUpdateBenefit;

    const { benefit, expiresIn } = updateStrategy({
      benefit: this.benefit,
      expiresIn: this.expiresIn
    });

    return new Drug(this.name, expiresIn, benefit);
  }

  log() {
    return {
      name: this.name,
      expiresIn: this.expiresIn,
      benefit: this.benefit
    };
  }
}
