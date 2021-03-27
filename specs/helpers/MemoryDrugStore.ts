import { DrugStore, Drug } from "../../src";

export class MemoryDrugStore implements DrugStore {
  constructor(private drugs: Drug[]) {}

  public load(): Drug[] {
    return this.drugs;
  }
}
