import Drugs from '../Drug';

export default class Fervex extends Drugs {
  constructor(expiresIn, benefit) {
    super("Fervex", expiresIn, benefit);
  }
}
