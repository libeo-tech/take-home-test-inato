import { BenefitUpdaterFactory } from './src/BenefitUpdaterFactory';
import { BenefitUpdater } from './src/benefitUpdater/BenefitUpdater';
export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue(benefitUpdater){
    if(benefitUpdater instanceof BenefitUpdater){
      const {benefit, expiresIn} = benefitUpdater.updateBenefitValue(this.benefit, this.expiresIn);
      this.benefit = benefit;
      this.expiresIn = expiresIn;
    }
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
    this.benefitUpdaterFactory = new BenefitUpdaterFactory();
  }
  updateBenefitValue() {
    this.drugs.forEach(drug => drug.updateBenefitValue(this.benefitUpdaterFactory.getBenefitUpdater(drug.name)));
    
    return this.drugs;
  }
}
