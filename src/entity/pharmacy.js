export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    return this.drugs.map(drug => {
      if (drug.name != "Magic Pill") {
        switch (drug.name) {
          case "Fervex":
            drug.benefit = this.benefitValue(this.fervexBenefitUpdate(drug));
            break;
          case "Herbal Tea":
            drug.benefit = this.benefitValue(this.herbalTeaBenefitUpdate(drug));
            break;
          case "Dafalgan":
            drug.benefit = this.benefitValue(this.dafalganBenefitUpdate(drug));
            break;
          default:
            drug.benefit = this.benefitValue(this.updateNormalBenefit(drug));
            break;
        }

        drug.expiresIn = drug.expiresIn - 1;
      }

      return drug;
    });
  }

  updateNormalBenefit(drug) {
    drug.benefit = drug.expiresIn <= 0 ? drug.benefit - 2 : drug.benefit - 1;
    return drug;
  }

  benefitValue(drug) {
    if (drug.benefit < 0) {
      return 0;
    } else if (drug.benefit > 50) {
      return 50;
    } else {
      return drug.benefit;
    }
  }

  herbalTeaBenefitUpdate(drug) {
    drug.benefit = drug.expiresIn <= 0 ? drug.benefit + 2 : drug.benefit + 1;
    return drug;
  }

  fervexBenefitUpdate(drug) {
    if (drug.expiresIn > 10) {
      drug.benefit = drug.benefit + 1;
    } else if (drug.expiresIn <= 10 && drug.expiresIn > 5) {
      drug.benefit = drug.benefit + 2;
    } else if (drug.expiresIn <= 5 && drug.expiresIn > 0) {
      drug.benefit = drug.benefit + 3;
    } else if (drug.expiresIn <= 0) {
      drug.benefit = 0;
    }

    return drug;
  }

  dafalganBenefitUpdate(drug) {
    drug.benefit = drug.expiresIn <= 0 ? drug.benefit - 4 : drug.benefit - 2;
    return drug;
  }
}