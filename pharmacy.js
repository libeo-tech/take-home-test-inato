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
  decrease = drug => {
    if (drug.benefit > 0) {
      drug.benefit--;
    }
  };
  increase = drug => {
    if (drug.benefit < 50) {
      drug.benefit++;
    }
  };
  //There are Normal Drugs(Doliprane) and Special Drugs(Herbal Tea, Fervex, Magic Pill, Dafalgan)
  //Defined rules for different type of drugs
  normalDrugs = drug => {
    this.decrease(drug);
    if (drug.expiresIn <= 0) {
      this.decrease(drug);
    }
    drug.expiresIn--;
  };

  herbalTea = drug => {
    this.increase(drug);
    if (drug.expiresIn <= 0) {
      this.increase(drug);
    }
    drug.expiresIn--;
  };

  magicPill = drug => {
    drug;
  };

  fervex = drug => {
    this.increase(drug);
    if (drug.expiresIn < 11) {
      this.increase(drug);
    }
    if (drug.expiresIn < 6) {
      this.increase(drug);
    }
    if (drug.expiresIn <= 0) {
      drug.benefit = 0;
    }
    drug.expiresIn--;
  };

  dafalgan = drug => {
    this.decrease(drug);
    this.decrease(drug);
    if (drug.expiresIn <= 0) {
      this.decrease(drug);
      this.decrease(drug);
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
