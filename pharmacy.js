export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  handleHerbalTea(drug) {
    this.increaseBenefit(drug);
    this.decreaseExpires(drug);

    if (drug.expiresIn < 0 && drug.benefit < 50) {
      drug.benefit = drug.benefit + 1;
    }
  }

  handleFervex(drug) {
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

  handleDafalgan(drug) {
    this.decreaseExpires(drug);

    if (drug.expiresIn < 0 && drug.benefit >= 2) {
      drug.benefit = drug.benefit - 2;
    }
  }

  increaseBenefit(drug) {
    if (drug.benefit < 50) {
      drug.benefit += 1;
    }
  }

  decreaseExpires(drug) {
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
