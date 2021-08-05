const Min_Benefit = 0;
const Max_Benefit = 50;
export class Drug {
  constructor(name, expiresIn, benefit, aging = 1, expiration = 1) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.aging = aging;
    this.expiration = expiration;
  }

  age() {
    // reduce benefit per aging factor
    if (this.expiresIn <= 0) {
      this.expired();
    } else {
      this.benefit -= this.aging;
    }
    this.expiresIn -= this.expiration;
  }

  expired() {
    // check benefit threshold
    if (this.benefit > Min_Benefit && this.benefit < Max_Benefit) {
      this.benefit -= this.aging * 2;
      if (this.benefit < Min_Benefit) {
        this.benefit = Min_Benefit;
      } else if (this.benefit > Max_Benefit) {
        this.benefit = Max_Benefit;
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

// Fervex has special expiration conditions, donc we morph Drug.expired()
export class Fervex extends Drug {
  constructor(name, expiresIn, benefit, aging) {
    super(name, expiresIn, benefit, aging);
  }
  expired() {
    if (this.expiresIn === 0) {
      this.benefit = 0;
    } else if (this.expiresIn > 10) {
      this.benefit += 1;
    } else if (this.expiresIn > 5 && this.expiresIn <= 10) {
      this.benefit += 2;
    } else if (this.expiresIn < 5 && this.expiresIn >= 0) {
      this.benefit += 3;
    }
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
