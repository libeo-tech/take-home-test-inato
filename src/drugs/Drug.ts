const BEFORE_EXPIRATION_DECAY = 1;
const AFTER_EXPIRATION_DECAY = 2;

export class Drug {
  name: string;
  expiresIn: any;
  benefit: any;

  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefit(): void {
    this.expiresIn--;
    if (this.expiresIn < 0) {
      this.decreaseBenefit(AFTER_EXPIRATION_DECAY);
    } else {
      this.decreaseBenefit(BEFORE_EXPIRATION_DECAY);
    }
  }

  decreaseBenefit(amount = 1) {
    this.benefit -= amount;
    if (this.benefit < 0) this.benefit = 0;
  }

  increaseBenefit(amount = 1) {
    this.benefit += amount;
    if (this.benefit > 50) this.benefit = 50;
  }
}
