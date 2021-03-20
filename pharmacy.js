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
          if (this.drugs[i].name != "Magic Pill") {
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

  updateBenefitValue2() {
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
          default:
            this.normalUpdate(drug);
        }
      }
    }
    return this.drugs;
  }

  normalUpdate(drug) {
    if (drug.benefit > 0 && drug.benefit < 50)
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
}
