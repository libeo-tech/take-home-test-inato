import { Drug } from './drug';

export class HerbalTea extends Drug {

  constructor(expiresIn, benefit) {
	super('Herbal Tea', expiresIn, benefit);
  }

}
