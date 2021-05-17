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

  updateBenefitValue() {
    this.drugs.forEach(drug => {
      const drugName = drug.name;

      if (drugName == "Doliprane") {
        this.updateDoliprane(drug);
        return;
      }

      if (drugName == "Dafalgan") {
        this.updateDafalgan(drug);
        return;
      }

      const allButHerbalTeaOrFervex =
        drugName != "Herbal Tea" && drugName != "Fervex";

      if (allButHerbalTeaOrFervex) {
        if (this.isBenefitsAtLeastMoreThan0(drug.benefit)) {
          const allButMagicPills = drugName != "Magic Pill";
          if (allButMagicPills) {
            drug.benefit = this.getBeneficeMinusOne(drug.benefit);
          }
        }
      } else {
        if (this.isBenefitsLessThan50(drug.benefit)) {
          drug.benefit = this.getBenefitsPlusOne(drug.benefit);
          if (drugName == "Fervex") {
            if (drug.expiresIn < 11) {
              if (drug.benefit < 50) {
                drug.benefit = this.getBenefitsPlusOne(drug.benefit);
              }
            }
            if (drug.expiresIn < 6) {
              if (drug.benefit < 50) {
                drug.benefit = this.getBenefitsPlusOne(drug.benefit);
              }
            }
          }
        }
      }
      if (drugName != "Magic Pill") {
        drug.expiresIn = drug.expiresIn - 1;
      }
      if (drug.expiresIn < 0) {
        if (drugName != "Herbal Tea") {
          if (drugName != "Fervex") {
            if (this.isBenefitsAtLeastMoreThan0(drug.benefit)) {
              if (drugName != "Magic Pill") {
                drug.benefit = this.getBeneficeMinusOne(drug.benefit);
              }
            }
          } else {
            drug.benefit = drug.benefit - drug.benefit;
          }
        } else {
          if (this.isBenefitsLessThan50(drug.benefit)) {
            drug.benefit = this.getBenefitsPlusOne(drug.benefit);
          }
        }
      }

      return drug;
    });

    return this.drugs;
  }

  updateDafalgan(drug) {
    if (drug.benefit > 0) {
      drug.benefit = this.getBeneficeMinusOne(drug.benefit);
    }

    drug.expiresIn = drug.expiresIn - 2;

    if (drug.expiresIn < 0 && drug.benefit > 0) {
      drug.benefit = this.getBeneficeMinusOne(drug.benefit);
    }
  }

  updateDoliprane(drug) {
    if (drug.benefit > 0) {
      drug.benefit = this.getBeneficeMinusOne(drug.benefit);
    }

    drug.expiresIn = drug.expiresIn - 1;

    if (drug.expiresIn < 0 && drug.benefit > 0) {
      drug.benefit = this.getBeneficeMinusOne(drug.benefit);
    }
  }

  isBenefitsAtLeastMoreThan0(drugBenefits) {
    return drugBenefits > 0;
  }

  isBenefitsLessThan50(drugBenefits) {
    return drugBenefits < 50;
  }

  getBenefitsPlusOne(actualBenefit) {
    return actualBenefit + 1;
  }

  getBeneficeMinusOne(actualBenefit) {
    return actualBenefit - 1;
  }
}
