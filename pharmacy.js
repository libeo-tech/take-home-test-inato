const findVariation = name => {
  if (name === "Dafalgan") {
    return {
      rateExpire: -1,
      limitMax: 50,
      benefit: -2,
      resetBenefitAfterExpire: false,
      steps: [{ deviationDays: 0, benefit: -4 }]
    };
  }
  if (name === "Magic Pill") {
    return {
      rateExpire: 0,
      limitMax: 50,
      benefit: 0,
      resetBenefitAfterExpire: false,
      steps: []
    };
  }
  if (name === "Herbal Tea") {
    return {
      rateExpire: -1,
      limitMax: 50,
      benefit: 1,
      resetBenefitAfterExpire: false,
      steps: [{ deviationDays: 0, benefit: 2 }]
    };
  }
  if (name === "Fervex") {
    return {
      rateExpire: -1,
      limitMax: 50,
      benefit: 1,
      resetBenefitAfterExpire: true,
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
    resetBenefitAfterExpire: false,
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
}
