const MIN_BENEFIT = 0;
const MAX_BENEFIT = 50;

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue() {
    if (Drug.benefitUpdaters.hasOwnProperty(this.name)) {
      Drug.benefitUpdaters[this.name](this);
    } else {
      Drug.benefitUpdaters.default(this);
    }
  }

  get benefit() {
    return this._benefit;
  }

  set benefit(value) {
    this._benefit = value;
    this._benefit = Math.max(this._benefit, MIN_BENEFIT);
    this._benefit = Math.min(this._benefit, MAX_BENEFIT);
  }
}

Drug.benefitUpdaters = {
  default(drug) {
    if (drug.expiresIn > 0) {
      drug.benefit -= 1;
    } else {
      drug.benefit -= 2;
    }
    drug.expiresIn--;
  }
};

Drug.benefitUpdaters["Herbal Tea"] = drug => {
  if (drug.expiresIn > 0) {
    drug.benefit += 1;
  } else {
    drug.benefit += 2;
  }
  drug.expiresIn--;
};

Drug.benefitUpdaters["Magic Pill"] = () => {};

Drug.benefitUpdaters["Fervex"] = drug => {
  if (drug.expiresIn > 10) {
    drug.benefit += 1;
  } else if (drug.expiresIn > 5) {
    drug.benefit += 2;
  } else if (drug.expiresIn > 0) {
    drug.benefit += 3;
  } else {
    drug.benefit = 0;
  }
  drug.expiresIn--;
};

Drug.benefitUpdaters["Dafalgan"] = drug => {
  if (drug.expiresIn > 0) {
    drug.benefit -= 2;
  } else {
    drug.benefit -= 4;
  }
  drug.expiresIn--;
};

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
