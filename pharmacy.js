const findVariation = name => {
  if (name === "Dafalgan") {
    return {
      rateExpire: -1,
      limitMax: 50,
      benefit: -2,
      resetBenefitAfterExpiration: false,
      steps: [{ deviationDays: 0, benefit: -4 }]
    };
  }
  if (name === "Magic Pill") {
    return {
      rateExpire: 0,
      limitMax: 50,
      benefit: 0,
      resetBenefitAfterExpiration: false,
      steps: []
    };
  }
  if (name === "Herbal Tea") {
    return {
      rateExpire: -1,
      limitMax: 50,
      benefit: 1,
      resetBenefitAfterExpiration: false,
      steps: [{ deviationDays: 0, benefit: 2 }]
    };
  }
  if (name === "Fervex") {
    return {
      rateExpire: -1,
      limitMax: 50,
      benefit: 1,
      resetBenefitAfterExpiration: true,
      steps: [
        { deviationDays: 10, benefit: 2 },
        { deviationDays: 5, benefit: 3 }
      ]
    };
  }
  return {
    rateExpire: -1,
    limitMax: 50,
    benefit: -1,
    resetBenefitAfterExpiration: false,
    steps: [{ deviationDays: 0, benefit: -2 }]
  };
};

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (
        this.drugs[i].name != "Herbal Tea" &&
        this.drugs[i].name != "Fervex"
      ) {
        if (this.drugs[i].benefit > 0) {
          if (
            this.drugs[i].name != "Magic Pill" &&
            this.drugs[i].name != "Dafalgan"
          ) {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
          if (this.drugs[i].name == "Dafalgan") {
            this.drugs[i].benefit = this.drugs[i].benefit - 2;
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name == "Fervex") {
            if (this.drugs[i].expiresIn < 11) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
            if (this.drugs[i].expiresIn < 6) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
          }
        }
      }
      if (this.drugs[i].name != "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != "Herbal Tea") {
          if (this.drugs[i].name != "Fervex") {
            if (this.drugs[i].benefit > 0) {
              if (
                this.drugs[i].name != "Magic Pill" &&
                this.drugs[i].name != "Dafalgan"
              ) {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }
              if (this.drugs[i].name == "Dafalgan") {
                this.drugs[i].benefit = this.drugs[i].benefit - 2;
              }
            }
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
          }
        } else {
          if (this.drugs[i].benefit < 50) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
        }
      }
    }

    return this.drugs;
  }
  findNewBenefit(drug, variation) {
    // Trie du tableau pour que les plus grandes valeurs sorte en premier
    variation.steps.sort((a, b) => b.deviationDays - a.deviationDays);
    const benfitVariation = variation.steps.reduce(
      (acc, { deviationDays, benefit }) => {
        if (drug.expiresIn < deviationDays) {
          return benefit;
        }
        return acc;
      },
      variation.benefit
    );

    // Check limit max
    let newBenefit =
      drug.benefit + benfitVariation > variation.limitMax
        ? variation.limitMax
        : drug.benefit + benfitVariation;

    // Check expiration 0
    newBenefit =
      variation.resetBenefitAfterExpiration && drug.expiresIn < 0
        ? 0
        : newBenefit;
    newBenefit = newBenefit < 0 ? 0 : newBenefit;
    return newBenefit;
  }
  updateNewBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      const variation = findVariation(this.drugs[i].name);
      this.drugs[i].expiresIn += variation.rateExpire;
      this.drugs[i].benefit = this.findNewBenefit(this.drugs[i], variation);
    }
    return this.drugs;
  }
}
