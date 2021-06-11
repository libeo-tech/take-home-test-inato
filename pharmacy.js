export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  /**
  * Increase the benefit of the drug by the given param value
  * A benefit is never more than 50
  * @param  {Number} increasValue the number to increase the benefit by
  * @return {Number}      the new benefit number
  */
  increaseBenefitValue( increasValue){
    var newValue = this.benefit + increasValue
    this.benefit =  newValue  <=  50  ? newValue : 50
    return this.benefit;
  }
  /**
  * Decrease the benefit of the drug by the given param value
  * A benefit is never more less than 0
  * @param  {Number} decreaseValue the number to decrease the benefit by
  * @return {Number}      the new benefit number
  */
  decreaseBenefitValue(decreaseValue ){
    var newValue = this.benefit - decreaseValue
    this.benefit =  newValue  >=  0  ? newValue : 0
    return this.benefit;
  }
  /**
  * Decrease the expiration date of the drug by 1
  * @return {Number}      the new expiration date of the drug 
  */
  decreaseExpirationDate(){
    this.expiresIn -= 1;
    return this.expiresIn ;
  }
  /**
  * Set the benefit of a drug to ZERO
  * @return {Number}      the new benefit of the drug 
  */
  dropBenefitToZero(){
    this.benefit = 0;
    return this.benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  /**
  * Update  the benefit and the expiration date  of the list of drugs in the pharmacy
  * A benefit is never  less than 0 or more than 50
  * Find more about this function in the Readme.md
  * @return {Array<Drug>}      the  updated list of drugs of the pharmacy
  */

  updateBenefitValue(){
    for (var i = 0; i < this.drugs.length; i++){
      if (this.drugs[i].name != "Magic Pill") {
        this.drugs[i].decreaseExpirationDate()
      }
      switch (this.drugs[i].name) {
        case "Herbal Tea":
          if(this.drugs[i].expiresIn < 0 ){
            this.drugs[i].increaseBenefitValue(2);
          }
          else{
            this.drugs[i].increaseBenefitValue(1);
          }
          break;
        case "Fervex":
          if (this.drugs[i].expiresIn < 11 && this.drugs[i].expiresIn >= 6 ) {
            this.drugs[i].increaseBenefitValue(2);
          }
          if (this.drugs[i].expiresIn < 6 && this.drugs[i].expiresIn >= 0 ) {
            this.drugs[i].increaseBenefitValue(3);
          }
          if (this.drugs[i].expiresIn < 0){ 
            this.drugs[i].dropBenefitToZero();
          }
        
          break;
        case "Magic Pill":
          continue;
        case "Dafalgan":
          if(this.drugs[i].expiresIn >= 0 ){
            this.drugs[i].decreaseBenefitValue(2);
          }
          else {
            this.drugs[i].decreaseBenefitValue(4);
          }
          break;
        default:
          if(this.drugs[i].expiresIn >= 0 ){
            this.drugs[i].decreaseBenefitValue(1);
          }
          else {
            this.drugs[i].decreaseBenefitValue(2);
          }
          break;
      }
    }
    return this.drugs;
  }
}
