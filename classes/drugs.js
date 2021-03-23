export class Drug {
    constructor(name, expiresIn, benefit) {
      this.name = name;
      this.expiresIn = expiresIn;
      this.benefit = benefit;
    }
    decreaseExpiresIn() {
      this.expiresIn -= 1;
    }
    increaseBenefit(value) {
      this.benefit += value;
      if (this.benefit > 50) {
        this.benefit = 50;
      }
    }
    decreaseBenefit(value) {
      this.benefit -= value;
      if (this.benefit < 0) {
        this.benefit = 0;
      }
    }
  }