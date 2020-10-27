const fervexUpdate = (drug) => {
  if (drug.expiresIn > 10 && drug.benefit >= 1) {
    drug.benefit -= 1;
  }
  if (drug.expiresIn <= 0) {
    drug.benefit = 0;
  }
};
export default fervexUpdate;
