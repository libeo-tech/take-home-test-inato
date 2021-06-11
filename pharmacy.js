const BENEFIT_MAX = 50;
const BENEFIT_MIN = 0;

export class Drug {
  constructor({name, expiresIn, benefit}) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  /**
  * Increase the benefit of the drug by the given param value
  * A benefit is never more than BENEFIT_MAX
  * @param  {Number} increasValue the number to increase the benefit by
  * @return {Number}      the new benefit number
  */
  increaseBenefitValue( increasValue){
    var newValue = this.benefit + increasValue
    this.benefit =  newValue  <=  BENEFIT_MAX  ? newValue : BENEFIT_MAX
    return this.benefit;
  }
  /**
  * Decrease the benefit of the drug by the given param value
  * A benefit is never more less than BENEFIT_MIN
  * @param  {Number} decreaseValue the number to decrease the benefit by
  * @return {Number}      the new benefit number
  */
  decreaseBenefitValue(decreaseValue ){
    var newValue = this.benefit - decreaseValue
    this.benefit =  newValue  >=  BENEFIT_MIN  ? newValue : BENEFIT_MIN
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
    this.benefit = BENEFIT_MIN;
    return this.benefit;
  }


  /**
  * Update  the benefit and the expiration date depending on the type of the drug
  * A benefit is never  less than BENEFIT_MIN or more than BENEFIT_MAX
  * Find more about this function in the Readme.md
  * @return {Array<Drug>}      the  updated list of drugs of the pharmacy
  */


  update(){
    if(this.expiresIn >= 0 ){
      this.decreaseBenefitValue(1);
    }
    else {
      this.decreaseBenefitValue(2);
    }
    this.decreaseExpirationDate()
  }
}




export class Fervex extends Drug{
  constructor(data){
    super({name:"Fervex",...data})

  }
  update(){
    if (this.expiresIn < 11 && this.expiresIn >= 6 ) {
      this.increaseBenefitValue(2);
    }
    if (this.expiresIn < 6 && this.expiresIn >= 0 ) {
      this.increaseBenefitValue(3);
    }
    if (this.expiresIn < 0){ 
      this.dropBenefitToZero();
    }
    this.decreaseExpirationDate()
  }
}


export class HerbalTea extends Drug{
  constructor(data){
    super({name:"Herbal Tea",...data})

  }
  update(){
    if(this.expiresIn < 0 ){
      this.increaseBenefitValue(2);
    }
    else{
      this.increaseBenefitValue(1);
    }
    this.decreaseExpirationDate()
  }
}

export class Dafalgan extends Drug{
  constructor(data){
    super({name:"Dafalgan",...data})

  }
  update(){
    console.log(this.benefit ,this.expiresIn ,this.name)
    if(this.expiresIn >= 0 ){
      this.decreaseBenefitValue(2);
    }
    else {
      this.decreaseBenefitValue(4);
    }
    this.decreaseExpirationDate()
  }
}

export class MagicPill extends Drug{
  constructor(data){
    super({name:"Magic Pill",...data})

  }
  update(){
    
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  
  updateBenefitValue(){
    this.drugs.forEach(drug=>{
      drug.update()
    })
    return this.drugs;
  }
}
