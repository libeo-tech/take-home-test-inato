import Dafalgan from "./drugs/dafalgan";
import Doliprane from "./drugs/doliprane";
import Fervex from "./drugs/fervex";
import HerbalTea from "./drugs/herbalTea";
import MagicPill from "./drugs/magicPill";
import Drug from "./drug";
import drugNames from "./statics/drugNames";

export default class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  instantiateDrug(drug) {
    if (Object.values(drugNames).includes(drug.name))
      return new {
        [drugNames.DAFALGAN]: Dafalgan,
        [drugNames.DOLIPRANE]: Doliprane,
        [drugNames.FERVEX]: Fervex,
        [drugNames.HERBAL_TEA]: HerbalTea,
        [drugNames.MAGIC_PILL]: MagicPill,
      }[drug.name](drug.expiresIn, drug.benefit);
    return new Drug(drug.name, drug.expiresIn, drug.benefit);
  }

  updateBenefitValue() {
    this.drugs = this.drugs.map((drug) => {
      return this.instantiateDrug(drug).updateBenefitValue();
    });
    return this.drugs;
  }
}
