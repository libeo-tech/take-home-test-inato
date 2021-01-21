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
    for (var drugIndex = 0; drugIndex < this.drugs.length; drugIndex++) {
      this.updateDrugBenefitValue(drugIndex, this.drugs[drugIndex].name);
    }
    return this.drugs;
  }

  updateDrugBenefitValue(drugIndex, drugName) {
    var drugExpiresIn = this.drugs[drugIndex].expiresIn;

    switch (drugName) {
      case "Magic Pill":
        break;

      case "Fervex":
        if (drugExpiresIn > 10) {
          this.drugs[drugIndex].benefit += 1;
        } else if (drugExpiresIn <= 10 && drugExpiresIn > 5) {
          this.drugs[drugIndex].benefit += 2;
        } else if (drugExpiresIn <= 5 && drugExpiresIn > 0) {
          this.drugs[drugIndex].benefit += 3;
        } else if (drugExpiresIn <= 0) {
          this.drugs[drugIndex].benefit = 0;
        }
        this.drugs[drugIndex].expiresIn -= 1;
        // Treating the case of befinit getting higher than 50
        if (this.drugs[drugIndex].benefit >= 50) {
          this.drugs[drugIndex].benefit = 50;
          break;
        }
        break;

      case "Herbal Tea":
        if (drugExpiresIn > 0) {
          this.drugs[drugIndex].benefit += 1;
        } else {
          this.drugs[drugIndex].benefit += 2;
        }
        this.drugs[drugIndex].expiresIn -= 1;
        // Treating the case of befinit getting higher than 50
        if (this.drugs[drugIndex].benefit >= 50) {
          this.drugs[drugIndex].benefit = 50;
          break;
        }
        break;

      case "Dafalgan":
        if (drugExpiresIn > 0) {
          this.drugs[drugIndex].benefit -= 2;
        } else {
          this.drugs[drugIndex].benefit -= 4;
        }

        this.drugs[drugIndex].expiresIn -= 1;
        // Treating the case of befinit getting lower than 0
        if (this.drugs[drugIndex].benefit <= 0) {
          this.drugs[drugIndex].benefit = 0;
          break;
        }
        break;

      default:
        if (drugExpiresIn > 0) {
          this.drugs[drugIndex].benefit -= 1;
        } else {
          this.drugs[drugIndex].benefit -= 2;
        }
        this.drugs[drugIndex].expiresIn -= 1;
        // Treating the case of befinit getting lower than 0
        if (this.drugs[drugIndex].benefit <= 0) {
          this.drugs[drugIndex].benefit = 0;
          break;
        }
    }
  }
}
