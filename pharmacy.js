export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    const dailyBenefitIncrease = 1; // easier to change globally in the future
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].expiresIn--;
      switch (this.drugs[i].name) { // easiest way to enable adding/changing code for a drug in the future
        case "Herbal Tea":
          if (this.drugs[i].expiresIn >= 0) {
            this.drugs[i].benefit += dailyBenefitIncrease;
          } else {
            this.drugs[i].benefit += 2 * dailyBenefitIncrease;
          }
          if (this.drugs[i].benefit > 50) {
            this.drugs[i].benefit = 50;
          }
          break;
        case "Fervex":
          if (this.drugs[i].expiresIn < 0) {
            this.drugs[i].benefit = 0;
          } else if (this.drugs[i].expiresIn <= 5) {
            this.drugs[i].benefit += 3 * dailyBenefitIncrease;
          } else if (this.drugs[i].expiresIn <= 10) {
            this.drugs[i].benefit += 2 * dailyBenefitIncrease;
          } else {
            this.drugs[i].benefit += dailyBenefitIncrease;
          }
          if (this.drugs[i].benefit > 50) {
            this.drugs[i].benefit = 50;
          }
          break;
        case "Magic Pill":
          this.drugs[i].expiresIn++;
          break;
        case "Dafalgan":
          if (this.drugs[i].expiresIn >= 0) {
            this.drugs[i].benefit -= 2 * dailyBenefitIncrease;
          } else {
            this.drugs[i].benefit -= 4 * dailyBenefitIncrease;
          }
          if (this.drugs[i].benefit < 0) {
            this.drugs[i].benefit = 0;
          }
          break;
        default:
          if (this.drugs[i].expiresIn >= 0) {
            this.drugs[i].benefit -= dailyBenefitIncrease;
          } else {
            this.drugs[i].benefit -= 2 * dailyBenefitIncrease;
          }
          if (this.drugs[i].benefit < 0) {
            this.drugs[i].benefit = 0;
          }
      }
    }
    return this.drugs;
  }
}
