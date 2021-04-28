export const updateBenefitBeforeExpiration = (drug) => {};

export const updateBenefitAfterExpiration = (drug) => {
  if (drug.name == "Fervex") {
    drug.benefit = 0;
  }
  if (drug.name == "Herbal Tea") {
    increaseValue(drug);
  } else {
    decreaseValue(drug);
  }
};

const increaseValue = (drug) =>
  (drug.benefit = Math.min(MAX_ITEM_BENEFIT, drug.benefit + 1));

const decreaseValue = (drug) => (drug.benefit = Math.max(drug.benefit - 1, 0));

const MAX_ITEM_BENEFIT = 50;
