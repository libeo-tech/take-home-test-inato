export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue() {
      if (this.expiresIn < 0) {
          this.benefit -= 2;
      }
      else {
          this.benefit -= 1;
      }
  }

  updateExpiration() {
      this.expiresIn -= 1;
  }
}

export class HerbalDrug extends Drug {
    // constructor(name, expiresIn, benefit) {
    //     super(name, expiresIn, benefit);
    // }

    updateBenefitValue() {
        if (this.expiresIn < 0) {
            this.benefit += 2;
        }
        else {
            this.benefit += 1;
        }
    }
}

export class NoExpirationDrug extends Drug {
    constructor(name, expiresIn, benefit) {
        super(name, expiresIn, benefit);
    }

    updateBenefitValue() {
        // do nothing
    }

    updateExpiration() {
        // do nothing
    }
}

export class FervexDrug extends Drug {
    constructor(name, expiresIn, benefit) {
        super(name, expiresIn, benefit);
    }

    updateBenefitValue() {
        if (this.expiresIn < 0) {
            this.benefit = 0;
        }
        else if (this.expiresIn <= 5) {
            this.benefit += 3;
        }
        else if (this.expiresIn <= 10) {
            this.benefit += 2;
        }
        else {
            this.benefit += 1;
        }
    }

}

export class DafalganDrug extends Drug {
    updateBenefitValue() {
        if (this.expiresIn < 0) {
            this.benefit -= 4;
        }
        else {
            this.benefit -= 2;
        }
    }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
      this.drugs.forEach((drug) => {
          drug.updateBenefitValue();
          drug.updateExpiration();
      });
      return this.drugs;
  }
}
