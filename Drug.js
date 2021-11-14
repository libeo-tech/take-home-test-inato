export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  updateBenefit() {
    switch (this.name) {
      case "Magic Pill":
        break;
      case "Herbal Tea":
        {
          let increase = this.expiresIn > 0 ? 1 : 2;
          this.benefit += increase;
        }
        break;
      case "Fervex":
        {
          if (this.expiresIn < 0) {
            this.benefit = 0;
          } else {
            if (this.expiresIn <= 5) {
              this.benefit += 3;
            } else if (this.expiresIn <= 10) {
              this.benefit += 2;
            } else {
              this.benefit += 1;
            }
          }
        }
        break;
      case "Dafalgan":
        {
          let decrease = this.expiresIn > 0 ? 2 : 4;
          this.benefit -= decrease;
        }
        break;
      default:
        {
          let decrease = this.expiresIn > 0 ? 1 : 2;
          this.benefit -= decrease;
        }
        break;
    }
    if (this.benefit < 0) {
      this.benefit = 0;
    }
    if (this.benefit > 50) {
      this.benefit = 50;
    }
  }
  updateExpiration() {
    this.expiresIn -= 1;
  }
}
