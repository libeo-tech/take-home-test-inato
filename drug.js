export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  /**
   * For all drug except MagicPill, if benefit < 50, add 1 to benefit
   */
  addBenefit() {
    if (this.benefit < 50) {
      this.benefit++;
    }
  }

  /**
   * For all drug except MagicPill, remove 1 to ExpiresIn
   */
  decreaseExpiresIn() {
      this.expiresIn--;
  }

  /**
   * For all drug except MagicPill, if benefit > 0, remove 1 to benefit
   */
  decreaseBenefit() {
    if (this.benefit > 0) {
      this.benefit--;
    }
  }
}
  