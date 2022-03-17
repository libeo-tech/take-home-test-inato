import { drugRules } from './rules.js';

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs = this.drugs.map(({ name, benefit, expiresIn }) => {
      const type = name in drugRules ? name : 'default';
      return drugRules[type]({ name, benefit, expiresIn });
    });
    return this.drugs;
  }
}
