import { Doliprane } from "./drugs/doliprane";
import { Fervex } from "./drugs/fervex";
import { HerbalTea } from "./drugs/herbalTea";
import { MagicPill } from "./drugs/magicPill";

export class Pharmacy {
  drugs: (Doliprane | Fervex | HerbalTea | MagicPill)[];

  constructor(drugs: (Doliprane | Fervex | HerbalTea | MagicPill)[] = []) {
    this.drugs = drugs;
  }
  updateBenefitValue(): { name: string; expiresIn: number; benefit: number }[] {
    return this.drugs.map((drug) => {
      drug.subExpire();
      drug.calculateBenefit();
      drug.validateBenefit();
      return drug.getBenefit();
    });
  }
}
