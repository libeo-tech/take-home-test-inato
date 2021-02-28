import Drug from './Drug';

export class Pharmacy {
  drugs: Array<Drug>;

  constructor(drugs: Array<Drug> = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach((drug: Drug) => {
      return {
        ...drug.toString(),
        expireIn: !drug.isMagicPills() ? drug.expiresIn - 1 : drug.expiresIn,
        benefit: drug.processBenefit(),
      };
    });
    return this.drugs;
  }
}
