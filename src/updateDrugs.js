/**
 * @updateDrugs
 * Drug types has their own individual module. Decouples nested if-else's, improves maintenance and future development of new features.
 */

 function updateHerbalTeaBenefit(herbalTea) {
    herbalTea.benefit += herbalTea.expiresIn < 0 ? 2 : 1;
    return herbalTea;
  }
  
  function updateFervexBenefit(fervex) {
    switch (true) {
      case fervex.expiresIn <= 10 && fervex.expiresIn > 5:
        fervex.benefit += 2;
        break;
      case fervex.expiresIn <= 5 && fervex.expiresIn > 0:
        fervex.benefit += 3;
        break;
      case fervex.expiresIn <= 0:
        fervex.benefit = 0;
        break;
      default:
        fervex.benefit += 1;
        break;
    }
    return fervex;
  }
  
  function updateDafalganBenefit(dafalgan) {
    dafalgan.benefit -= dafalgan.expiresIn < 0 ? 4 : 2;
    return dafalgan;
  }
  
  function updateCommonBenefit(drug) {
    drug.benefit -= drug.expiresIn < 0 ? 2 : 1;
    return drug;
  }
  
  module.exports = {
    updateCommonBenefit,
    updateFervexBenefit,
    updateDafalganBenefit,
    updateHerbalTeaBenefit
  };
  