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
    this.drugs.map(drug => {
      // decrement days
      drug.expiresIn -= 1;

      // normal case
      let increment = -1;
      if (drug.expiresIn < 0) {
        increment = 2 * increment;
      }
      drug.benefit += increment;
      drug.benefit = drug.benefit >= 0 ? drug.benefit : 0;

      return drug;
    });

    return this.drugs;
  }
}
