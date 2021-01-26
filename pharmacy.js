const HERBAL_TEA = "Herbal Tea";
const FERVEX = "Fervex";
const MAGIC_PILL = "Magic Pill";

const MAX_BENEFIT = 50;

/**
 * This is here for legacy / compatibility reasons
 * @deprecated You should use specialized CommonDrug instead
 * @property {CommonDrug} wrapped
 */
export class Drug {
  /**
   * Create a legacy Drug
   * @param {string} name
   * @param {number} expiresIn in number of days
   * @param {number} benefit
   */
  constructor(name, expiresIn, benefit) {
    if (name === HERBAL_TEA) this.wrapped = new HerbalTea(expiresIn, benefit);
    else if (name === FERVEX) this.wrapped = new Fervex(expiresIn, benefit);
    else if (name === MAGIC_PILL) this.wrapped = new MagicPill(benefit);
    else this.wrapped = new CommonDrug(name, expiresIn, benefit);
  }
  get name() {
    return this.wrapped.name;
  }
  set name(name) {
    this.wrapped.name = name;
  }
  get expiresIn() {
    return this.wrapped.expiresIn;
  }
  set expiresIn(expiresIn) {
    this.wrapped.expiresIn = expiresIn;
  }
  get benefit() {
    return this.wrapped.benefit;
  }
  set benefit(benefit) {
    this.wrapped.benefit = benefit;
  }
  dailyUpdate() {
    this.wrapped.dailyUpdate();
  }
}

/**
 * Represents any drug, with default behaviors
 */
export class CommonDrug {
  /**
   * Create a common Drug, with no specific behavior
   * @param {string} name
   * @param {number} expiresIn in number of days
   * @param {number} benefit
   */
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  /**
   * Updates benefit and expiry. This is intended to be called at the end of each day.
   * @public
   */
  dailyUpdate() {
    this.benefit = this._normalizeBenefit(this.benefit + this._benefitDiff());
    this.expiresIn = this.expiresIn - 1;
  }

  /**
   * Force benefit in range
   * @param {number} benefit submitted raw benefit
   * @return {number} normalized benefit
   * @private
   */
  _normalizeBenefit(benefit) {
    return Math.min(Math.max(benefit, 0), MAX_BENEFIT);
  }

  /**
   * Default benefit change for common drugs
   * @return {number} benefit to add to current
   * @protected
   */
  _benefitDiff() {
    return this.expiresIn > 0 ? -1 : -2;
  }
}

export class HerbalTea extends CommonDrug {
  constructor(expiresIn, benefit) {
    super(HERBAL_TEA, expiresIn, benefit);
  }

  /**
   * "Herbal Tea" actually increases in Benefit the older it gets.
   * Benefit increases twice as fast after the expiration date.
   * @return {number} benefit to add
   * @private
   */
  _benefitDiff() {
    return this.expiresIn > 0 ? 1 : 2;
  }
}

export class MagicPill extends CommonDrug {
  constructor(benefit) {
    super(MAGIC_PILL, Infinity, benefit);
  }

  /**
   * "Magic Pill" never expires nor decreases in Benefit.
   * @return {number} benefit never changes
   * @private
   */
  _benefitDiff() {
    return 0;
  }
}

export class Fervex extends CommonDrug {
  constructor(expiresIn, benefit) {
    super(FERVEX, expiresIn, benefit);
  }

  /**
   * "Fervex", like Herbal Tea, increases in Benefit as its expiration date approaches.
   * Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less
   * but Benefit drops to 0 after the expiration date.
   * @return {number} benefit to add
   * @private
   */
  _benefitDiff() {
    if (this.expiresIn > 10) return 1;
    if (this.expiresIn > 5) return 2;
    if (this.expiresIn > 0) return 3;
    else return -this.benefit;
  }
}

export class Pharmacy {
  /**
   * @param {(Drug | CommonDrug)[]} drugs
   */
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs.forEach(drug => drug.dailyUpdate());

    return this.drugs;
  }
}
