import Benefit from './benefits';
const HERBAL_TEA = 'Herbal Tea';
const FERVEX = 'Fervex';
const DAFALGAN = 'Dafalgan';
const MAGIC_PILL = 'Magic Pill';

/**
 *
 *
 * @export
 * @class Drug
 * @description base model for our drugs
 */
export class ClassicDrug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateExpireDate(expiresIn) {
    return expiresIn - 1;
  }

  updateBenefits(benefits, expiresIn) {
    if (expiresIn < 0) {
      return benefits.add(-2);
    }
    return benefits.add(-1);
  }

  nextDayValues() {
    const updatedExpiration = this.updateExpireDate(this.expiresIn);

    return new Drug(
      this.name,
      updatedExpiration,
      this.updateBenefits(new Benefit(this.benefit), updatedExpiration)
    );
  }
}

/**
 *
 *
 * @export
 * @class Dafalgan
 * @extends {Drug}
 * @description expires twice as fast
 */
export class Dafalgan extends ClassicDrug {
  updateBenefits(benefits, expiresIn) {
    if (expiresIn < 0) {
      return benefits.add(-4);
    }
    return benefits.add(-2);
  }
}

/**
 *
 *
 * @export
 * @class HerbalTea
 * @extends {Drug}
 * @description expires twice as fast
 */
export class HerbalTea extends ClassicDrug {
  updateBenefits(benefits, expiresIn) {
    if (expiresIn < 0) {
      return benefits.add(2);
    }
    return benefits.add(1);
  }
}

/**
 *
 *
 * @export
 * @class MagicPill
 * @extends {Drug}
 * @description does not age. does not lose value
 */
export class MagicPill extends ClassicDrug {
  updateBenefits(benefits) {
    return benefits.value;
  }

  updateExpireDate(expiresIn) {
    return expiresIn;
  }
}

/**
 *
 *
 * @export
 * @class Fervex
 * @extends {Drug}
 * @description benefits goes up as expiresIN gets closer, but loses all value after expiration
 */
export class Fervex extends ClassicDrug {
  updateBenefits(benefits, expiresIn) {
    if (expiresIn <= 0) {
      return 0;
    }
    if (expiresIn > 10) {
      return benefits.add(1);
    }
    if (expiresIn > 5) {
      return benefits.add(2);
    }
    if (expiresIn > 0) {
      return benefits.add(3);
    }
  }
}

/**
 *
 *
 * @export
 * @class Drug
 * @description drug model
 */
export class Drug {
  constructor(name, ...args) {
    switch (name) {
      case HERBAL_TEA:
        return new HerbalTea(name, ...args);
      case MAGIC_PILL:
        return new MagicPill(name, ...args);
      case FERVEX:
        return new Fervex(name, ...args);
      case DAFALGAN:
        return new Dafalgan(name, ...args);
      default:
        return new ClassicDrug(name, ...args);
    }
  }
}
