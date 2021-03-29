const MAX_BENEFIT = 50;
const MIN_BENEFIT = 0;

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit < MIN_BENEFIT 
                  ? MIN_BENEFIT
                  : benefit > MAX_BENEFIT 
                  ? MAX_BENEFIT 
                  : benefit;
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
  dafalganBenefitDecrease(drug) {
    if (drug.benefit > MIN_BENEFIT) {
      drug.benefit - 2 < MIN_BENEFIT ? drug.benefit = MIN_BENEFIT : drug.benefit -= 2;
    }
  }
  /**
   * @function regularBenefitDecrease
   * @param {Drug} drug 
   */
  regularBenefitDecrease(drug) {
    if (drug.benefit > MIN_BENEFIT) {
      if (drug.expiresIn <= 0) {
        drug.benefit - 2 < MIN_BENEFIT ? drug.benefit = MIN_BENEFIT : drug.benefit -= 2;
      }
      else
        drug.benefit -= 1;
    }
  }

  /**
   * INCREASE BENEFIT
   */

  /**
   * @function herbalTeaBenefitIncrease
   * @param {Drug} drug 
   */
  herbalTeaBenefitIncrease(drug) {
    if (drug.benefit < MAX_BENEFIT) {
      if (drug.expiresIn > 0)
        drug.benefit += 1;
      else{
        drug.benefit + 2 > MAX_BENEFIT ? drug.benefit = MAX_BENEFIT : drug.benefit += 2;
  }
    }    
  }

  /**
   * @function fervexBenefitIncrease
   * @param {Drug} drug 
   */
  fervexBenefitIncrease(drug) {
    if (drug.expiresIn <= 0)
      drug.benefit = MIN_BENEFIT;
    else if (drug.benefit < MAX_BENEFIT) {
      if (drug.expiresIn > 10)
        drug.benefit += 1;
      else if (drug.expiresIn > 5)
        drug.benefit + 2 > MAX_BENEFIT ? drug.benefit = MAX_BENEFIT : drug.benefit += 2;
      else if (drug.expiresIn > 0)
        drug.benefit + 3 > MAX_BENEFIT ? drug.benefit = MAX_BENEFIT : drug.benefit += 3;
  }
  }

  /**
   * @function selectDrug
   * @param {Drug} drug 
   */
  selectDrug(drug) {
    if (!drug)
      return;
    switch (drug.name) {
      case "Herbal Tea":
        this.herbalTeaBenefitIncrease(drug);
        break;
      case "Fervex":
        this.fervexBenefitIncrease(drug);
        break;
      case "Magic Pill":
        break;
      case 'Dafalgan':
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
