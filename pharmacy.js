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


}
