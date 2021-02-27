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
        expireIn: !drug.isMagicPills() ? drug.expireIn - 1 : drug.expireIn,
        benefit: drug.processBenefit(),
      };
    });
  }
}
