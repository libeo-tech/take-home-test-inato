import { Drug } from "../drug";

export class MagicPill extends Drug {
  constructor(expiresIn, benefit) {
    super(MagicPill.name, expiresIn, benefit);
  }

  decreaseExpiresIn() {
    return null;
  }
}
