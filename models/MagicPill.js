import Drug from "./Drug";
import { MODEL_CONSTANTS } from "../constants";

export default class MagicPill extends Drug {
  constructor(expiresIn, benefit) {
    super(MODEL_CONSTANTS.DRUG.MAGIC_PILL, expiresIn, benefit);
  }
}
