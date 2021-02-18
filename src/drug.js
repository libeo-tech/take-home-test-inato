export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  decreaseExpiration() {
    this.expiresIn--;
  }
}

export const DRUGS = {
  HERBAL_TEA: 'Herbal Tea',
  FERVEX: "Fervex",
  MAGIC_PILL: "Magic Pill"
};
