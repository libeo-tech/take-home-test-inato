export const updateBenefitBeforeExpiration = (drug) => {
  if (isBenefitIncreasingBeforeExpiration(drug)) {
    increaseValue(drug);
  } else {
    decreaseValue(drug);
  }
};

export const updateBenefitAfterExpiration = (drug) => {
  if (drug.name == "Fervex") {
    drug.benefit = 0;
  }
  if (drug.name == "Herbal Tea") {
    increaseValueTwice(drug);
  } else {
    decreaseValueTwice(drug);
  }
};

const increaseValue = (drug) =>
  (drug.benefit = Math.min(MAX_ITEM_BENEFIT, drug.benefit + 1));

const decreaseValue = (drug) => (drug.benefit = Math.max(drug.benefit - 1, 0));

const increaseValueTwice = (drug) =>
  (drug.benefit = Math.min(drug.benefit + 2, MAX_ITEM_BENEFIT));

const decreaseValueTwice = (drug) =>
  (drug.benefit = Math.max(drug.benefit - 2, 0));

const isBenefitIncreasingBeforeExpiration = (drug) =>
  INCREASING_ITEMS.includes(drug.name);

const MAX_ITEM_BENEFIT = 50;

const INCREASING_ITEMS = ["Herbal Tea", "Fervex"];
