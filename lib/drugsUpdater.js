const HERBAL_TEA = "Herbal Tea";
const FERVEX = "Fervex";
const DAFALGAN = "Dalfalgan";
const MAGIC_PILL = "Magic Pill";

const specificDrugsUpdateMethods = {
  [HERBAL_TEA]: updateHerbalTea
};

function defaultDrugsUpdate(drug) {
  drug.expiresIn -= 1;
  if (drug.benefit > 0) {
    drug.benefit = Math.max(
      drug.expiresIn > 0 ? drug.benefit - 1 : drug.benefit - 2,
      0
    );
  }
  return drug;
}

function updateHerbalTea(drug) {
  drug.expiresIn -= 1;
  if (drug.benefit < 50) {
    drug.benefit = Math.min(
      drug.expiresIn < 0 ? drug.benefit + 2 : drug.benefit + 1,
      50
    );
  }
  return drug;
}

function updateDrugs(drug) {
  return specificDrugsUpdateMethods[drug.name]
    ? specificDrugsUpdateMethods[drug.name](drug)
    : defaultDrugsUpdate(drug);
}

export { updateDrugs };
