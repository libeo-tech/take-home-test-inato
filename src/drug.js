export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  getDegradation() {
    const degradationUnit = 1;
    // case "Magic Pill"
    if (this.name === "Magic Pill") return 0;
    // case "Herbal Tea"
    else if (this.name === "Herbal Tea" && this.expiresIn > 0)
      return degradationUnit * 1;
    else if (this.name === "Herbal Tea" && this.expiresIn <= 0)
      return degradationUnit * 2;
    // case "Fervex"
    else if (this.name === "Fervex" && this.expiresIn <= 0)
      // not important, it will be nullified by factor, just explicited for readiness
      return degradationUnit * 0;
    else if (this.name === "Fervex" && this.expiresIn <= 5)
      return degradationUnit * 3;
    else if (this.name === "Fervex" && this.expiresIn <= 10)
      return degradationUnit * 2;
    // case "Dafalgan"
    else if (this.name === "Dafalgan" && this.expiresIn > 0)
      return degradationUnit * 2;

    // base case
    if (this.expiresIn <= 0) return degradationUnit * 2;
    return degradationUnit;
  }

  getDegradationFactor() {
    // increasing cases
    if (["Herbal Tea", "Fervex"].includes(this.name)) return 1;

    // static cases
    if (this.benefit <= 0) return 0;

    // decreasing cases (main)
    return -1;
  }

  getBenefitNullifyingFactor() {
    // cases that nullify the benefit
    if (this.name === "Fervex" && this.expiresIn <= 0) return 0;
    return 1;
  }

  updateBenefitFromDayDegradation() {
    const factor = this.getDegradationFactor();
    const degradation = this.getDegradation();
    const benefitNullifier = this.getBenefitNullifyingFactor();

    const newBenefit = benefitNullifier * (this.benefit + degradation * factor);
    if (newBenefit > 50) this.benefit = 50;
    else
      this.benefit = benefitNullifier * (this.benefit + degradation * factor);
  }

  decreaseExpiresIn() {
    if (this.name !== "Magic Pill") this.expiresIn--;
  }
}
