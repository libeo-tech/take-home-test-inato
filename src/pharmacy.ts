import { Drug } from "./drug";
import { MagicPill } from "./MagicPill";
import { HerbalTea } from "./HerbalTea";
import { Fervex } from "./Fervex";

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
      }
      return currentDrug;
    });
  }

  updateBenefitValue() {
    this.drugs.map(currentDrug => currentDrug.updateBenefitValue());
    return this.drugs;
  }
}
