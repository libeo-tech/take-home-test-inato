export class Pharmacy {

  constructor(drugs = []) {
    this.drugs = drugs;
  }

  getDrugs () {
    return this.drugs;
  }
}
