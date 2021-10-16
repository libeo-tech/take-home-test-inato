import Drug from "./Drug";
import { MODEL_CONSTANTS } from "../constants";

export default class Dafalgan extends Drug {
  constructor(expiresIn, benefit) {
    super(MODEL_CONSTANTS.DRUG.DAFALGAN, expiresIn, benefit);
  }
}
