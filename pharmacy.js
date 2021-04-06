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
  checkBenefitLimits(drug) {
    if (drug.benefit < 0) {
      drug.benefit = 0;
    } else if (drug.benefit > 50) {
      drug.benefit = 50;
    }
    return drug.benefit;
  }

  updateDafalgan(drug) {
    if (drug.expiresIn < 0) {
      drug.benefit -= 4;
    } else {
      drug.benefit -= 2;
    }
    return drug;
  }

  updateFervex(drug) {
    if (drug.expiresIn > 10) {
      drug.benefit += 1;
    } else if (drug.expiresIn > 5 && drug.expiresIn < 11) {
      drug.benefit += 2;
    } else if (drug.expiresIn > 0 && drug.expiresIn < 6) {
      drug.benefit += 3;
    } else if (drug.expiresIn <= 0) {
      drug.benefit = 0;
    }
    return drug;
  }

  updateHerbalTea(drug) {
    if (drug.expiresIn <= 0) {
      drug.benefit += 2;
    } else {
      drug.benefit += 1;
    }
    return drug;
  }

  updateNormalDrug(drug) {
    if (drug.expiresIn <= 0) {
      drug.benefit -= 2;
    } else {
      drug.benefit -= 1;
    }
    return drug;
  }

  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      switch (this.drugs[i].name) {
        case 'Dafalgan':
          this.drugs[i].benefit = this.checkBenefitLimits(
            this.updateDafalgan(this.drugs[i])
          );
          break;

        case 'Fervex':
          this.drugs[i].benefit = this.checkBenefitLimits(
            this.updateFervex(this.drugs[i])
          );
          break;

        case 'Herbal Tea':
          this.drugs[i].benefit = this.checkBenefitLimits(
            this.updateHerbalTea(this.drugs[i])
          );
          break;

        case 'Magic Pill':
          continue;

        default:
          this.drugs[i].benefit = this.checkBenefitLimits(
            this.updateNormalDrug(this.drugs[i])
          );
          break;
      }
      this.drugs[i].expiresIn -= 1;
    }
    return this.drugs;
  }
}
