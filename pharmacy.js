export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

const updateDrug = (drug) => {
  const { name } = drug;
  let { expiresIn, benefit } = drug;
  if (name != "Herbal Tea" && name != "Fervex") {
    if (benefit > 0) {
      if (name != "Magic Pill") {
        if (name === "Dafalgan") {
          benefit = benefit - 2;
        } else {
          benefit = benefit - 1;
        }
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
            if (name === "Dafalgan") {
              benefit = benefit - 2;
            } else {
              benefit = benefit - 1;
            }
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

  return {
    name,
    benefit,
    expiresIn,
  };
};

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs = this.drugs.map((drug) => updateDrug(drug));
    return this.drugs;
  }
}
