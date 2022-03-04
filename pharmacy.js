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
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {

  }
    

}
