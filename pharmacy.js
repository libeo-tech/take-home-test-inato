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

  updateExpireIn(drug){
    if(drug.expiresIn){
      drug.expiresIn -= 1;
    }
  }

  updateBenefitDefault(drug, coeff){
      if(!drug.expiresIn){
        coeff *= 2;
      }
      drug.benefit = Math.max(drug.benefit - coeff, 0);
      drug.benefit = Math.min(drug.benefit, 50);
  }

  updateBenefitFervex(drug){
    if(drug.expiresIn === 0){
      drug.benefit = 0;
    }
    else if(drug.expiresIn <= 5){
      drug.benefit = Math.min(drug.benefit + 3, 50)
    }
    else if(drug.expiresIn <= 10){
      drug.benefit = Math.min(drug.benefit + 2, 50)
    }
    else{
      drug.benefit = Math.min(drug.benefit + 1, 50)
    }
  }

  updateBenefitValue(){
    for (var i = 0; i < this.drugs.length; i++) {
      switch (this.drugs[i].name) {
        case "Herbal Tea":
          this.updateBenefitDefault(this.drugs[i], Number(-1))
          this.updateExpireIn(this.drugs[i])
          break;

        case "Fervex":
          this.updateBenefitFervex(this.drugs[i])
          this.updateExpireIn(this.drugs[i])
          break;

        case "Magic Pill":
          break;

        case "Dafalgan":
          this.updateBenefitDefault(this.drugs[i], Number(2))
          this.updateExpireIn(this.drugs[i])
          break;

        default:
          this.updateBenefitDefault(this.drugs[i], Number(1))
          this.updateExpireIn(this.drugs[i])
          break;
      }
    }
    return this.drugs;
  }
}
