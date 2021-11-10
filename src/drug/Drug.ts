// https://stackoverflow.com/questions/63961803/eslint-says-all-enums-in-typescript-app-are-already-declared-in-the-upper-scope
// eslint-disable-next-line no-shadow
export enum DrugType {
  DAFALGAN = 'Dafalgan',
  DOLIPRANE = 'Doliprane',
  FERVEX = 'Fervex',
  HERBAL_TEA = 'Herbal Tea',
  MAGIC_PILL = 'Magic Pill'
}

abstract class Drug {
  readonly name: string;

  expiresIn: number;

  benefit: number;

  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefit(): void {
    if (this.benefit < 0) {
      this.benefit = 0;
    }

    if (this.benefit > 50) {
      this.benefit = 50;
    }
  }

  abstract updateExpiration(): void;
}

export { Drug };
