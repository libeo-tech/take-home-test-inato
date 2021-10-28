import Drugs from '../Drug';

export default class MagicPill extends Drugs {
  constructor(expiresIn, benefit) {
    super("Magic Pill", expiresIn, benefit);
  }
}
