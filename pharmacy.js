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
    this.specialDrugsName = {
      "Dafalgan": this.dafalganExpireFaster,
      "Herbal Tea": this.herbalTeaGetOlder,
      "Fervex": this.fervexGetOlder,
      "Magic Pill": this.magicalPillDoMagic,
      "generic": this.genericGetOlder
    }
  }

  /**
   * herbalTeaGetOlder
   * increases in Benefit the older it gets. 
   * Benefit increases twice as fast after the expiration date
   * @param {*} drug 
   * @returns drug
   */
  herbalTeaGetOlder(drug) {
    drug = this.generic(drug);
    drug.benefit = drug.benefit + 2;
    if (drug.expiresIn < 0)
      drug.benefit = drug.benefit + 2;
    return drug;
  }

  /**
   * magicalPillDoMagic
   * "Magic Pill" never expires nor decreases in Benefit.
   * @param {*} drug 
   * @returns drug
   */
  magicalPillDoMagic(drug) {
    //do nothing :D
    return drug;
  }

  /**
   * fervexGetOlder
   * ncreases in Benefit as its expiration date approaches. 
   * Benefit increases by 2 when <= 10 days 
   *  by 3 when <= 5 days
   * Benefit drops to 0 after the expiration date
   * @param {*} drug 
   * @returns drug
   */
  fervexGetOlder(drug) {
    drug = this.generic(drug);
    if (drug.expiresIn <= 10 && drug.expiresIn > 5)
      drug.benefit = drug.benefit + 3;
    if (drug.expiresIn <= 5)
      drug.benefit = drug.benefit + 4;
    if (drug.expiresIn < 0)
      drug.benefit = 0;
    return drug;
  }

  /**
   * genericGetOlder
   * At the end of each day our system lowers both values for every drug
   * @param {*} drug 
   * @returns 
   */
  genericGetOlder(drug) {
    drug.benefit = drug.benefit - 1;
    drug.expiresIn = drug.expiresIn - 1;
    if (drug.expiresIn < 0)
      drug.benefit = drug.benefit - 1;
    return drug;
  }

  /**
   * dafalganExpireFaster
   * "Dafalgan" degrades in Benefit twice as fast as normal drugs.
   * @param {*} drug 
   * @returns drug
   */
  dafalganExpireFaster(drug) {
    drug = this.generic(drug);
    drug.benefit = drug.benefit - 1;
    if (drug.expiresIn < 0)
      drug.expiresIn = drug.benefit - 1;
    return drug;
  }

  /**
   * updateBenefitValue
   * Select the action to do for each drugs type
   * @returns drug[]
   */
  updateBenefitValue() {
    this.drugs = this.drugs.map((drug) => {
      if (this.specialDrugsName.hasOwnProperty(drug.name)) {
        drug = this.specialDrugsName[drug.name](drug);
      }
      else {
        drug = this.genericGetOlder(drug);
      }

      if (drug.benefit < 0) {
        drug.benefit = 0;
      }
      if (drug.benefit > 50) {
        drug.benefit = 50;
      }
      return drug;
    })

    return this.drugs;
  }
}