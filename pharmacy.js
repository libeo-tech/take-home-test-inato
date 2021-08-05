export class Drug {
  constructor(name, expiresIn, benefit, aging = 1, expiration = 1) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.aging = aging;
    this.expiration = expiration;
  }

  age() {
    if (this.expiresIn <= 0) {
      this.expired();
    } else {
      this.benefit -= this.aging;
    }
    this.expiresIn -= this.expiration;
  }

  expired() {
    // check benefit threshold
    if (this.benefit > 0 && this.benefit < 50) {
      this.benefit -= this.aging * 2;
      if (this.benefit < 0) {
        this.benefit = 0;
      } else if (this.benefit > 50) {
        this.benefit = 50;
      }
    }
  }
  getInfo() {
    return {
      name: this.name,
      expiresIn: this.expiresIn,
      benefit: this.benefit
    };
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    return this.drugs.map(drug => {
      drug.age();
      return drug.getInfo();
    });
  }
}
