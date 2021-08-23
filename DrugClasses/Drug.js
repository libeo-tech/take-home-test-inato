export class Drug {
    constructor(name, expiresIn, benefit) {
      this.name = name;
      this.expiresIn = expiresIn;
      if (benefit <= 50 && benefit >= 0) this.benefit = benefit;
      else {
        if (benefit > 50) throw new Error(" Benefit > 50 !");
        if (benefit < 0) throw new Error(" Benefit negative ! ");
      }
    }
  
    updateBenefit() {
      if (this.expiresIn < 0) {
        this.benefit = this.benefit - 2;
      } else this.benefit = this.benefit - 1;
    }
    updateExpiresIn() {
      this.expiresIn = this.expiresIn - 1;
    }
  }