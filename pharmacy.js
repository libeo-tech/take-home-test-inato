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
    var normalDrugs = function(drug) {
      if (drug.benefit > 0) {
        drug.benefit--;
        if (drug.expiresIn <= 0 && drug.benefit > 0) {
          drug.benefit--;
        }
      }
      drug.expiresIn--;
    };
    var herbalTea = function(drug) {
      if (drug.benefit < 50) {
        drug.benefit++;
        if (drug.expiresIn <= 0 && drug.benefit < 50) {
          drug.benefit++;
        }
      }
      drug.expiresIn--;
    };
    var magicPill = function(drug) {
      drug;
    };
    var fervex = function(drug) {
      if (drug.benefit < 50) {
        drug.benefit++;
        if (drug.expiresIn < 11 && drug.benefit < 50) {
          drug.benefit++;
        }
        if (drug.expiresIn < 6 && drug.benefit < 50) {
          drug.benefit++;
        }
        if (drug.expiresIn <= 0) {
          drug.benefit = 0;
        }
      }
      drug.expiresIn--;
    };
    var dafalgan = function(drug) {
      if (drug.benefit > 0) {
        drug.benefit--;
        if (drug.benefit > 0) {
          drug.benefit--;
          if (drug.expiresIn <= 0 && drug.benefit > 0) {
            drug.benefit--;
            if (drug.benefit > 0) {
              drug.benefit--;
            }
          }
        }
      }
      drug.expiresIn--;
    };

    this.drugs.map(drug => {
      if (drug.name == "Herbal Tea") {
        herbalTea(drug);
      } else if (drug.name == "Magic Pill") {
        magicPill(drug);
      } else if (drug.name == "Fervex") {
        fervex(drug);
      } else if (drug.name == "Dafalgan") {
        dafalgan(drug);
      } else {
        normalDrugs(drug);
      }
    });
    return this.drugs;
  }
}
