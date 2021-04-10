export class Drug {
  name: string;
  expiresIn: number;
  benefit: number;
  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  drugs: Drug[];
  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (const drug of this.drugs) {
      switch (drug.name) {
        case "Herbal Tea":
          drug.benefit =
            drug.expiresIn > 0 ? drug.benefit + 1 : drug.benefit + 2;
          break;
        case "Dafalgan":
          drug.benefit =
            drug.expiresIn > 0 ? drug.benefit - 2 : drug.benefit - 4;
          break;
        case "Magic Pill":
          break;
        case "Fervex":
          if (drug.expiresIn <= 0) {
            drug.benefit = 0;
            break;
          }
          if (drug.expiresIn <= 5) {
            drug.benefit = drug.benefit + 3;
            break;
          }
          if (drug.expiresIn <= 10) {
            drug.benefit = drug.benefit + 2;
            break;
          }
          drug.benefit = drug.benefit + 1;
          break;
        default:
          drug.benefit =
            drug.expiresIn > 0 ? drug.benefit - 1 : drug.benefit - 2;
          break;
      }
      if (drug.benefit > 50) drug.benefit = 50;
      if (drug.benefit < 0) drug.benefit = 0;
      if (drug.name != "Magic Pill") {
        drug.expiresIn = drug.expiresIn - 1;
      }
    }

    return this.drugs;
  }
}
