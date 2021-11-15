export default class Drug {
    constructor(name, expiresIn, benefit) {
      this.name = name;
      this.expiresIn = expiresIn;
      this.benefit = benefit;
    };

    updateBenefit() {
      if (this.expiresIn <= 0) {
        this.benefit = this.benefit - 2;
      } else {
        this.benefit = this.benefit - 1;
      }

      if (this.benefit < 0) {
        this.benefit = 0;
      }

      if (this.benefit > 50) {
        this.benefit = 50;
      }
    }

    updateExpiresIn() {
      this.expiresIn--;
    }

    update() {
      this.updateBenefit();
      this.updateExpiresIn();

      return this;
    }
}
