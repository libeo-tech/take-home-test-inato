export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    if(benefit > 50) benefit = 50
    this.benefit = benefit;
    this.expiresIn = expiresIn;
  }

  updateBenefitAndExpiresValues(){
    this.decreaseExpiresIn()
    switch (this.name) {
      case 'Magic Pill':
        break;
      
      case 'Dafalgan':
        this.decreaseBenefit(2)
        break

      case 'Herbal Tea':
        if(this.expiresIn <= 0) {
          this.increaseBenefit(2)
        } else this.increaseBenefit(1)
        break

      case 'Fervex':
        if(this.expiresIn <= 0) {
          this.benefit = 0
        }else if(this.expiresIn <= 5) {
          this.increaseBenefit(3)
        }else if (this.expiresIn <= 10){
          this.increaseBenefit(2)
        } else this.increaseBenefit(1)
        break
       
      default:
        if(this.expiresIn < 0) {
          this.decreaseBenefit(2)
        } else this.decreaseBenefit(1)
    }
  }

  decreaseExpiresIn(){
    if(this.name !== 'Magic Pill')
      this.expiresIn = this.expiresIn - 1
  }

  increaseBenefit(increment){
    this.benefit = this.benefit + increment
    if(this.benefit > 50){
      this.benefit = 50
    }
  }

  decreaseBenefit(increment){
    this.benefit = this.benefit - increment
    if(this.benefit <= 0) {
      this.benefit = 0
    }
  }

}


export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => {
        drug.updateBenefitAndExpiresValues()
    })
    return this.drugs;
  }
}