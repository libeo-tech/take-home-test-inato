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

  treatHerbalTea(drug) {
    if (drug.expiresIn > 0) {
      drug.benefit = drug.benefit <= 49 ? drug.benefit + 1 : 50;
    } else {
      drug.benefit = drug.benefit <= 48 ? drug.benefit + 2 : 50;
    }
    drug.expiresIn--;
  }

  treatMagicPill(drug) {}

  treatFervex(drug) {
    if (drug.expiresIn >= 11) {
      drug.benefit = drug.benefit <= 49 ? drug.benefit + 1 : 50;
    } else if (drug.expiresIn >= 6 && drug.expiresIn <= 10) {
      drug.benefit = drug.benefit <= 48 ? drug.benefit + 2 : 50;
    } else if (drug.expiresIn >= 1 && drug.expiresIn <= 5) {
      drug.benefit = drug.benefit <= 47 ? drug.benefit + 3 : 50;
    } else {
      drug.benefit = 0;
    }
    drug.expiresIn--;
  }

  treatDafalgan(drug) {
    if (drug.expiresIn > 0) {
      drug.benefit = drug.benefit >= 2 ? drug.benefit - 2 : 0;
    } else {
      drug.benefit = drug.benefit >= 4 ? drug.benefit - 4 : 0;
    }
    drug.expiresIn--;
  }

  treatDefault(drug) {
    if (drug.expiresIn > 0) {
      drug.benefit = drug.benefit >= 1 ? drug.benefit - 1 : 0;
    } else {
      drug.benefit = drug.benefit >= 2 ? drug.benefit - 2 : 0;
    }
    drug.expiresIn--;
  }

  updateBenefitValue() {
    for (let drug of this.drugs) {
      switch (drug.name) {
        case 'Herbal Tea':
          this.treatHerbalTea(drug);
          break;
        case 'Magic Pill':
          this.treatMagicPill(drug);
          break;
        case 'Fervex':
          this.treatFervex(drug);
          break;
        case 'Dafalgan':
          this.treatDafalgan(drug);
          break;
        default:
          this.treatDefault(drug);
      }
    }

    return this.drugs;
  }
}
