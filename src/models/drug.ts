export default class Drug {
  name: string;
  expiresIn: number;
  benefit: number;

  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}
