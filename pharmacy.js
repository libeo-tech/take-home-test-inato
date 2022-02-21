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

  updateHerbalTea(i) {

    if (this.drugs[i].name != "Herbal Tea") throw new Error('Not the correct Drug update!');

    this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;

    if(this.drugs[i].expiresIn < 0) {
      this.drugs[i].benefit += 2;
    } else {
      this.drugs[i].benefit += 1;
    }

    if(this.drugs[i].benefit > 50) {
      this.drugs[i].benefit = 50;
    }
  

  }

  updateFervex(i) {

    if (this.drugs[i].name != "Fervex") throw new Error('Not the correct Drug update!');

    this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;

    this.drugs[i].benefit += 1;

    if(this.drugs[i].expiresIn <= 10) {
      this.drugs[i].benefit += 1;
    }

    if(this.drugs[i].expiresIn <= 5) {
      this.drugs[i].benefit += 1;
    }

    if(this.drugs[i].expiresIn < 0) {
      this.drugs[i].benefit = 0;
    }

    if(this.drugs[i].benefit > 50) {
      this.drugs[i].benefit = 50;
    }
  }

  updateRegularDrug(i) {

    this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;

    this.drugs[i].benefit -= 1;

    if(this.drugs[i].expiresIn < 0) {
      this.drugs[i].benefit -= 1;
    }

    if(this.drugs[i].benefit < 0) {
      this.drugs[i].benefit = 0;
    }
  }

  updateBenefitValue() {

    for (var i = 0; i < this.drugs.length; i++) {
      switch(this.drugs[i].name) {

        case "Herbal Tea":
          this.updateHerbalTea(i);
          break;
        
        case "Fervex":
          this.updateFervex(i);
          break;

        case "Magic Pill":
          break;

        default:
          this.updateRegularDrug(i);

      }
    }

    return this.drugs;
  }

}
