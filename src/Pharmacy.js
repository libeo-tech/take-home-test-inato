export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      const currentState = this.drugs[i].getState();
      const currentBenefit = currentState.getBenefit();
      const currentExpiresIn = currentState.getExpiresIn();

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

      currentState.applyDayBenefitChange(change);
    }

    return this.drugs;
  }
}
