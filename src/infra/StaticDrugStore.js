import { DrugFactory } from "../domain/DrugFactory";

export class StaticDrugStore {
  load() {
    return [
      DrugFactory.buildDoliprane(20, 30),
      DrugFactory.buildHerbalTea(10, 5),
      DrugFactory.buildFervex(5, 40),
      DrugFactory.buildMagicPill(15, 40)
    ];
  }
}
