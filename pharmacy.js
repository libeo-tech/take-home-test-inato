const MAX_BENEFIT = 50;
const MIN_BENEFIT = 0;

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

  /**
   * DECREASE BENEFIT
   */

  /**
   * @function dafalganBenefitDecrease
   * @param {Drug} drug 
   */
  /**
   * @function dafalganBenefitDecrease
   * @param {*} drug 
   */
  dafalganBenefitDecrease(drug) {
    if (drug.benefit > MIN_BENEFIT)
      drug.benefit -= 2;
  }
  /**
   * @function regularBenefitDecrease
   * @param {Drug} drug 
   */
  regularBenefitDecrease(drug) {
    if (drug.expiresIn < 0 && drug.benefit > MIN_BENEFIT)
      drug.benefit -= 2;
    else if (drug.expiresIn > 0 && drug.benefit > MIN_BENEFIT)
      drug.benefit -= 1;
  }

  /**
   * INCREASE BENEFIT
   */

  /**
   * @function herbalTeaBenefitIncrease
   * @param {Drug} drug 
   */
  herbalTeaBenefitIncrease(drug) {
    this.increaseBenefit(drug);
    if (drug.benefit < MAX_BENEFIT && drug.expiresIn < MIN_BENEFIT)
      drug.benefit += 6;
  }

  /**
   * @function fervexBenefitIncrease
   * @param {Drug} drug 
   */
  fervexBenefitIncrease(drug) {
    this.increaseBenefit(drug);
    if (drug.expiresIn < 0)
      drug.benefit = MIN_BENEFIT;
  }

  /**
   * @function selectDrug
   * @param {*} drug 
   */
  selectDrug(drug) {
    if (!drug)
      return;
    switch (true) {
      case drug.name === "Herbal Tea":
        this.herbalTeaBenefitIncrease(drug);
        break;
      case drug.name === "Fervex":
        this.fervexBenefitIncrease(drug);
        break;
      case drug.name === "Magic Pill":
        break;
      case drug.name === "Doliprane":
        this.dolipraneBenefitDecrease(drug);
        break;
      case drug.name === 'Dafalgan':
        this.dafalganBenefitDecrease(drug);
        break;
      default:
        this.regularBenefitDecrease(drug);
    }
    if (drug.name != "Magic Pill")
      drug.expiresIn -= 1;
  }

  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i+=1) {
      this.selectDrug(this.drugs[i]);
    }

    return this.drugs;
  }
}
