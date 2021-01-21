import Doliprane from "./drugs/doliprane";
import Fervex from "./drugs/fervex";
import HerbalTea from "./drugs/herbalTea";
import MagicPill from "./drugs/magicPill";
import drugNames from "./statics/drugNames";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs = this.drugs.map((drug) => {
      switch (drug.name) {
        case drugNames.HERBAL_TEA:
          return new HerbalTea(
            drug.expiresIn,
            drug.benefit
          ).updateBenefitValue();
        case drugNames.FERVEX:
          return new Fervex(drug.expiresIn, drug.benefit).updateBenefitValue();
        case drugNames.MAGIC_PILL:
          return new MagicPill(
            drug.expiresIn,
            drug.benefit
          ).updateBenefitValue();
        case drugNames.DOLIPRANE:
          return new Doliprane(
            drug.expiresIn,
            drug.benefit
          ).updateBenefitValue();
        default:
          return drug.updateBenefitValue();
      }
    });
    return this.drugs;
  }
}
