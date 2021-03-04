class DrugBehavior {
  updateValues(name, benefit, expiresIn) {
    if (name != "Herbal Tea" && name != "Fervex") {
      if (benefit > 0) {
        if (name != "Magic Pill") {
          benefit = benefit - 1;
        }
      }
    } else {
      if (benefit < 50) {
        benefit = benefit + 1;
        if (name == "Fervex") {
          if (expiresIn < 11) {
            if (benefit < 50) {
              benefit = benefit + 1;
            }
          }
          if (expiresIn < 6) {
            if (benefit < 50) {
              benefit = benefit + 1;
            }
          }
        }
      }
    }
    if (name != "Magic Pill") {
      expiresIn = expiresIn - 1;
    }
    if (expiresIn < 0) {
      if (name != "Herbal Tea") {
        if (name != "Fervex") {
          if (benefit > 0) {
            if (name != "Magic Pill") {
              benefit = benefit - 1;
            }
          }
        } else {
          benefit = benefit - benefit;
        }
      } else {
        if (benefit < 50) {
          benefit = benefit + 1;
        }
      }
    }
    return { benefit, expiresIn };
  }
}

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.behavior = new DrugBehavior();
  }

  elapseDay() {
    const { benefit, expiresIn } = this.behavior.updateValues(
      this.name,
      this.benefit,
      this.expiresIn
    );
    this.benefit = benefit;
    this.expiresIn = expiresIn;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach((drug) => drug.elapseDay());
    return this.drugs;
  }

  toOutput() {
    return this.drugs.map(({ name, expiresIn, benefit }) => ({
      name,
      expiresIn,
      benefit,
    }));
  }
}
