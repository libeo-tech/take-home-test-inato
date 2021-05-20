import { Drug } from "./drug";

export class MagicPill extends Drug {
  constructor(name, expiresIn, benefit) {
    super("Magic Pill", expiresIn, benefit);
  }
  update() {
    return this;
  }
}
