export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue() {
    if (this.name != "Herbal Tea" && this.name != "Fervex") {
      // benefit decrease for normal drugs
      if (this.benefit > 0) {
        if (this.name != "Magic Pill") {
          this.benefit = this.benefit - 1;
        }
      }
    } else {
      if (this.benefit < 50) {
        // benefit increase for "Herbal Tea" and "Fervex"
        this.benefit = this.benefit + 1;
        // benefit increase special cases for "Fervex"
        if (this.name == "Fervex") {
          if (this.expiresIn < 11) {
            if (this.benefit < 50) {
              this.benefit = this.benefit + 1;
            }
          }
          if (this.expiresIn < 6) {
            if (this.benefit < 50) {
              this.benefit = this.benefit + 1;
            }
          }
        }
      }
    }
    // expiresIn update
    if (this.name != "Magic Pill") {
      this.expiresIn = this.expiresIn - 1;
    }
    if (this.expiresIn < 0) {
      if (this.name != "Herbal Tea") {
        if (this.name != "Fervex") {
          // benefit decrease for normal drugs after expiration
          if (this.benefit > 0) {
            if (this.name != "Magic Pill") {
              this.benefit = this.benefit - 1;
            }
          }
        } else {
          // benefit set to 0 for "Fervex" after expiration
          this.benefit = this.benefit - this.benefit;
        }
      } else {
        // benefit increase for "Herbal Tea" after expiration
        if (this.benefit < 50) {
          this.benefit = this.benefit + 1;
        }
      }
    }
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateBenefitValue();
    }

    return this.drugs;
  }
}
