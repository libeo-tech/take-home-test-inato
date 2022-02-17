export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}
const maxBenefit = 50;
const minBenefit = 0;

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  BenefitplusOne(drug){
    if(drug.benefit <= 49){
      drug.benefit = drug.benefit+1;
    }else{
      drug.benefit = maxBenefit;
    }
  }

  BenefitplusTwo(drug){
    if(drug.benefit <= 48){
      drug.benefit = drug.benefit+2;
    }else{
      drug.benefit = maxBenefit;
    }
  }

  BenefitplusThree(drug){
    if(drug.benefit <= 47){
      drug.benefit = drug.benefit+3;
    }else{
      drug.benefit = maxBenefit;
    }
  }

  BenefitminusOne(drug){
    if(drug.benefit >= 1){
      drug.benefit = drug.benefit - 1;
    }else{
      drug.benefit = minBenefit;
    }
  }

  BenefitminusTwo(drug){
    if(drug.benefit >= 2){
      drug.benefit = drug.benefit - 2;
    }else{
      drug.benefit = minBenefit;
    }
  }

  BenefitminusFour(drug){
    if(drug.benefit >= 4){
      drug.benefit = drug.benefit - 4;
    }else{
      drug.benefit = minBenefit;
    }
  }

  Default(drug) {
    if (drug.expiresIn > 0) {
      this.BenefitplusOne(drug);
    } else {
      this.BenefitminusTwo(drug);
    }
    drug.expiresIn--;
  }

  HerbalTea(drug){
    if (drug.expiresIn > 0) {
      this.BenefitplusOne(drug);
    } else {
      this.BenefitplusTwo(drug);
    }
    drug.expiresIn =  drug.expiresIn -1 ;
  }

  MagicPill(drug){

  }

  Fervex(drug){
    if (drug.expiresIn >= 11) {
      this.BenefitplusOne(drug);
    } else if (drug.expiresIn >= 6 && drug.expiresIn <= 10) {
      this.BenefitplusTwo(drug);
    } else if (drug.expiresIn >= 1 && drug.expiresIn <= 5) {
      this.BenefitplusThree(drug);
    } else {
      drug.benefit = minBenefit;
    }
    drug.expiresIn--;
  }

  Dafalgan(drug){
    if (drug.expiresIn > 0) {
      this.BenefitminusTwo(drug);
    } else {
      this.BenefitminusFour(drug);
    }
    drug.expiresIn--;
  }
  
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if(this.drugs[i].name == "Herbal Tea"){
        this.HerbalTea(this.drugs[i]);
      }else if(this.drugs[i].name == "Magic Pill"){
        this.MagicPill(this.drugs[i]);
      }else if(this.drugs[i].name == "Fervex"){
        this.Fervex(this.drugs[i]);
      }else if(this.drugs[i].name == "Dafalgan"){
        this.Dafalgan(this.drugs[i]);
      }else{
        this.Default(this.drugs[i]);
      }
    }
    return this.drugs;
  }
}
