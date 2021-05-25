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
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  handleHerbalTea(drug: Drug) {
    this.increaseBenefit(drug);
    this.decreaseExpires(drug);

    if (drug.expiresIn < 0 && drug.benefit < 50) {
      drug.benefit = drug.benefit + 1;
    }
  }

  handleFervex(drug: Drug) {
    this.increaseBenefit(drug);

    if (drug.expiresIn < 11) {
      this.increaseBenefit(drug);
    }
    if (drug.expiresIn < 6) {
      this.increaseBenefit(drug);
    }

    this.decreaseExpires(drug);

    if (drug.expiresIn < 0) {
      drug.benefit = 0;
    }
  }

  handleDafalgan(drug: Drug) {
    this.decreaseExpires(drug);

    if (drug.expiresIn < 0 && drug.benefit >= 2) {
      drug.benefit = drug.benefit - 2;
    }
  }

  increaseBenefit(drug: Drug) {
    if (drug.benefit < 50) {
      drug.benefit += 1;
    }
  }

  decreaseExpires(drug: Drug) {
    drug.expiresIn -= 1;
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => {
      switch (drug.name) {
        case "Herbal Tea":
          this.handleHerbalTea(drug);
          break;
        case "Fervex":
          this.handleFervex(drug);
          break;
        case "Magic Pill":
          break;
        case "Dafalgan":
          this.handleDafalgan(drug);
          break;
        default:
          throw Error("Unknown drug " + drug.name);
      }
    });

    return this.drugs;
  }
}
