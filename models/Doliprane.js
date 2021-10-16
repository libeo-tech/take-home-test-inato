import Drug from "./Drug";
import { MODEL_CONSTANTS } from "../constants";

export default class Doliprane extends Drug {
  constructor(expiresIn, benefit) {
    super(MODEL_CONSTANTS.DRUG.DOLIPRANE, expiresIn, benefit);
  }
}
