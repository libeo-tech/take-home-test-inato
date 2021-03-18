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
   * @param {*} drug 
   * @returns 
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
   * @param {*} drug 
   * @returns 
   */
  magicalPillDoMagic(drug) {
    //do nothing :D
    return drug;
  }

  /**
   * fervexGetOlder
   * @param {*} drug 
   * @returns 
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
   * @param {*} drug 
   * @returns 
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
   * @returns 
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