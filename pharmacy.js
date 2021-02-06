export const MAX_BENEFIT = 50;

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
    for (const drug of this.drugs) {
      const newBenefit = drug.benefit + Pharmacy.getDailyBenefitChange(drug);

      if (newBenefit > MAX_BENEFIT) {
        drug.benefit = MAX_BENEFIT;
      } else if (newBenefit < 0) {
        drug.benefit = 0;
      } else {
        drug.benefit = newBenefit;
      }

      drug.expiresIn += Pharmacy.getDailyExpiryChange(drug);
    }

    return this.drugs;
  }

  static getDailyBenefitChange(drug) {
    switch (drug.name) {
      case "Herbal Tea":
        if (drug.expiresIn > 0) {
          return 1;
        }
        return 2;
      case "Magic Pill":
        return 0;
      case "Fervex":
        if (drug.expiresIn > 10) {
          return 1;
        }
        if (drug.expiresIn > 5) {
          return 2;
        }
        if (drug.expiresIn > 0) {
          return 3;
        }
        return -drug.benefit;
      case "Dafalgan":
        if (drug.expiresIn > 0) {
          return -2;
        }
        return -4;
      default:
        if (drug.expiresIn > 0) {
          return -1;
        }
        return -2;
    }
  }

  static getDailyExpiryChange(drug) {
    switch (drug.name) {
      case "Magic Pill":
        return 0;
      default:
        return -1;
    }
  }
}
