export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {

  BENEFIT_MAX = 50;

  HERBAL_TEA = "Herbal Tea";

  FERVEX = "Fervex";

  MAGIC_PILL = "Magic Pill";

  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      switch (this.drugs[i].name) {
        case this.HERBAL_TEA:
          this.updateHerbalTea(this.drugs[i]);
          break;
        case this.MAGIC_PILL:
          //do nothing
            break;
        default:
          this.updateNormalDrug(this.drugs[i]);
      }

    }

    return this.drugs;
  }

  updateHerbalTea(drug) {
    drug.expiresIn = drug.expiresIn - 1;
    if (drug.expiresIn >= 0) {
      drug.benefit = this.increaseBenefit(drug.benefit, 1);
    } else { 
      drug.benefit = this.increaseBenefit(drug.benefit, 2);
    }
  }

  updateNormalDrug(drug) {
    drug.expiresIn = drug.expiresIn - 1;
    if (drug.expiresIn >= 0) {
      drug.benefit = this.decreaseBenefit(drug.benefit, 1);
    } else { 
      drug.benefit = this.decreaseBenefit(drug.benefit, 2);
    }
  }

  decreaseBenefit(benefit, x) { 
    if (benefit > x) {
      benefit = benefit - x;
    } else { 
      benefit = 0;
    }
    return benefit;
  }

  increaseBenefit(benefit, x, max = this.BENEFIT_MAX) { 
    if (benefit <= max - x) {
      benefit = benefit + x;
    } else { 
      benefit = max;
    }
    return benefit;
  }
}
