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

  updateBenefit(drug) {
    let benefit;
    switch (drug.name) {
      case "Herbal Tea": {
        if (drug.expiresIn > 0) {
          benefit = drug.benefit + 1;
        } else {
          benefit = drug.benefit + 2;
        }
        break;
      }

      case "Magic Pill": {
        benefit = drug.benefit;
        break;
      }

      case "Fervex": {
        if (drug.expiresIn <= 0) {
          benefit = 0;
        } else if (drug.expiresIn <= 5) {
          benefit = drug.benefit + 3;
        } else if (drug.expiresIn <= 10) {
          benefit = drug.benefit + 2;
        } else {
          benefit = drug.benefit + 1;
        }
        break;
      }

      case "Dafalgan": {
        if (drug.expiresIn > 0) {
          benefit = drug.benefit - 2;
        } else {
          benefit = drug.benefit - 4;
        }
        break;
      }

      default: {
        if (drug.expiresIn > 0) {
          benefit = drug.benefit - 1;
        } else {
          benefit = drug.benefit - 2;
        }
      }
    }

    if (benefit < 0) return 0;
    if (benefit > 50) return 50;
    return benefit;
  }

  updateBenefitValue() {
    this.drugs = this.drugs.map(drug => ({
      ...drug,
      benefit: this.updateBenefit(drug),
      expiresIn:
        drug.name === "Magic Pill" ? drug.expiresIn : drug.expiresIn - 1
    }));

    return this.drugs;
  }
}
