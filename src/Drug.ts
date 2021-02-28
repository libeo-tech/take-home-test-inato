import { MIN_BENEFIT, MAX_BENEFIT, DRUGS_NAME } from './Constant';

export default class Drug {
  private _name: string;
  private _expiresIn: number;
  private _benefit: number;


  constructor(name: string, expiresIn: number, benefit: number) {
    this._name = name;
    this._expiresIn = expiresIn;
    this._benefit = benefit;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get expiresIn(): number {
    return this._expiresIn;
  }

  set expiresIn(expiresIn: number) {
    this._expiresIn = expiresIn;
  }

  get benefit(): number {
    return this._benefit;
  }

  set benefit(benefit: number) {
    this._benefit = benefit;
  }

  toString() {
    return {
      name: this.name,
      expiresIn: this.expiresIn,
      benefit: this.benefit,
    };
  }


  updateBenefit(benefit: number) {
    this.benefit += benefit;
    if (this.benefit > MAX_BENEFIT) {
      // The Benefit of an item is never more than 50
      this.benefit = MAX_BENEFIT;
    } else if (this.benefit < MIN_BENEFIT) {
      // The Benefit of an item is never negative
      this.benefit = MIN_BENEFIT;
    }
  }

  isMagicPills() {
    return this.name === DRUGS_NAME.MAGIG_PILL;
  }


  processBenefit() {
    switch (this.name) {
      case DRUGS_NAME.MAGIG_PILL:
        return this.benefit; // "Magic Pill" never expires nor decreases in Benefit
      case DRUGS_NAME.FERVEX:
        if (this.expiresIn <= 0)
          return this.benefit = 0;
        else if (this.expiresIn <= 5)
          return this.updateBenefit(3);
        else if (this.expiresIn <= 10)
          return this.updateBenefit(2);
        else
          return this.updateBenefit(1);
      case DRUGS_NAME.HERBAL_TEA:
        return this.expiresIn > 0
          ? this.updateBenefit(1)
          : this.updateBenefit(2);
      case DRUGS_NAME.DAFALGAN:
        // "Dafalgan" degrades in Benefit twice as fast as normal drugs
        return this.expiresIn > 0
          ? this.updateBenefit(-2)
          : this.updateBenefit(-4);
      default:
        // Once the expiration date has passed, Benefit degrades twice as fast.
        return this.expiresIn > 0
          ? this.updateBenefit(-1)
          : this.updateBenefit(-2);
    }
  }

  processExpiresIn() {
    if (!this.isMagicPills()) {
      this.expiresIn -= 1;
    }
  }
}
