export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  decreaseBenefit() {
    this.benefit = Math.max(this.benefit - 1, 0);
  }

  decreaseExpiresIn() {
    this.expiresIn -= 1;
  }
}

export class CustomDrug extends Drug {}

// "Herbal Tea" actually increases in Benefit the older it gets.
// Benefit increases twice as fast after the expiration date.
export class HerbalTea extends CustomDrug {
  decreaseBenefit() {
    if (this.expiresIn <= 0) {
      this.benefit = Math.min(this.benefit + 2, 50);
      return;
    }
    this.benefit = Math.min(this.benefit + 1, 50);
  }
}

// "Fervex", like Herbal Tea, increases in Benefit as its expiration date
// approaches. Benefit increases by 2 when there are 10 days or less and by 3
// when there are 5 days or less but Benefit drops to 0 after the expiration
// date.
export class Fervex extends CustomDrug {
  decreaseBenefit() {
    if (this.expiresIn <= 0) {
      this.benefit = 0;
      return;
    }
    if (this.expiresIn <= 5) {
      this.benefit = Math.min(this.benefit + 3, 50);
      return;
    }
    if (this.expiresIn <= 10) {
      this.benefit = Math.min(this.benefit + 2, 50);
      return;
    }
    this.benefit = Math.min(this.benefit + 1, 50);
  }
}

// "Magic Pill" never expires nor decreases in Benefit.
export class MagicPill extends CustomDrug {
  decreaseBenefit() {}

  decreaseExpiresIn() {}
}

// "Dafalgan" degrades in Benefit twice as fast as normal drugs.
export class Dafalgan extends CustomDrug {
  decreaseBenefit() {
    this.benefit = Math.max(this.benefit - 2, 0);
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    return this.drugs.map(drug => {
      drug.decreaseBenefit();
      drug.decreaseExpiresIn();
      return drug;
    });
  }
}

export const buildDrug = (name, expiresIn, benefit, type = null) => {
  try {
    if (type) {
      if (!(new type() instanceof Drug)) {
        throw `${type.name} is not a know drug type`;
      }
      return new type(name, expiresIn, benefit);
    }
    return new Drug(name, expiresIn, benefit);
  } catch (e) {
    // what do we do here ?
    throw `Unable to create drug ${name} : ${e}`;
  }
};
