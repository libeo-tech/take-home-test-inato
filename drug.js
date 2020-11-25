export default class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  /**
   * In this function, will update the expiresIn and benefit values
   * based on different kinds of drugs
   */
  updateDrugValues() {

    return {
        name: this.name,
        expiresIn: this.expiresIn,
        benefit: this.benefit
    }
  }
}
