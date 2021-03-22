import fs from 'fs';

export class PharmacyController {

  static canBeDecreased(drug) {
    return !['Magic Pill'].includes(drug.name);
  }

  /**
   * [decreaseNormalDrug Normal drugs is all drugs without Magic Pill]
   * @param  {[type]} drug [description]
   */
  static decreaseNormalDrug(drug) {
    if (drug.name != 'Magic Pill') { // Benefit degrade before expiration date reached (once)
      if (drug.name === 'Dafalgan') {
        /*
        * Here we are reseting benefit to 0, because when he reach 1 the next degrades become -2
        * in case of Dafalgan, and benefit can't be negative. So that why we are reseting
        * it to 0 when drug.benefit = 1
        */
        if (drug.benefit === 1) { drug.benefit = 0; } // Benefit can't be negative
        else { drug.benefit-=2; }
      }
      else { drug.benefit--; } // (once degrades)
    }
  }

  /**
   * [updateInversedDrug Handler drugs which increases in Benefit the older they gets]
   * @param  {Drug} drug [Drug]
   */
  static updateInversedDrug(drug) {
    if (drug.benefit < 50) {
      if (drug.name === 'Fervex') {
        if (drug.expiresIn < 11) {
          if (drug.expiresIn < 6) { drug.benefit +=3; }
          else { drug.benefit +=2; }
        }
      } else {
        drug.benefit++;
      }
    }
  }

  /**
   * [decreaseAfterExpirationDate Manage drug decrease after theirs expiration date]
   * @param  {Drug} drug [Drug]
   */
  static decreaseAfterExpirationDate(drug) {
    if (drug.name !== 'Herbal Tea') {
      if (drug.name === 'Fervex') {
        drug.benefit = 0;
      }
      else {
        if (drug.benefit > 0 && PharmacyController.canBeDecreased(drug)) { // All drugs except Magic pill
          if (drug.name === 'Dafalgan') {
            if (drug.benefit === 1) { drug.benefit = 0; }
            else { drug.benefit-=2; } // dafalgan degrades in Benefit twice as fast as normal drugs
          }
          else { drug.benefit--; }
        }
      }
    } else {
      if (drug.benefit < 50) {
        drug.benefit++; // (Herbal Tea increase twice after expiration date)
      }
    }
  }

  updateBenefitValue(drugs) {

    let updatedDrugs = [];

    for (let drug of drugs) {
      if (drug.name !== 'Herbal Tea' && drug.name !== 'Fervex' && drug.benefit > 0) {
        PharmacyController.decreaseNormalDrug(drug);
      } else {
        PharmacyController.updateInversedDrug(drug);
      }
      if (PharmacyController.canBeDecreased(drug)) {
        drug.expiresIn--;
      }
      if (drug.expiresIn < 0) { // Benefit degrades after expiration date (twice)
        PharmacyController.decreaseAfterExpirationDate(drug);
      }
      updatedDrugs.push(drug);
    }

    return updatedDrugs;
  }

  updateDrugs(pharmacy) {
    const drugs = pharmacy.getDrugs() || [];
    if (!drugs && drugs.length === 0) { throw new Error('There are no drugs to update'); }
    const log = [];
    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      log.push(JSON.stringify(this.updateBenefitValue(drugs)));
    }
    /* eslint-disable no-console */
    fs.writeFile(__dirname + '/../../output/output-test.txt', log, err => {
      if (err) {
        console.log(err);
      } else {
        console.log('success');
      }
    });
    /* eslint-enable no-console */
  }
}
