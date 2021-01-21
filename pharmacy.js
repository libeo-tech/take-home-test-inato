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
      var drugName = this.drugs[i].name;

      switch (drugName) {
        case "Magic Pill":
          break;

        case "Herbal Tea":
          this.updateItemBenefitValue(i, drugName);

          // Treating the case of befinit getting higher than 50
          if (this.drugs[i].benefit >= 50) {
            this.drugs[i].benefit = 50;
            break;
          }
          break;

        case "Fervex":
          this.updateItemBenefitValue(i, drugName);

          // Treating the case of befinit getting higher than 50
          if (this.drugs[i].benefit >= 50) {
            this.drugs[i].benefit = 50;
            break;
          }
          break;

        case "Dafalgan":
          this.updateItemBenefitValue(i, drugName);

          // Treating the case of befinit getting lower than 0
          if (this.drugs[i].benefit <= 0) {
            this.drugs[i].benefit = 0;
            break;
          }

          break;

        default:
          this.updateItemBenefitValue(i, drugName);

          // Treating the case of befinit getting lower than 0
          if (this.drugs[i].benefit <= 0) {
            this.drugs[i].benefit = 0;
            break;
          }
      }
    }

    return this.drugs;
  }

  updateItemBenefitValue(i, drugName) {
    switch (drugName) {
      case "Fervex":
        if (this.drugs[i].expiresIn > 10) {
          this.drugs[i].benefit += 1;
        } else if (
          this.drugs[i].expiresIn <= 10 &&
          this.drugs[i].expiresIn > 5
        ) {
          this.drugs[i].benefit += 2;
        } else if (
          this.drugs[i].expiresIn <= 5 &&
          this.drugs[i].expiresIn > 0
        ) {
          this.drugs[i].benefit += 3;
        } else if (this.drugs[i].expiresIn <= 0) {
          this.drugs[i].benefit = 0;
        }

        this.drugs[i].expiresIn -= 1;
        break;

      case "Herbal Tea":
        if (this.drugs[i].expiresIn > 0) {
          this.drugs[i].benefit += 1;
        } else {
          this.drugs[i].benefit += 2;
        }
        this.drugs[i].expiresIn -= 1;
        break;

      case "Dafalgan":
        if (this.drugs[i].expiresIn > 0) {
          this.drugs[i].benefit -= 2;
        } else {
          this.drugs[i].benefit -= 4;
        }

        this.drugs[i].expiresIn -= 1;
        break;

      default:
        if (this.drugs[i].expiresIn > 0) {
          this.drugs[i].benefit -= 1;
        } else {
          this.drugs[i].benefit -= 2;
        }

        this.drugs[i].expiresIn -= 1;
        break;
    }
  }
}
