import Drug from "./Drug";
import { MODEL_CONSTANTS } from "../constants";

export default class HerbalTea extends Drug {
  constructor(expiresIn, benefit) {
    super(MODEL_CONSTANTS.DRUG.HERBAL_TEA, expiresIn, benefit);
  }
}
