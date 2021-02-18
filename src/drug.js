export const DRUG_MAXIMUM_BENEFIT = 50;

export class Drug {

  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  decreaseExpiration() {
    this.expiresIn--;
  }

  increaseBenefit() {
    if (this.benefit < DRUG_MAXIMUM_BENEFIT)
      this.benefit++;
  }

  decreaseBenefit() {
    this.benefit--;
  }

  benefitCanItBeDecreased() {
    return this.benefit > 0;
  }
}

export const DRUGS = {
  HERBAL_TEA: 'Herbal Tea',
  FERVEX: "Fervex",
  MAGIC_PILL: "Magic Pill"
};
