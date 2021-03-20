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
    for (let drug of this.drugs) {
      if (drug.name != "Magic Pill") {
        drug.expiresIn -= 1;
        switch (drug.name) {
          case "Herbal Tea":
            this.herbalTeaUpdate(drug);
            break;
          case "Fervex":
            this.fervexUpdate(drug);
            break;
          case "Dafalgan":
            this.dafalganUpdate(drug);
            break;
          default:
            this.normalUpdate(drug);
        }
      }
    }
    return this.drugs;
  }

  normalUpdate(drug) {
    if (drug.benefit > 0 && drug.benefit <= 50)
      drug.benefit -= 1;
  }

  herbalTeaUpdate(drug) {
    if (drug.expiresIn < 0)
      drug.benefit += 2;
    else
      drug.benefit += 1;

    if (drug.benefit > 50)
      drug.benefit = 50;
  }

  fervexUpdate(drug) {
    if (drug.expiresIn < 0)
      drug.benefit = 0
    else if (drug.expiresIn <= 5)
      drug.benefit += 3;
    else if (drug.expiresIn <= 10)
      drug.benefit += 2;
    else
      drug.benefit += 1;

    if (drug.benefit > 50)
      drug.benefit = 50;
  }

  dafalganUpdate(drug) {
    drug.benefit -= 2;
    if (drug.benefit < 0)
      drug.benefit = 0;
  }
}
