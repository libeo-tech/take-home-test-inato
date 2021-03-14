import { Drug } from "./drugs/drug";
import { MagicPill } from "./drugs/magicPill";
import { HerbalTea } from "./drugs/herbalTea";
import { Fervex } from "./drugs/fervex";
import { Dafalgan } from "./drugs/dafalgan";

export class Pharmacy {
  drugs: Drug[];

  constructor(drugs: Drug[] = []) {
    this.drugs = this.castDrugs(drugs);
  }

  castDrugs(drugs: Drug[]): Drug[] {
    return drugs.map(currentDrug => {
      switch (currentDrug.name) {
        case "Magic Pill":
          Object.setPrototypeOf(currentDrug, MagicPill.prototype);
          break;
        case "Herbal Tea":
          Object.setPrototypeOf(currentDrug, HerbalTea.prototype);
          break;
        case "Fervex":
          Object.setPrototypeOf(currentDrug, Fervex.prototype);
          break;
        case "Dafalgan":
          Object.setPrototypeOf(currentDrug, Dafalgan.prototype);
          break;
      }
      return currentDrug;
    });
  }

  updateBenefitValue() {
    this.drugs.map(currentDrug => currentDrug.updateBenefitValue());
    return this.drugs;
  }
}
