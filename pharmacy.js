export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  /**
   * increment Benefit
   */
  incrementBenefit() {
    this.benefit++;
  }

  /**
   * decrement Benefit
   */
  decrementBenefit() {
    this.benefit--;
  }

  /**
   * decrement expiresIn
   */
  decrementExpiresIn() {
    this.expiresIn--;
  }

  /**
   * business logic of drug herbalTea
   */
  herbalTea() {
    if (this.benefit < 50) {
      this.incrementBenefit();
    }

    this.decrementExpiresIn();

    if (this.benefit < 50 && this.expiresIn < 0) {
      this.incrementBenefit();
    }
  }

  /**
   * business logic of drug fervex
   */
  fervex() {
    if (this.benefit < 50) {
      this.incrementBenefit();
    }
    if (this.expiresIn < 11 && this.benefit < 50) {
      this.incrementBenefit();
    }
    if (this.expiresIn < 6 && this.benefit < 50) {
      this.incrementBenefit();
    }

    this.decrementExpiresIn();

    if (this.expiresIn < 0) {
      this.benefit = 0;
    }
  }

  /**
   * business logic of drug Dafalgan
   */
  dafalgan() {
    if (this.benefit > 0) {
      this.decrementBenefit();
    }
    if (this.benefit > 0) {
      this.decrementBenefit();
    }

    this.decrementExpiresIn();

    if (this.expiresIn < 0) {
      if (this.benefit > 0) {
        this.decrementBenefit();
      }
      if (this.benefit > 0) {
        this.decrementBenefit();
      }
    }
  }

  /**
   * business logic of drug Generic
   */
  generic() {
    if (this.benefit > 0) {
      this.decrementBenefit();
    }

    this.decrementExpiresIn();

    if (this.expiresIn < 0 && this.benefit > 0) {
      this.decrementBenefit();
    }
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  /**
   * update Benefit Value
   */
  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      const drug = this.drugs[i];

      switch (drug.name) {
        // call herbalTea business logic of drug
        case "Herbal Tea":
          drug.herbalTea();
          break;

        // call fervex business logic of drug
        case "Fervex":
          drug.fervex();
          break;

        // call Magic Pill business logic of drug
        case "Magic Pill":
          break;

        // call Dafalgan business logic of drug
        case "Dafalgan":
          drug.dafalgan();
          break;

        // call generic business logic of drug
        default:
          drug.generic();
          break;
      }

      this.drugs[i] = drug;
    }

    return this.drugs;
  }
}
