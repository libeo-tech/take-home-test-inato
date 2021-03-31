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
  updateExpiresIn() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (this.drugs[i].name === "Magic Pill") {
        // magic pill never expire
        continue;
      }
      this.drugs[i].expiresIn -= 1;
    }
    return this.drugs;
  }
  updateBenefitValueNew() {
    for (var i = 0; i < this.drugs.length; i++) {
      // benefit cant be negative
      if (this.drugs[i].benefit === 0 && this.drugs[i].name != "Herbal Tea") {
        continue;
      }
      // benefit cant be more than 50
      if (this.drugs[i].benefit === 50) {
        continue;
      }
      if (this.drugs[i].name === "Magic Pill") {
        // magic pill never decrease benefit
        continue;
      }
      if (this.drugs[i].name === "Herbal Tea") {
        // herbal tea increase
        if (this.drugs[i].expiresIn < 0) {
          this.drugs[i].benefit += 2;
          continue;
        } else {
          this.drugs[i].benefit += 1;
        }
        continue;
      }
      // benefit decrease twice fast if expired
      if (this.drugs[i].expiresIn < 0) {
        this.drugs[i].benefit -= 2;
        continue;
      } else {
        this.drugs[i].benefit -= 1;
      }
    }
    return this.drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (
        this.drugs[i].name != "Herbal Tea" &&
        this.drugs[i].name != "Fervex"
      ) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name != "Magic Pill") {
            // apply to all - BENEFIT
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
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
              if (this.drugs[i].name != "Magic Pill") {
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
