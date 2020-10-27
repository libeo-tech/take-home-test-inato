const fervexAndHerbalTeaUpdate = (drug) => {
  if (drug.expiresIn <= 10 && drug.benefit >= 5 && drug.benefit <= 48) {
    drug.benefit += 2;
  }
  if (drug.expiresIn > 0 && drug.benefit < 5 && drug.benefit <= 47) {
    drug.benefit += 3;
  }
  return drug;
};
export default fervexAndHerbalTeaUpdate;
