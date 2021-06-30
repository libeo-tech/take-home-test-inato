export class Drug {
  name: string;
  expiresIn: number;
  benefit: number;

  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  subExpire(): void {
    this.expiresIn -= 1;
  }

  validateBenefit(): void {
    if (this.benefit > 50) {
      this.benefit = 50;
    }

    if (this.benefit < 0) {
      this.benefit = 0;
    }
  }

  getBenefit(): { name: string; expiresIn: number; benefit: number } {
    return {
      name: this.name,
      expiresIn: this.expiresIn,
      benefit: this.benefit,
    };
  }

  calculateBenefit(): void {
    let subOrAdd = -1;
    if (this.expiresIn < 0) {
      subOrAdd = -2;
    }
    this.benefit += subOrAdd;
  }
}
