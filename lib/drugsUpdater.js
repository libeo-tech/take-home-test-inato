import { MAX_BENEFIT, MIN_BENEFIT } from "../pharmacy";

const HERBAL_TEA = "Herbal Tea";
const FERVEX = "Fervex";
const DAFALGAN = "Dafalgan";
const MAGIC_PILL = "Magic Pill";

const specificDrugsUpdateMethods = {
  [HERBAL_TEA]: updateHerbalTea,
  [FERVEX]: updateFervex,
  [MAGIC_PILL]: updateMagicPill,
  [DAFALGAN]: updateDafalgan
};

const isDrugNeedUpdate = ({ benefit }) => benefit > MIN_BENEFIT;

function defaultDrugsUpdate(drug) {
  drug.dicreaseExpiresInByOne();
  if (isDrugNeedUpdate(drug)) {
    drug.dicreaseBenefitBy(drug.expiresIn >= 0 ? 1 : 2);
  }
  return drug;
}

const isHerbalTeaNeedUpdate = ({ benefit }) => benefit < MAX_BENEFIT;

function updateHerbalTea(drug) {
  drug.dicreaseExpiresInByOne();
  if (isHerbalTeaNeedUpdate(drug)) {
    drug.increaseBenefitBy(drug.expiresIn < 0 ? 2 : 1);
  }
  return drug;
}

const isFervexNeedUpdate = ({ benefit, expiresIn }) =>
  (expiresIn < 0 && benefit !== MIN_BENEFIT) ||
  (expiresIn >= 0 && benefit < MAX_BENEFIT);

function updateFervex(drug) {
  drug.dicreaseExpiresInByOne();
  if (isFervexNeedUpdate(drug)) {
    switch (true) {
      case drug.expiresIn < 0:
        drug.setBenefitToZero();
        break;
      case drug.expiresIn > 10:
        drug.increaseBenefitBy(1);
        break;
      case drug.expiresIn <= 10 && drug.expiresIn > 5:
        drug.increaseBenefitBy(2);
        break;
      default:
        drug.increaseBenefitBy(3);
    }
  }

  return drug;
}

function updateMagicPill(drug) {
  return drug;
}

function updateDafalgan(drug) {
  drug.dicreaseExpiresInByOne();
  if (isDrugNeedUpdate(drug)) {
    drug.dicreaseBenefitBy(drug.expiresIn >= 0 ? 2 : 4);
  }
  return drug;
}

function updateDrugs(drug) {
  return specificDrugsUpdateMethods[drug.name]
    ? specificDrugsUpdateMethods[drug.name](drug)
    : defaultDrugsUpdate(drug);
}

export { updateDrugs };
