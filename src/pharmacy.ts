import { Drug } from "./types";

export class Pharmacy {
  private drugs: Drug[];

  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }
}
