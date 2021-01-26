import { CommonDrug } from "./CommonDrug";
import { HERBAL_TEA, HerbalTea } from "./drugs/HerbalTea";
import { MAGIC_PILL, MagicPill } from "./drugs/MagicPill";
import { FERVEX, Fervex } from "./drugs/Fervex";

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
    else if (name === MAGIC_PILL)
      this.wrapped = new MagicPill(expiresIn, benefit);
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
