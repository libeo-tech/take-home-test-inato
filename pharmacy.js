export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  updateExpiresIn() {
    if (this.expiresIn > 0) this.expiresIn--;
  }
  /*
   * Default Behaviour of a drug when updating its benefit
   */
  updateBenefit() {
    if (this.benefit >= 0 || this.benefit <= 50) {
      if (this.benefit === 0) {
        this.removeFromBenefit(2);
      } else {
        this.removeFromBenefit(1);
      }
    }
  }

  addToBenefit(toAdd) {
    if (this.benefit + toAdd > 50) {
      this.benefit = 50;
    } else {
      this.benefit += toAdd;
    }
  }

  removeFromBenefit(toRemove) {
    if (this.benefit - toRemove < 0) {
      this.benefit = 0;
    } else {
      this.benefit -= toRemove;
    }
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      this.updateDrug(this.drugs[i]);
    }
    return this.drugs;
  }

  updateDrug(drug) {
    if (drug.name !== "Magic Pill") {
      switch (drug.name) {
        case "Herbal Tea":
          drug.updateExpiresIn();
          if (drug.expiresIn === 0) {
            drug.addToBenefit(2);
          } else {
            drug.addToBenefit(1);
          }
          break;
        case "Fervex":
          drug.updateExpiresIn();
          if (drug.expiresIn > 0) {
            if (drug.expiresIn <= 10) {
              if (drug.expiresIn <= 5) {
                drug.addToBenefit(3);
              } else {
                drug.addToBenefit(2);
              }
            } else {
              drug.addToBenefit(1);
            }
          } else {
            drug.benefit = 0;
          }
          break;
        case "Dafalgan":
          drug.updateExpiresIn();
          if (drug.expiresIn === 0) {
            drug.removeFromBenefit(4);
          } else {
            drug.removeFromBenefit(2);
          }
          break;
        default:
          drug.updateExpiresIn();
          drug.updateBenefit();
          break;
      }
    }
  }
}
