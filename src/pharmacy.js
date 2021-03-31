import { FERVEX, HERBAL_TEA, MAGIC_PILL, DAFALGAN } from "./drugs/constants";
import { HerbalTea } from "./drugs/herbalTea";
import { MagicPill } from "./drugs/magicPill";
import { Fervex } from "./drugs/fervex";
import { Dafalgan } from "./drugs/dafalgan";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = this.convertDrugs(drugs);
  }

  convertDrugs(drugs) {
    return drugs.map(drug => {
      const { name, expiresIn, benefit } = drug;

      switch (name) {
        case MAGIC_PILL:
          return new MagicPill(expiresIn, benefit);

        case HERBAL_TEA:
          return new HerbalTea(expiresIn, benefit);

        case FERVEX:
          return new Fervex(expiresIn, benefit);

        case DAFALGAN:
          return new Dafalgan(expiresIn, benefit);

        default:
          return drug;
      }
    });
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => drug.updateDrugValues());

    return this.drugs;
  }
}
