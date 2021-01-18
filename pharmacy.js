const HERBAL_TEA = "Herbal Tea";
const FERVEX = "Fervex";
const MAGIC_PILL = "Magic Pill";

/**
 * @description build Drug instance using factory based on name
 */
export class DrugFactory {
  constructor() {}

  static getInstance(name, expiresIn, benefit) {
    switch (name) {
      case FERVEX:
        return new Fervex(expiresIn, benefit);
      case MAGIC_PILL:
        return new MagicPill(expiresIn, benefit);
      case HERBAL_TEA:
        return new HerbalTea(expiresIn, benefit);
      default:
        return new Drug(name, expiresIn, benefit);
    }
  }
}

export class Drug {
  constructor(name, expiresIn, benefit) {
    if (!name && !expiresIn && !benefit) {
      throw new Error(
        "Must provide all 'name' , 'expiresIn' , 'benefit' arguments"
      );
    }

    if (typeof expiresIn !== "number" || typeof benefit !== "number") {
      throw new Error("args 'expiresIn' and 'benefit' must be integer");
    }

    if (benefit > 50) {
      throw new Error("benefit can't exceed 50");
    }

    this.name = name;
    this.expiresIn = Math.floor(expiresIn);
    this.benefit = Math.floor(benefit);
  }

  updateBenefitValue() {
    if (this.benefit > 0) {
      this.benefit--;
    }

    if (this.benefit > 0 && this.expiresIn <= 0) {
      this.benefit--;
    }

    this.expiresIn--;
    return this;
  }
}

export class Fervex extends Drug {
  constructor(expiresIn, benefit) {
    super(FERVEX, expiresIn, benefit);
  }

  updateBenefitValue() {
    if (this.expiresIn <= 0) {
      this.benefit = 0;
      this.expiresIn--;
      return this;
    }

    if (this.benefit < 50) {
      this.benefit++;
    }

    if (this.benefit < 50 && this.expiresIn < 11) {
      this.benefit++;
    }

    if (this.benefit < 50 && this.expiresIn < 6) {
      this.benefit++;
    }

    this.expiresIn--;
    return this;
  }
}

export class MagicPill extends Drug {
  constructor(expiresIn, benefit) {
    super(MAGIC_PILL, expiresIn, benefit);
  }

  updateBenefitValue() {
    return this;
  }
}

export class HerbalTea extends Drug {
  constructor(expiresIn, benefit) {
    super(HERBAL_TEA, expiresIn, benefit);
  }

  updateBenefitValue() {
    if (this.benefit < 50) {
      this.benefit++;
    }

    if (this.benefit < 50 && this.expiresIn <= 0) {
      this.benefit++;
    }

    this.expiresIn--;
    return this;
  }
}
