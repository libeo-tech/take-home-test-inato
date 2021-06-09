const BENEFIT_MAX = 50;
const BENEFIT_MIN = 0;
export class Drug {
  constructor({
    name = "drug",
    expiresIn,
    benefit,
    shouldEvolve = -1,
    shouldEvolveWhenExpired,
    expirationDate = -1,
  }) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.shouldEvolve = shouldEvolve;
    this.shouldEvolveWhenExpired =
      typeof shouldEvolveWhenExpired !== "undefined"
        ? shouldEvolveWhenExpired
        : this.shouldEvolve * 2;
    this.expirationDate = expirationDate;
  }

  isExpired() {
    return this.expiresIn <= 0;
  }

  validateBenefit() {
    return this.benefit < BENEFIT_MIN
      ? BENEFIT_MIN
      : this.benefit > BENEFIT_MAX
      ? BENEFIT_MAX
      : this.benefit;
  }

  updateBenefit(b) {
    return this.benefit + b;
  }

  updateExpiresIn() {
    return this.expiresIn + this.expirationDate;
  }

  evolves() {
    if (this.isExpired()) {
      this.benefit = this.updateBenefit(this.shouldEvolveWhenExpired);
    } else {
      this.benefit = this.updateBenefit(this.shouldEvolve);
    }
    this.benefit = this.validateBenefit();
    this.expiresIn = this.updateExpiresIn();
  }
}

export class Dafalgan extends Drug {
  constructor(specifications) {
    super({ name: "Dafalgan", ...specifications });
    this.shouldEvolve = this.shouldEvolve * 2;
    this.shouldEvolveWhenExpired = this.shouldEvolve * 2;
  }
}

export class Fervex extends Drug {
  constructor(specifications) {
    super({
      name: "Fervex",
      shouldEvolve: 1,
      shouldEvolveWhenExpired: 0,
      ...specifications,
    });
  }

  evaluateBenefitEvolution() {
    return this.expiresIn <= 5
      ? 3
      : this.expiresIn <= 10
      ? 2
      : this.shouldEvolve;
  }

  evolves() {
    this.shouldEvolve = this.evaluateBenefitEvolution();
    return super.evolves();
  }
}

export class HerbalTea extends Drug {
  constructor(specifications) {
    super({ shouldEvolve: 1, name: "Herbal Tea", ...specifications });
  }
}

export class MagicPill extends Drug {
  constructor(specifications) {
    super({
      name: "Magic Pill",
      expirationDate: 0,
      shouldEvolve: 0,
      ...specifications,
    });
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs.forEach((d) => {
      d.evolves();
    });
    return this.drugs;
  }
}
