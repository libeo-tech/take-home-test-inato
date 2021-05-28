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

  calculateDefault(drug) {
    let { name, expiresIn, benefit } = drug;
    let degradeValue = 1;

    if (expiresIn <= 0) {
      degradeValue = 2;
    }

    benefit = benefit >= degradeValue ? benefit - degradeValue : 0;
    expiresIn--;

    return new Drug(name, expiresIn, benefit);
  }

  calculateDafalgan(drug) {
    let { name, expiresIn, benefit } = drug;
    let degradeValue = 2;

    if (expiresIn <= 0) {
      degradeValue = 4;
    }

    benefit = benefit >= degradeValue ? benefit - degradeValue : 0;
    expiresIn--;

    return new Drug(name, expiresIn, benefit);
  }

  calculateFervex(drug) {
    let { name, expiresIn, benefit } = drug;

    if (expiresIn > 10) {
      benefit++;
    } else if (expiresIn > 5 && expiresIn <= 10) {
      benefit = benefit + 2;
    } else if (expiresIn > 0 && expiresIn <= 5) {
      benefit = benefit + 3;
    } else {
      benefit = 0;
    }

    expiresIn--;

    return new Drug(name, expiresIn, benefit);
  }

  calculateHerbalTea(drug) {
    let { name, expiresIn, benefit } = drug;

    if (expiresIn > 0) {
      benefit++;
    } else {
      benefit = benefit + 2;
    }

    expiresIn--;

    return new Drug(name, expiresIn, benefit);
  }

  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      switch (this.drugs[i].name) {
        case "Dafalgan":
          this.drugs[i] = this.calculateDafalgan(this.drugs[i]);
          break;
        case "Fervex":
          this.drugs[i] = this.calculateFervex(this.drugs[i]);
          break;
        case "Herbal Tea":
          this.drugs[i] = this.calculateHerbalTea(this.drugs[i]);
          break;
        case "Magic Pill":
          break;
        default:
          this.drugs[i] = this.calculateDefault(this.drugs[i]);
          break;
      }
    }

    return this.drugs;
  }
}
