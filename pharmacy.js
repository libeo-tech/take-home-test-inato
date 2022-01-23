export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  decreaseExpiresIn() {
    this.expiresIn--;
  }

  decreaseBenefit() {
    if (this.benefit > 0) {
      if (this.expiresIn < 0) {
        this.benefit = this.benefit - 2;
      } else {
        this.benefit--;
      }
    }
  }

  increaseBenefit(factor = 1) {
    this.benefit = this.benefit + factor
  }

  updateBenefitValue() {
     this.decreaseBenefit();
  }
}

export class Fervex extends Drug {
  constructor(expiresIn, benefit) {
    super('Fervex', expiresIn, benefit);
  }

  resetBenefit() {
    this.benefit = 0
  }

  // I used return here to quick exit
  updateBenefitValue() {

    if (this.expiresIn <= 0) {
      return this.resetBenefit();
    }
    
    if (this.expiresIn <= 5) {
      return this.increaseBenefit(3)
    }
    
    if (this.expiresIn >= 6 && this.expiresIn <= 10) {
      return this.increaseBenefit(2)
    }

    this.increaseBenefit()
  }
}

export class HerbalTea extends Drug {
  constructor(expiresIn, benefit, maxBenefit = 50) {
    super('Herbal Tea', expiresIn, benefit);
    this.maxBenefit = maxBenefit;
  }

  increaseBenefit(factor = 1) {
    const newBenefit = this.benefit + factor
    if (newBenefit < this.maxBenefit) {
      this.benefit = newBenefit;
    } else {
      this.benefit =this.maxBenefit;
    }
  }

  updateBenefitValue() {
    if (this.expiresIn <= 0) {
      this.increaseBenefit(2);
    } else {
      this.increaseBenefit();
    }
  }
}

export class MagicPill extends Drug {
  constructor(expiresIn, benefit) {
    super('Magic Pill', expiresIn, benefit);
  }

  decreaseExpiresIn() {
  }

  decreaseBenefit() {
  }
}

export class Dafalgan extends Drug {
  constructor(expiresIn, benefit) {
    super('Dafalgan', expiresIn, benefit);
  }

  decreaseBenefit() {
    if (this.benefit > 0) {
      this.benefit = this.benefit - 2;
    }
  }
}
export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      this.drugs[i].decreaseExpiresIn();
      this.drugs[i].updateBenefitValue();
    }
    return this.drugs;
  }
}
