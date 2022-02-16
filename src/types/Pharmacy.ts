import { Drug } from "./Drug";

export class Pharmacy {
  drugs: Drug[];

  constructor(drugs: Drug[]) {
    this.drugs = drugs;
  }
}
