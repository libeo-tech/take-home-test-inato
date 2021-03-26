import { Drug } from "./Drug";
import { DrugState } from "./DrugState";
import {
  ConstantBenefitStrategy,
  DecreaseBenefitStrategy,
  IncreaseBenefitStrategy,
  ThresholdsBenefitStrategy
} from "./benefitChangeStrategies";

export class DrugFactory {
  static buildDoliprane(expiresIn, benefit) {
    return new Drug(
      "Doliprane",
      new DrugState(expiresIn, benefit),
      new DecreaseBenefitStrategy()
    );
  }

  static buildHerbalTea(expiresIn, benefit) {
    return new Drug(
      "Herbal Tea",
      new DrugState(expiresIn, benefit),
      new IncreaseBenefitStrategy()
    );
  }

  static buildFervex(expiresIn, benefit) {
    return new Drug(
      "Fervex",
      new DrugState(expiresIn, benefit),
      new ThresholdsBenefitStrategy({
        10: 1,
        5: 2,
        0: 3
      })
    );
  }

  static buildMagixPill(expiresIn, benefit) {
    return new Drug(
      "Magic Pill",
      new DrugState(expiresIn, benefit, false),
      new ConstantBenefitStrategy()
    );
  }
}
