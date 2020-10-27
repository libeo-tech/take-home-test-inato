const dafalganUpdate = drug => {
 if (drug.expiresIn > 0 && drug.benefit >= 2) {
    drug.benefit -= 2
  }
  if (drug.expiresIn <= 0 && drug.benefit >= 4) {
    drug.benefit -= 4
  }
  drug.expiresIn -= 1

  return drug
}
export default dafalganUpdate