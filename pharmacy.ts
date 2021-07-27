import { Drug, drugNames } from "./drug";

const MAX_BENEFIT = 50;

function getBenefitIncrease(
  currentBenefit: number,
  potentialIncrease: number
): number {
  return currentBenefit <= MAX_BENEFIT - potentialIncrease
    ? potentialIncrease
    : MAX_BENEFIT - currentBenefit;
}

export class Pharmacy {
  drugs: Drug[];

  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach((drug, i) => {
      let { expiresIn, benefit } = drug;

      switch (drug.name) {
        case drugNames.herbalTea:
          if (expiresIn <= 0) {
            this.drugs[i].benefit += getBenefitIncrease(benefit, 2);
          } else {
            this.drugs[i].benefit += getBenefitIncrease(benefit, 1);
          }

          this.drugs[i].expiresIn -= 1;

          break;

        case drugNames.magicPill:
          break;

        case drugNames.fervex:
          if (expiresIn > 10) {
            this.drugs[i].benefit += getBenefitIncrease(benefit, 1);
          } else if (expiresIn > 5) {
            this.drugs[i].benefit += getBenefitIncrease(benefit, 2);
          } else if (expiresIn > 0) {
            this.drugs[i].benefit += getBenefitIncrease(benefit, 3);
          } else {
            this.drugs[i].benefit = 0;
          }

          this.drugs[i].expiresIn -= 1;
          break;

        case drugNames.dafalgan:
          if (expiresIn > 0) {
            this.drugs[i].benefit -= benefit >= 2 ? 2 : 0;
          } else {
            this.drugs[i].benefit -= benefit >= 4 ? 4 : 0;
          }

          this.drugs[i].expiresIn -= 1;
          break;

        default:
          if (expiresIn > 0) {
            this.drugs[i].benefit -= benefit >= 1 ? 1 : 0;
          } else {
            this.drugs[i].benefit -= benefit >= 2 ? 2 : 0;
          }
          this.drugs[i].expiresIn -= 1;
      }
    });

    return this.drugs;
  }
}
