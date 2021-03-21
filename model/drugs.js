export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  getNewExpiresInValue() {
    return this.expiresIn - 1;
  }

  // This method should be overridden to implement specific drug benefit behaviour
  getBenefitDiff() {
    return this.expiresIn < 0 ? -2 : -1;
  }

  getNewBenefitValue() {
    const unBoundBenefitValue = this.benefit + this.getBenefitDiff();
    const boundBenefitValue = Math.min(50, Math.max(0, unBoundBenefitValue));
    return boundBenefitValue;
  }

  updateBenefit() {
    this.expiresIn = this.getNewExpiresInValue();
    this.benefit = this.getNewBenefitValue();
    return this;
  }
}


export class HerbalTea extends Drug {
  getBenefitDiff() {
    return -super.getBenefitDiff();
  }
}


export class MagicPill extends Drug {
  getBenefitDiff() {
    return 0;
  }

  getNewExpiresInValue() {
    return this.expiresIn;
  }
}


export class Fervex extends Drug {
  getBenefitDiff() {
    if (this.expiresIn < 0) {
      return -this.benefit;
    } else if (this.expiresIn <= 5) {
      return +3;
    } else if (this.expiresIn <= 10) {
      return +2;
    } else {
      return +1;
    }
  }
}


export class Defalgan extends Drug {
  getBenefitDiff() {
    return 2 * super.getBenefitDiff();
  }
}


export default function drugFactory(name, expiresIn, benefit) {
  switch (name) {
    case "Herbal Tea":
      return new HerbalTea(name, expiresIn, benefit);
    case "Magic Pill":
      return new MagicPill(name, expiresIn, benefit);
    case "Fervex":
      return new Fervex(name, expiresIn, benefit);
    case "Defalgan":
      return new Defalgan(name, expiresIn, benefit);
    default:
      return new Drug(name, expiresIn, benefit);
  }
}
