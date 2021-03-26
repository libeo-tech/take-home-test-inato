import { Drug } from "./Drug";
import { DrugState } from "./DrugState";

export class DrugFactory {
  static buildDoliprane(expiresIn, benefit) {
    return buildDrug("Doliprane", expiresIn, benefit);
  }

  static buildHerbalTea(expiresIn, benefit) {
    return buildDrug("Herbal Tea", expiresIn, benefit);
  }

  static buildFervex(expiresIn, benefit) {
    return buildDrug("Fervex", expiresIn, benefit);
  }

  static buildMagixPill(expiresIn, benefit) {
    return buildDrug("Magic Pill", expiresIn, benefit, false);
  }
}

function buildDrug(name, expiresIn, benefit) {
  return new Drug(name, new DrugState(expiresIn, benefit));
}
