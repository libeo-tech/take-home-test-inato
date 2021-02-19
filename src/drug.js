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
    if (this.benefit > 0) {
      this.benefit--;
      if (this.expiresIn <= 0 && this.benefit > 0) {
        this.benefit--;
      }
    }
  }

  benefitCanItBeDecreased() {
    return true;
  }
}
