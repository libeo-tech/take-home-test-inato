import { DrugName } from "./DrugName";

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
  nextDay() {
    switch (this.name) {
      case DrugName.MAGIC_PILL:
        return;
      case DrugName.HERBAL_TEA:
        this.benefit += this.expiresIn > 0 ? 1 : 2;
        break;
      case DrugName.FERVEX:
        if (this.expiresIn <= 0) {
          this.benefit = 0;
        } else if (this.expiresIn < 6) {
          this.benefit += 3;
        } else if (this.expiresIn < 11) {
          this.benefit += 2;
        } else {
          this.benefit++;
        }
        break;
      case DrugName.DAFALGAN:
        this.benefit -= this.expiresIn > 0 ? 2 : 4;
        break;
      default:
        this.benefit -= this.expiresIn > 0 ? 1 : 2;
        break;
    }
    this.expiresIn--;
  }
}
