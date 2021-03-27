import { Drug } from "./Drug";

export interface DrugStore {
  load(): Drug[];
}
