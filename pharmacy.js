export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    if (Drug.implementations.hasOwnProperty(name)) {
      this.implementation = new Drug.implementations[name](expiresIn, benefit);
    } else {
      this.implementation = new DefaultDrugImplementation(expiresIn, benefit);
    }
  }

  updateBenefitValue() {
    this.implementation.updateBenefitValue();
  }

  get expiresIn() {
    return this.implementation.expiresIn;
  }

  set expiresIn(value) {
    this.implementation.expiresIn = value;
  }

  get benefit() {
    return this.implementation.benefit;
  }

  set benefit(value) {
    this.implementation.benefit = value;
  }
}

Drug.implementations = {};

class DefaultDrugImplementation {
  constructor(expiresIn, benefit) {
    this.MIN_BENEFIT = 0;
    this.MAX_BENEFIT = 50;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue() {
    this.updateBenefit();
    this.updateExpiresIn();
  }

  updateBenefit() {
    if (this.expiresIn > 0) {
      this.benefit -= 1;
    } else {
      this.benefit -= 2;
    }
  }

  updateExpiresIn() {
    this.expiresIn--;
  }

  get benefit() {
    return this._benefit;
  }

  set benefit(value) {
    this._benefit = value;
    this._benefit = Math.max(this._benefit, this.MIN_BENEFIT);
    this._benefit = Math.min(this._benefit, this.MAX_BENEFIT);
  }
}

class HerbalTea extends DefaultDrugImplementation {
  updateBenefit() {
    if (this.expiresIn > 0) {
      this.benefit += 1;
    } else {
      this.benefit += 2;
    }
  }
}

Drug.implementations["Herbal Tea"] = HerbalTea;

class MagicPill extends DefaultDrugImplementation {
  updateBenefit() {}
  updateExpiresIn() {}
}

Drug.implementations["Magic Pill"] = MagicPill;

class Fervex extends DefaultDrugImplementation {
  updateBenefit() {
    if (this.expiresIn > 10) {
      this.benefit += 1;
    } else if (this.expiresIn > 5) {
      this.benefit += 2;
    } else if (this.expiresIn > 0) {
      this.benefit += 3;
    } else {
      this.benefit = 0;
    }
  }
}

Drug.implementations["Fervex"] = Fervex;

class Dafalgan extends DefaultDrugImplementation {
  updateBenefit() {
    if (this.expiresIn > 0) {
      this.benefit -= 2;
    } else {
      this.benefit -= 4;
    }
  }
}

Drug.implementations["Dafalgan"] = Dafalgan;

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (const drug of this.drugs) {
      drug.updateBenefitValue();
    }
    return this.drugs;
  }
}
