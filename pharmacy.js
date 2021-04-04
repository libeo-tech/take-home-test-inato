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
    //benefit can decrease or increase, benefit of never negative nor more than 50
    function decrease(drug) {
      if (drug.benefit > 0) {
        drug.benefit--;
      }
    }
    function increase(drug) {
      if (drug.benefit < 50) {
        drug.benefit++;
      }
    }
    //There are Normal Drugs(Doliprane) and Special Drugs(Herbal Tea, Fervex, Magic Pill, Dafalgan)
    var normalDrugs = function(drug) {
      decrease(drug);
      if (drug.expiresIn <= 0) {
        decrease(drug);
      }
      drug.expiresIn--;
    };
    var herbalTea = function(drug) {
      increase(drug);
      if (drug.expiresIn <= 0) {
        increase(drug);
      }
      drug.expiresIn--;
    };
    var magicPill = function(drug) {
      drug;
    };
    var fervex = function(drug) {
      increase(drug);
      if (drug.expiresIn < 11) {
        increase(drug);
      }
      if (drug.expiresIn < 6) {
        increase(drug);
      }
      if (drug.expiresIn <= 0) {
        drug.benefit = 0;
      }
      drug.expiresIn--;
    };
    var dafalgan = function(drug) {
      decrease(drug);
      decrease(drug);
      if (drug.expiresIn <= 0) {
        decrease(drug);
        decrease(drug);
      }
      drug.expiresIn--;
    };
    //Go through the drugs,different type of drugs have different actions
    this.drugs.map((drug) => {
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
