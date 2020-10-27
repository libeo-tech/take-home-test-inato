const genericUpdate = drug => {
  if (drug.expiresIn >= 0 && drug.benefit >= 1) {
    drug.benefit -= 1
  }
  if (drug.expiresIn < 0 && drug.benefit >= 2) {
    drug.benefit -= 2
  }
  drug.expiresIn -= 1

  return drug
}
export default genericUpdate
