export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  setBenefit(newValue) {
    if (newValue <= 50 && newValue >= 0) {
      this.benefit = newValue;
    }
  }

  decrementExpiresIn() {
    if (this.expiresIn > 0) {
      this.expiresIn = this.expiresIn - 1;
    }
  }

  aDayHasPassed() {
    this.updateBenefit();
    this.decrementExpiresIn();
  }

  updateBenefit() {
    if (this.expiresIn > 0) {
      this.setBenefit(this.benefit - 1);
    } else {
      this.setBenefit(this.benefit - 2);
    }
  }
}

export class HerbalTeaDrug extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
  }

  updateBenefit() {
    if (this.expiresIn > 0) {
      this.setBenefit(this.benefit + 1);
    } else {
      this.setBenefit(this.benefit + 2);
    }
  }
}

export class MagicPillDrug extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
  }

  updateBenefit() {
    // Nop
  }
}

export class FervexDrug extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
  }

  updateBenefit() {
    if (this.expiresIn > 10) {
      this.setBenefit(this.benefit + 1);
    } else if (this.expiresIn > 5) {
      this.setBenefit(this.benefit + 2);
    } else if (this.expiresIn > 0) {
      this.setBenefit(this.benefit + 3);
    } else {
      this.setBenefit(0);
    }
  }
}

export class DafalganDrug extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
  }

  updateBenefit() {
    if (this.expiresIn > 0) {
      this.setBenefit(this.benefit - 2);
    } else {
      this.setBenefit(this.benefit - 4);
    }
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = [];

    drugs.forEach(drug => {
      if (drug.name === "Herbal Tea") {
        this.drugs.push(
          new HerbalTeaDrug(drug.name, drug.expiresIn, drug.benefit)
        );
      } else if (drug.name === "Magic Pill") {
        this.drugs.push(
          new MagicPillDrug(drug.name, drug.expiresIn, drug.benefit)
        );
      } else if (drug.name === "Fervex") {
        this.drugs.push(
          new FervexDrug(drug.name, drug.expiresIn, drug.benefit)
        );
      } else if (drug.name === "Dafalgan") {
        this.drugs.push(
          new DafalganDrug(drug.name, drug.expiresIn, drug.benefit)
        );
      } else {
        this.drugs.push(drug);
      }
    });
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].aDayHasPassed();
    }

    return this.drugs;
  }
}
