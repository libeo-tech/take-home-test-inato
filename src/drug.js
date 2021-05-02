export default class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  decreaseBenefit() {
    if (this.benefit >= 1) {
      this.benefit -= 1;
    }
  }
  increaseBenefit() {
    if (this.benefit < 50) {
      this.benefit += 1;
    }
  }
  updateExpiresIn() {
    this.expiresIn -= 1;
  }
  updateBenefitAfterOneDay() {
    this.updateExpiresIn();
    this.decreaseBenefit();
  }
}

class Doliprane extends Drug {
  constructor(expiresIn, benefit) {
    super("Doliprane", expiresIn, benefit);
  }
}

class HerbalTea extends Drug {
  constructor(expiresIn, benefit) {
    super("Herbal Tea", expiresIn, benefit);
  }
  decreaseBenefit() {}
  increaseBenefit() {
    if (this.expiresIn < 0) {
      this.benefit += 2;
    } else {
      this.benefit += 1;
    }
  }
  updateBenefitAfterOneDay() {
    this.updateExpiresIn();
    this.increaseBenefit();
  }
}

class Fervex extends Drug {
  constructor(expiresIn, benefit) {
    super("Fervex", expiresIn, benefit);
  }
  decreaseBenefit() {}
  increaseBenefit() {
    if (this.expiresIn < 11 && this.expiresIn >= 6) {
      this.benefit += 2;
    } else if (this.expiresIn < 6 && this.expiresIn >= 0) {
      this.benefit += 3;
    } else {
      this.benefit = 0;
    }
  }
  updateBenefitAfterOneDay() {
    this.updateExpiresIn();
    this.increaseBenefit();
  }
}

class MagicPill extends Drug {
  constructor(expiresIn, benefit) {
    super("Magic Pill", expiresIn, benefit);
  }
  decreaseBenefit() {}
  updateExpiresIn() {}
}

class Dafalgan extends Drug {
  constructor(expiresIn, benefit) {
    super("Dafalgan", expiresIn, benefit);
  }
  decreaseBenefit() {
    this.benefit -= 2;
  }
}

export { Doliprane, HerbalTea, Fervex, MagicPill, Dafalgan };
