import { MAX_BENEFIT, MIN_BENEFIT } from "../pharmacy";

const HERBAL_TEA = "Herbal Tea";
const FERVEX = "Fervex";
const DAFALGAN = "Dafalgan";
const MAGIC_PILL = "Magic Pill";

const _pipe = (fn1, fn2) => arg => fn2(fn1(arg));
const pipe = (...ops) => ops.reduce(_pipe);

const expireDrugByOne = drug => {
  drug.dicreaseExpiresInByOne();
  return drug;
};

// Ok, I must admit, it's a bit overkill
// But it's cool if we need to add new methods later
const specificDrugsUpdateMethods = {
  [HERBAL_TEA]: pipe(
    expireDrugByOne,
    updateHerbalTea
  ),
  [FERVEX]: pipe(
    expireDrugByOne,
    updateFervex
  ),
  [MAGIC_PILL]: updateMagicPill,
  [DAFALGAN]: pipe(
    expireDrugByOne,
    updateDafalgan
  )
};

const isDrugNeedUpdate = ({ benefit }) => benefit > MIN_BENEFIT;

function defaultDrugsUpdate(drug) {
  if (isDrugNeedUpdate(drug)) {
    drug.dicreaseBenefitBy(drug.expiresIn >= 0 ? 1 : 2);
  }
  return drug;
}

const isHerbalTeaNeedUpdate = ({ benefit }) => benefit < MAX_BENEFIT;

function updateHerbalTea(drug) {
  if (isHerbalTeaNeedUpdate(drug)) {
    drug.increaseBenefitBy(drug.expiresIn < 0 ? 2 : 1);
  }
  return drug;
}

const isFervexNeedUpdate = ({ benefit, expiresIn }) =>
  (expiresIn < 0 && benefit !== MIN_BENEFIT) ||
  (expiresIn >= 0 && benefit < MAX_BENEFIT);

function updateFervex(drug) {
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
  if (isDrugNeedUpdate(drug)) {
    drug.dicreaseBenefitBy(drug.expiresIn >= 0 ? 2 : 4);
  }
  return drug;
}

function updateDrugs(drug) {
  return specificDrugsUpdateMethods[drug.name]
    ? specificDrugsUpdateMethods[drug.name](drug)
    : pipe(
        expireDrugByOne,
        defaultDrugsUpdate
      )(drug);
}

export { updateDrugs };
