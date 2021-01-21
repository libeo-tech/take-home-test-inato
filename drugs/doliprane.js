import Drug from "../drug";
import drugNames from "../statics/drugNames";

export default class Doliprane extends Drug {
  constructor(expiresIn, benefit) {
    super(drugNames.DOLIPRANE, expiresIn, benefit);
  }
}
