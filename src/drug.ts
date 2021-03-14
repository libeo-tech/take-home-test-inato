export class Drug {
  name: string;
  expiresIn: number;
  benefit: number;

  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue() {
    const decreaseValue = this.expiresIn > 0 ? 1 : 2;
    this.benefit = Math.max(this.benefit - decreaseValue, 0);
    this.expiresIn--;
  }
}
