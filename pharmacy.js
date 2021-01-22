export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

const increaseBenefit = (drug, multiplier) => {

  drug.benefit += 1*multiplier
  if(drug.benefit > 50) drug.benefit = 50

  return drug.benefit
}

const decreaseBenefit = (drug, multiplier) => {
  drug.benefit -= 1*multiplier
  if(drug.benefit < 0) drug.benefit = 0

  return drug.benefit
  }

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      
      const drug = this.drugs[i] 

      switch(drug.name){

        case("Herbal Tea"):
          increaseBenefit(drug, drug.expiresIn <= 0 ? 2 : 1)
          break
        
        case("Magic Pill"):
          continue

        case("Fervex"):
          if(drug.expiresIn > 10) {increaseBenefit(drug, 1)}
          else if(drug.expiresIn > 5 && drug.expiresIn <= 10) {increaseBenefit(drug, 2)}
          else if(drug.expiresIn > 0 && drug.expiresIn <= 5) {increaseBenefit(drug, 3)}
          else if(drug.expiresIn <= 0) {drug.benefit = 0}
          break

        case('Dafalgan'):
          decreaseBenefit(drug, drug.expiresIn <= 0 ? 4 : 2)
          break

        default:
          decreaseBenefit(drug, drug.expiresIn <= 0 ? 2 : 1)
          break
          
      }

      drug.expiresIn--

    }

    return this.drugs;
  }
}
