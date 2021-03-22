import { Drug } from "../Drug";
import { DegradingDrug } from "./DegradingDrug";

export class Dafalgan extends DegradingDrug implements Drug {
  constructor(public expiresIn: number, public benefit: number) {
    super("Dafalgan", expiresIn, benefit);
  }

  protected getBenefitChange(): number {
    return super.getBenefitChange() * 2;
  }
}
