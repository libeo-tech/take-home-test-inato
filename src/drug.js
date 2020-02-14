import { herbalTeaBenefitBehavior } from "./herbal_tea";

const drugsBenefitBehaviors = {
  "Herbal Tea": herbalTeaBenefitBehavior
};

function defaultBehavior() {
  this.expiresIn -= 1;
  this.benefit -= 1;
}

function assignBenefitBehaviorFromName(name) {
  return drugsBenefitBehaviors[name];
}

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.updateBenefitValue = assignBenefitBehaviorFromName(this.name) || defaultBehavior;
  }
}
