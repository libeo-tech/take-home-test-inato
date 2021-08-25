export const benefitMaxCalc = (benefit, value) => {
  const result = benefit + value;
  result > 50 ? 50 : result;
  return result;
};

export const benefitMinCalc = (benefit, value) => {
  let result = benefit - value;
  result < 0 ? (result = 0) : result;
  return result;
};
