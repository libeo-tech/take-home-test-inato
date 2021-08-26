import { getDrugBehavior } from "../data/behaviors";
export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.behavior = getDrugBehavior(name);
  }

  updateExpiration() {
    this.expiresIn += this.behavior.expirationSpeed;
  }

  updateBenefit() {
    // Find the benefit speed
    const benefitStageSpeed = this.behavior.benefitStageSpeeds.find(
      ({ days }) => this.expiresIn <= days
    );

    const benefitAppliedSpeed = benefitStageSpeed
      ? benefitStageSpeed.speed
      : this.behavior.benefitDefaultSpeed;

    this.benefit += benefitAppliedSpeed;

    // Drop benefit after expiration
    if (this.expiresIn <= 0 && this.behavior.dropBenefitAfterExpiration) {
      this.benefit = 0;
    }

    // Clamp benefit
    this.benefit = Math.min(Math.max(0, this.benefit), 50);
  }

  updateBenefitValue() {
    this.updateBenefit();
    this.updateExpiration();
  }
}
