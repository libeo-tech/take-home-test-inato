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

  // Returns benefit increment or decrement depending on expiring date & drug
  getBenefitEvolution(drug){

    switch(drug.name){

      case 'Magic Pill':
        return 0

      case 'Herbal Tea':
        if(drug.expiresIn >= 0)
          return 1
        else
          return 2

      case 'Fervex':
        if(drug.expiresIn <= 0)
          return -drug.benefit
        else if(drug.expiresIn <= 5)
          return 3
        else if(drug.expiresIn <= 10)
          return 2
        else
          return 1
      
      case 'Dafalgan':
        if(drug.expiresIn <= 0)
          return -4
        else
          return -2

      default:
        if(drug.expiresIn <= 0)
          return -2
        else
          return -1
    }

  }

  // Updates benefit and decrements days until expiration
  updateBenefitValue() {
    for(let drug of this.drugs){
      let benefitEvolution = this.getBenefitEvolution(drug);
      drug.benefit += benefitEvolution;
      // benefit cannot be > 50
      if(drug.benefit > 50)
        drug.benefit = 50
      // benefit cannot be < 0
      if(drug.benefit < 0)
        drug.benefit = 0
      drug.expiresIn--;
    }

    return this.drugs;
  }

}
