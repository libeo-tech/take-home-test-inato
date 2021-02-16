const MAX_BENEFIT = 50;
const MIN_BENEFIT = 0;

export default class Drug {
  _name: string;
  _expiresIn: number;
  _benefit: number;

  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  toString() {
    return {
      name: this.name,
      expiresIn: this.expiresIn,
      benefit: this.benefit,
    };
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
    if (benefit > MAX_BENEFIT) {
      this._benefit = MAX_BENEFIT;
    } else if (benefit < MIN_BENEFIT) {
      this._benefit = MIN_BENEFIT;
    } else {
      this._benefit = benefit;
    }
  }

  get isMagicPill(): boolean {
    return this.name === 'Magic Pill';
  }

  get isDafalgan(): boolean {
    return this.name === 'Dafalgan';
  }

  get isFervex(): boolean {
    return this.name === 'Fervex';
  }

  get isHerbalTea(): boolean {
    return this.name === 'Herbal Tea';
  }

  updateBenefit() {
    if (this.isHerbalTea) {
      this.benefit += this.expiresIn > 0 ? 1 : 2;
    } else if (this.isFervex) {
      if (this.expiresIn === 0) {
        this.benefit = 0;
      } else if (this.expiresIn <= 5) {
        this.benefit += 3;
      } else if (this.expiresIn <= 10) {
        this.benefit += 2;
      } else {
        this.benefit += 1;
      }
    } else if (this.isDafalgan) {
      this.benefit -= this.expiresIn > 0 ? 2 : 4;
    } else if (!this.isMagicPill) {
      this.benefit -= this.expiresIn > 0 ? 1 : 2;
    }
  }

  updateExpiresIn() {
    if (!this.isMagicPill) {
      this.expiresIn -= 1;
    }
  }

  tick() {
    this.updateBenefit();
    this.updateExpiresIn();
  }
}
