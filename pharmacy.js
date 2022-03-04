const Doliprane = "Doliprane";
const HerbalTea = "Herbal Tea";
const Fervex = "Fervex";
const MagicPill = "Magic Pill";
const Dafalgan = "Dafalgan";

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  degrade(decreaseFactor = 1, direction = -1) {
    this.expiresIn -= 1;
    this.benefit += decreaseFactor * direction;

    if (this.benefit <= 0) {
      this.benefit = 0 // benefit cannot be negative
    } else if (this.benefit > 50) {
      this.benefit = 50 // cannot be > 50
    }
  }

  update() {
  
    if (this.name == MagicPill) {
      this.expiresIn = this.expiresIn;
      this.benefit = this.benefit;
    } else if (this.name == Fervex || this.name == HerbalTea) {
      if (this.expiresIn < 11 && this.expiresIn < 6) {
        this.degrade(2, 1)
      } else if (this.expiresIn <= 5 && this.expiresIn >= 0) {
        degrade(3, 1)
      } else {
        this.degrade(0, 1);
      }
    } else {
      // Catch every other drugs
      let factor = this.expiresIn < 0 ? 2 : 1;
      this.degrade(factor)
    }
    
    return this;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    return this.drugs.map(drug => drug.update());
  }
    

}
