export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  // Define benefits limit value

  static get MAX_BENEFITS() {
    return 50;
  }
  static get MIN_BENEFITS() {
    return 0;
  }

  // Benefits update functions

  increaseBenefit = (value) => {
    this.benefit += value;
    if (this.benefit > Drug.MAX_BENEFITS) this.benefit = Drug.MAX_BENEFITS;
  };
  decreaseBenefit = (value) => {
    this.benefit -= value;
    if (this.benefit < Drug.MIN_BENEFITS) this.benefit = Drug.MIN_BENEFITS;
  };
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue = () => {
    this.drugs
      .filter((drug) => drug.name != 'Magic Pill')
      .forEach((drug) => {
        switch (drug.name) {
          case 'Herbal Tea':
            drug.expiresIn <= 0
              ? drug.increaseBenefit(2)
              : drug.increaseBenefit(1);
            break;
          case 'Fervex':
            if (drug.expiresIn <= 0) {
              drug.benefit = 0;
            } else if (drug.expiresIn <= 5) {
              drug.increaseBenefit(3);
            } else if (drug.expiresIn <= 10) {
              drug.increaseBenefit(2);
            }
            break;
          default:
            drug.decreaseBenefit(drug.expiresIn <= 0 ? 2 : 1);
        }
        drug.expiresIn -= 1;
      });

    return this.drugs;
  };
}
