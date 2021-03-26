export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      const currentBenefit = this.drugs[i].benefit;
      const currentExpiresIn = this.drugs[i].expiresIn;

      let change = 0;

      switch (this.drugs[i].name) {
        case "Magic Pill":
          continue;
        case "Herbal Tea":
          change = currentExpiresIn > 0 ? 1 : 2;
          break;
        case "Fervex":
          if (currentExpiresIn > 10) {
            change = 1;
          } else if (currentExpiresIn > 5) {
            change = 2;
          } else if (currentExpiresIn > 0) {
            change = 3;
          } else {
            change = -currentBenefit;
          }
          break;
        default:
          change = currentExpiresIn > 0 ? -1 : -2;
          break;
      }

      this.drugs[i].benefit = ensureMinMaxBenefit(
        this.drugs[i].benefit + change
      );
      this.drugs[i].expiresIn -= 1;
    }

    return this.drugs;
  }
}

function ensureMinMaxBenefit(benefit) {
  const MIN_BENEFIT = 0;
  const MAX_BENEFIT = 50;

  if (benefit < MIN_BENEFIT) {
    return MIN_BENEFIT;
  }

  if (benefit > MAX_BENEFIT) {
    return MAX_BENEFIT;
  }

  return benefit;
}
