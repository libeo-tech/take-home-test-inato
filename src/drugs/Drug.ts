abstract class Drug {
  name: string;

  expiresIn: number;

  benefit: number;

  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  // The Benefit of an item is never negative nor more than 50.
  updateBenefit(): void {
    if (this.benefit < 0) this.benefit = 0;

    if (this.benefit > 50) this.benefit = 50;
  }

  // Too specific to many Drugs to be written here. Would be overriden too many time.
  abstract updateExpiration(): void;
}

export { Drug };
