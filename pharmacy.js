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
  //benefit can decrease or increase, benefit of never negative nor more than 50
  decrease = (drug, changeBenefit) => {
    if (drug.benefit > 0) {
      drug.benefit = Math.max(drug.benefit - changeBenefit, 0);
    }
  };
  increase = (drug, changeBenefit) => {
    if (drug.benefit < 50) {
      drug.benefit = Math.min(drug.benefit + changeBenefit, 50);
    }
  };
  //There are Normal Drugs(Doliprane) and Special Drugs(Herbal Tea, Fervex, Magic Pill, Dafalgan)
  //Defined rules for different type of drugs
  normalDrugs = drug => {
    if (drug.expiresIn > 0) {
      this.decrease(drug, 1);
    } else {
      this.decrease(drug, 2);
    }
    drug.expiresIn--;
  };

  herbalTea = drug => {
    if (drug.expiresIn > 0) {
      this.increase(drug, 1);
    } else {
      this.increase(drug, 2);
    }
    drug.expiresIn--;
  };

  magicPill = drug => {
    drug;
  };

  fervex = drug => {
    if (drug.expiresIn > 10) {
      this.increase(drug, 1);
    } else if (drug.expiresIn <= 10 && drug.expiresIn > 5) {
      this.increase(drug, 2);
    } else if (drug.expiresIn <= 5 && drug.expiresIn > 0) {
      this.increase(drug, 3);
    } else if (drug.expiresIn <= 0) {
      drug.benefit = 0;
    }
    drug.expiresIn--;
  };

  dafalgan = drug => {
    if (drug.expiresIn > 0) {
      this.decrease(drug, 2);
    } else {
      this.decrease(drug, 4);
    }
    drug.expiresIn--;
  };

  updateBenefitValue() {
    //Go through the drugs,different type of drugs have different actions
    this.drugs.map(drug => {
      if (drug.name === "Herbal Tea") {
        this.herbalTea(drug);
      } else if (drug.name === "Magic Pill") {
        this.magicPill(drug);
      } else if (drug.name === "Fervex") {
        this.fervex(drug);
      } else if (drug.name === "Dafalgan") {
        this.dafalgan(drug);
      } else {
        this.normalDrugs(drug);
      }
    });
    return this.drugs;
  }
}
