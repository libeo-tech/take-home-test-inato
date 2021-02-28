import Drug from './Drug';

export class Pharmacy {
  drugs: Array<Drug>;

  constructor(drugs: Array<Drug> = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach((drug: Drug) => {
      return {
        ...drug,
        expiresIn: drug.processExpiresIn(),
        benefit: drug.processBenefit(),
      };
    });
    return this.drugs;
  }
}
