import { Drug } from "./drug";
import { MagicPill } from "./MagicPill";
import { HerbalTea } from "./HerbalTea";
import { Fervex } from "./Fervex";

export class Pharmacy {
  drugs: Drug[];

  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      switch (this.drugs[i].name) {
        case "Magic Pill":
          Object.setPrototypeOf(this.drugs[i], MagicPill.prototype);
          break;
        case "Herbal Tea":
          Object.setPrototypeOf(this.drugs[i], HerbalTea.prototype);
          break;
        case "Fervex":
          Object.setPrototypeOf(this.drugs[i], Fervex.prototype);
          break;
      }
      this.drugs[i].updateBenefitValue();
    }

    return this.drugs;
  }
}
