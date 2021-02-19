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
        break;
      case DrugName.HERBAL_TEA:
        if (this.expiresIn <= 0) {
          this.benefit++;
        }
        this.benefit++;
        this.expiresIn--;
        break;
      case DrugName.FERVEX:
        if (this.expiresIn <= 0) {
          this.benefit = 0;
        } else {
          if (this.expiresIn < 11) {
            this.benefit++;
          }
          if (this.expiresIn < 6) {
            this.benefit++;
          }
          this.benefit++;
        }
        this.expiresIn--;
        break;
      case DrugName.DAFALGAN:
        if (this.expiresIn <= 0) {
          this.benefit -= 2;
        }
        this.benefit -= 2;
        this.expiresIn--;
        break;
      default:
        if (this.expiresIn <= 0) {
          this.benefit--;
        }
        this.benefit--;
        this.expiresIn--;
        break;
    }
  }
}
