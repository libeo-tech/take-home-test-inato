import Dafalgan, { DAFALGAN } from "./Dafalgan";
import Drug from "./Drug";
import Fervex, { FERVEX } from "./Fervex";
import HerbalTea, { HERBAL_TEA } from "./HerbalTea";
import MagicPill, { MAGIC_PILL } from "./MagicPill";

/**
 * @description build Drug instance using factory based on name
 */
export default class DrugFactory {
  constructor() {}

  static getInstance(name, expiresIn, benefit) {
    switch (name) {
      case FERVEX:
        return new Fervex(expiresIn, benefit);
      case MAGIC_PILL:
        return new MagicPill(expiresIn, benefit);
      case HERBAL_TEA:
        return new HerbalTea(expiresIn, benefit);
      case DAFALGAN:
        return new Dafalgan(expiresIn, benefit);
      default:
        return new Drug(name, expiresIn, benefit);
    }
  }
}
