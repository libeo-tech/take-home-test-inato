import { Drug } from "./pharmacy";

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
    return buildDrug("Magic Pill", expiresIn, benefit);
  }
}

function buildDrug(name, expiresIn, benefit) {
  return new Drug(name, expiresIn, benefit);
}
