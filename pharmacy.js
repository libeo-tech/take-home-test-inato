export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    const decreaseBenefit = value => {
      if (value > 0) {
        return value - 1;
      }
      return value;
    };
    const increaseBenefit = value => {
      if (value < 50) {
        return value + 1;
      }
      return value;
    };
    for (let i = 0; i < this.drugs.length; i++) {
      const nextExpiresIn =
        this.drugs[i].name === "Magic Pill"
          ? this.drugs[i].expiresIn
          : this.drugs[i].expiresIn - 1;
      let nextBenefit = this.drugs[i].benefit;
      switch (this.drugs[i].name) {
        case "Herbal Tea":
          nextBenefit = increaseBenefit(nextBenefit);
          if (nextExpiresIn < 0) {
            nextBenefit = increaseBenefit(nextBenefit);
          }
          break;
        case "Fervex":
          if (nextExpiresIn < 0) {
            nextBenefit = 0;
          } else {
            nextBenefit = increaseBenefit(nextBenefit);
            if (nextExpiresIn < 10) {
              nextBenefit = increaseBenefit(nextBenefit);
              if (nextExpiresIn < 5) {
                nextBenefit = increaseBenefit(nextBenefit);
              }
            }
          }
          break;
        case "Magic Pill":
          break;
        case "Dafalgan":
          nextBenefit = decreaseBenefit(nextBenefit);
          nextBenefit = decreaseBenefit(nextBenefit);
          if (nextExpiresIn < 0) {
            nextBenefit = decreaseBenefit(nextBenefit);
            nextBenefit = decreaseBenefit(nextBenefit);
          }
          break;
        default:
          nextBenefit = decreaseBenefit(nextBenefit);
          if (nextExpiresIn < 0) {
            nextBenefit = decreaseBenefit(nextBenefit);
          }
      }
      this.drugs[i].expiresIn = nextExpiresIn;
      this.drugs[i].benefit = nextBenefit;
    }

    return this.drugs;
  }
}
