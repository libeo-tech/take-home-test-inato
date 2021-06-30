import { Drug } from "./drug";

export class Doliprane extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super("Doliprane", expiresIn, benefit);
  }
}
