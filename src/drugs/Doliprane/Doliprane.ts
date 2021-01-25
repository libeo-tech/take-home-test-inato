import { Drug } from '../Drug';

export class Doliprane extends Drug {
  constructor(expiresIn = 20, benefit = 30) {
    super('Doliprane', expiresIn, benefit);
  }
}
