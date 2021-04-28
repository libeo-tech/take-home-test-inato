export const updateBenefitBeforeExpiration = (drug) => {
  if (drug.name == "Fervex") {
    increaseValueForFervex(drug);
  }
  if (isBenefitIncreasingBeforeExpiration(drug)) {
    increaseValue(drug);
  }
  if (isBenefitDecreasingBeforeExpiration(drug)) {
    decreaseValue(drug);
  }
};

export const updateBenefitAfterExpiration = (drug) => {
  if (isBenefitZeroAfterExpiration(drug)) {
    drug.benefit = 0;
  }
  if (isBenefitIncreasingAfterExpiration(drug)) {
    increaseValueTwice(drug);
  }
  if (isBenefitDecreasingAfterExpiration(drug)) {
    decreaseValueTwice(drug);
  }
  if (isBenefitDoubleDecreasingAfterExpiration(drug)) {
    decreaseValueTwice(drug);
  }
};

const increaseValueForFervex = (drug) => {
  increaseValue(drug);
  if (drug.expiresIn < 11) {
    increaseValue(drug);
  }
  if (drug.expiresIn < 6) {
    increaseValue(drug);
  }
};
const increaseValue = (drug) =>
  (drug.benefit = Math.min(MAX_ITEM_BENEFIT, drug.benefit + 1));

const decreaseValue = (drug) => (drug.benefit = Math.max(drug.benefit - 1, 0));

const increaseValueTwice = (drug) =>
  (drug.benefit = Math.min(drug.benefit + 2, MAX_ITEM_BENEFIT));

const increaseValueThrice = (drug) =>
  (drug.benefit = Math.min(drug.benefit + 2, MAX_ITEM_BENEFIT));

const decreaseValueTwice = (drug) =>
  (drug.benefit = Math.max(drug.benefit - 2, 0));

const isBenefitIncreasingBeforeExpiration = (drug) =>
  INCREASING_BEFORE_EXPIRATION_ITEMS.includes(drug.name);

const isBenefitDecreasingBeforeExpiration = (drug) =>
  !INCREASING_BEFORE_EXPIRATION_ITEMS.includes(drug.name) &&
  drug.name != "Fervex";

const isBenefitIncreasingAfterExpiration = (drug) =>
  INCREASING_AFTER_EXPIRATION_ITEMS.includes(drug.name);

const isBenefitDecreasingAfterExpiration = (drug) =>
  !ZERO_AFTER_EXPIRATION_ITEMS.includes(drug.name) &&
  !INCREASING_AFTER_EXPIRATION_ITEMS.includes(drug.name);

const isBenefitDoubleDecreasingAfterExpiration = (drug) =>
  DOUBLE_INCREASING_AFTER_EXPIRATION_ITEMS.includes(drug.name);

const isBenefitZeroAfterExpiration = (drug) =>
  ZERO_AFTER_EXPIRATION_ITEMS.includes(drug.name);

const MAX_ITEM_BENEFIT = 50;

const INCREASING_AFTER_EXPIRATION_ITEMS = ["Herbal Tea"];

const DOUBLE_INCREASING_AFTER_EXPIRATION_ITEMS = ["Dafalgan"];

const ZERO_AFTER_EXPIRATION_ITEMS = ["Fervex"];

const INCREASING_BEFORE_EXPIRATION_ITEMS = ["Herbal Tea"];

const FERVEX_TWO_INCREASE_DATE = 10;
const FERVEX_THREE_INCREASE_DATE = 5;
