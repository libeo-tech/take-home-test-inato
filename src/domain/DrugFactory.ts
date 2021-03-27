import { Drug } from "./Drug";
import { DrugState } from "./DrugState";
import {
  ConstantBenefitStrategy,
  DecreaseBenefitStrategy,
  IncreaseBenefitStrategy,
  ThresholdsBenefitStrategy,
} from "./benefitChangeStrategies";

export class DrugFactory {
  public static buildDafalgan(expiresIn: number, benefit: number): Drug {
    return new Drug(
      "Dafalgan",
      new DrugState(expiresIn, benefit),
      new DecreaseBenefitStrategy(2)
    );
  }

  public static buildDoliprane(expiresIn: number, benefit: number): Drug {
    return new Drug(
      "Doliprane",
      new DrugState(expiresIn, benefit),
      new DecreaseBenefitStrategy()
    );
  }

  public static buildHerbalTea(expiresIn: number, benefit: number): Drug {
    return new Drug(
      "Herbal Tea",
      new DrugState(expiresIn, benefit),
      new IncreaseBenefitStrategy()
    );
  }

  public static buildFervex(expiresIn: number, benefit: number): Drug {
    return new Drug(
      "Fervex",
      new DrugState(expiresIn, benefit),
      new ThresholdsBenefitStrategy([
        { threshold: 10, change: 1 },
        { threshold: 5, change: 2 },
        { threshold: 0, change: 3 },
      ])
    );
  }

  public static buildMagicPill(expiresIn: number, benefit: number): Drug {
    return new Drug(
      "Magic Pill",
      new DrugState(expiresIn, benefit, false),
      new ConstantBenefitStrategy()
    );
  }
}
