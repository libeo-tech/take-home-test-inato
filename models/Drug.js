export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  get benefit() {
    return this._benefit;
  }
  set benefit(benefit) {
    if (benefit >= 0) {
      this._benefit = benefit > 50 ? 50 : benefit;
    } else {
      this._benefit = 0;
    }
  }
  toJSON() {
    return {
      name: this.name,
      expiresIn: this.expiresIn,
      benefit: this.benefit
    };
  }
}
