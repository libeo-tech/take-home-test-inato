module.exports = {
  rulesForHerbalTea(drug) {
    drug.expiresIn -= 1;
    drug.expiresIn < 0 ? (drug.benefit += 2) : (drug.benefit += 1);
    return drug;
  },
  rulesForMagicPill(drug) {
    return drug;
  },
  rulesForFervex(drug) {
    drug.expiresIn -= 1;
    if (drug.expiresIn < 0) {
      drug.benefit = 0;
    } else {
      if (drug.expiresIn > 10) {
        drug.benefit = drug.benefit + 1;
      } else if (drug.expiresIn > 5) {
        drug.benefit = drug.benefit + 2;
      } else if (drug.expiresIn >= 0) {
        drug.benefit = drug.benefit + 3;
      }
    }
    return drug;
  },
  rulesForDafalgan(drug) {
    drug.expiresIn -= 1;
    drug.benefit > 0 ? (drug.benefit -= 2) : (drug.benefit -= 4);
    return drug;
  },
  defaultRules(drug) {
    drug.expiresIn -= 1;
    drug.expiresIn < 0 ? (drug.benefit -= 2) : (drug.benefit -= 1);
    return drug;
  },
  applyConstraints(drug) {
    if (drug.benefit > 50) drug.benefit = 50;
    if (drug.benefit < 0) drug.benefit = 0;
    return drug;
  }
};
