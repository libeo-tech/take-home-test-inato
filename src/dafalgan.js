import {Drug} from './drug';

export class Dafalgan extends Drug {

  constructor(expiresIn, benefit) {
    super('Dafalgan', expiresIn, benefit);
  }

  decreaseBenefit() {
    super.decreaseBenefit();
    super.decreaseBenefit();
  }

}
