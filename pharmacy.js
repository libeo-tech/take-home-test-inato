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
  updateDrug(drug) {
    const { name } = drug;
    let { expiresIn, benefit } = drug;
    if (name != "Herbal Tea" && name != "Fervex") {
      if (benefit > 0) {
        if (name != "Magic Pill") {
          if (name === "Dafalgan") {
            benefit -= 2;
          } else {
            benefit -= 1;
          }
        }
      }
    } else {
      if (benefit < 50) {
        benefit += 1;
        if (name == "Fervex") {
          if (expiresIn < 11) {
            if (benefit < 50) {
              benefit += 1;
            }
          }
          if (expiresIn < 6) {
            if (benefit < 50) {
              benefit += 1;
            }
          }
        }
      }
    }
    if (name != "Magic Pill") {
      expiresIn -= 1;
    }
    // TODO: It's almost the same code as above, maybe there is a way to improve it...
    if (expiresIn < 0) {
      if (name != "Herbal Tea") {
        if (name != "Fervex") {
          if (benefit > 0) {
            if (name != "Magic Pill") {
              if (name === "Dafalgan") {
                benefit -= 2;
              } else {
                benefit -= 1;
              }
            }
          }
        } else {
          benefit = 0;
        }
      } else {
        if (benefit < 50) {
          benefit += 1;
        }
      }
    }

    return {
      name,
      benefit,
      expiresIn,
    };
  }

  updateBenefitValue() {
    this.drugs = this.drugs.map((drug) => this.updateDrug(drug));
    return this.drugs;
  }
}
