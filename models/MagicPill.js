import Drug from "./Drug";

export default class MagicPill extends Drug {
  constructor(expiresIn, benefit) {
    super("Magic Pill", expiresIn, benefit);
  }
}
