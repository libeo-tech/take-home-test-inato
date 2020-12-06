export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  // Define benefits limit value

  static get MAX_BENEFITS() {
    return 50;
  }
  static get MIN_BENEFITS() {
    return 0;
  }

  // Benefits update functions

  increaseBenefit = (value) => {
    this.benefit += value;
    if (this.benefit > Drug.MAX_BENEFITS) this.benefit = Drug.MAX_BENEFITS;
  };
  decreaseBenefit = (value) => {
    this.benefit -= value;
    if (this.benefit < Drug.MIN_BENEFITS) this.benefit = Drug.MIN_BENEFITS;
  };
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (
        this.drugs[i].name != 'Herbal Tea' &&
        this.drugs[i].name != 'Fervex'
      ) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name != 'Magic Pill') {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name == 'Fervex') {
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
      if (this.drugs[i].name != 'Magic Pill') {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != 'Herbal Tea') {
          if (this.drugs[i].name != 'Fervex') {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != 'Magic Pill') {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
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
