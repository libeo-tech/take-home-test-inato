import Drugs from '../Drug';

export default class HerbalTea extends Drugs {
  constructor(expiresIn, benefit) {
    super("Herbal Tea", expiresIn, benefit);
  }
}
