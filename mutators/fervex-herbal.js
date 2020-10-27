const fervexAndHerbalTeaUpdate = (drug) => {
  if (drug.expiresIn > 5 && drug.expiresIn <= 10) {
    if (drug.benefit <= 48) {
      drug.benefit += 2;
    }
  } else if (drug.expiresIn > 0 && drug.expiresIn <= 5) {
    if (drug.benefit <= 47) {
      drug.benefit += 3;
    }
  }
  return drug;
};
export default fervexAndHerbalTeaUpdate;
