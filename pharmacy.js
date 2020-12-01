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
    for (var i = 0; i < this.drugs.length; i++) {
        const { name, expiresIn, benefit } = this.drugs[i];
        const hasExpired = expiresIn <= 0;
        
        if (name === 'Herbal Tea') {
          this.drugs[i].benefit = hasExpired ? benefit + 2 : benefit + 1;

        } else if (name === 'Fervex') {
          this.drugs[i].benefit = benefit + 1;
          if (expiresIn < 6) this.drugs[i].benefit = benefit + 3;
          if (expiresIn < 11) this.drugs[i].benefit = benefit + 2;
          if (hasExpired) this.drugs[i].benefit = 0;

        } else if (name === 'Dafalgan') {
          this.drugs[i].benefit = benefit - 2;

        }  else if (name === 'Magic Pill') {
          this.drugs[i].benefit = benefit;
          this.drugs[i].expiresIn = expiresIn;

        } else {
          this.drugs[i].benefit = benefit - 1;
        }

        this.drugs[i].expiresIn = expiresIn - 1;
        if (this.drugs[i].expiresIn < 0) this.drugs[i].expiresIn = 0;
        if (this.drugs[i].benefit < 0) this.drugs[i].benefit = 0;
        if (this.drugs[i].benefit > 50) this.drugs[i].benefit = 50;

      }
      return this.drugs
  }

}
