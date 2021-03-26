const MAX_BENEFIT = 50;
const MIN_BENEFIT = 0;

export class DrugState {
  constructor(expiresIn, benefit, expires = true) {
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.expires = expires;
  }

  getExpiresIn() {
    return this.expiresIn;
  }

  getBenefit() {
    return this.benefit;
  }

  applyDayBenefitChange(change) {
    this.benefit = ensureMinMaxBenefit(this.benefit + change);
    if (this.expires === true) {
      this.expiresIn--;
    }
  }
}

function ensureMinMaxBenefit(benefit) {
  if (benefit > MAX_BENEFIT) {
    return MAX_BENEFIT;
  }

  if (benefit < MIN_BENEFIT) {
    return MIN_BENEFIT;
  }

  return benefit;
}
