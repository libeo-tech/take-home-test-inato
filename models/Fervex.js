import Drug from "./Drug";
import { MODEL_CONSTANTS } from "../constants";

export default class Fervex extends Drug {
  constructor(expiresIn, benefit) {
    super(MODEL_CONSTANTS.DRUG.FERVEX, expiresIn, benefit);
  }
}
