const { clamp } = require("./utils");

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

  static getNewExpiresIn(drug) {
    const defaultExpiration = 1;
    switch (drug.name) {
      case "Magic Pill": {
        return drug.expiresIn;
      }
      default: {
        return drug.expiresIn - defaultExpiration;
      }
    }
  }

  static getNewBenefit(drug) {
    const computeNewBenefit = () => {
      const defaultDegradation = 1;
      switch (drug.name) {
        case "Magic Pill": {
          return drug.benefit;
        }
        case "Herbal Tea": {
          return drug.expiresIn <= 0
            ? drug.benefit + 2 * defaultDegradation
            : drug.benefit + defaultDegradation;
        }
        case "Fervex": {
          if (drug.expiresIn <= 0) {
            return 0;
          } else if (drug.expiresIn <= 5) {
            return drug.benefit + 3 * defaultDegradation;
          } else if (drug.expiresIn <= 10) {
            return drug.benefit + 2 * defaultDegradation;
          } else {
            return drug.benefit + defaultDegradation;
          }
        }
        case "Dafalgan": {
          return drug.expiresIn <= 0
            ? drug.benefit - 2 * (2 * defaultDegradation)
            : drug.benefit - 2 * defaultDegradation;
        }
        default: {
          return drug.expiresIn <= 0
            ? drug.benefit - 2 * defaultDegradation
            : drug.benefit - defaultDegradation;
        }
      }
    };

    const newBenefit = computeNewBenefit();
    return clamp(newBenefit, 0, 50);
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => {
      drug.benefit = Pharmacy.getNewBenefit(drug);
      drug.expiresIn = Pharmacy.getNewExpiresIn(drug);
    });
    return this.drugs;
  }
}
