import { DrugFactory, DrugStore } from "../domain";
import { Drug } from "../domain/Drug";

export class StaticDrugStore implements DrugStore {
  public load(): Drug[] {
    return [
      DrugFactory.buildDoliprane(20, 30),
      DrugFactory.buildHerbalTea(10, 5),
      DrugFactory.buildFervex(5, 40),
      DrugFactory.buildMagicPill(15, 40),
    ];
  }
}
