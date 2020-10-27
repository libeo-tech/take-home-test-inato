const herbalUpdate = drug => {
  if (drug.expiresIn <= 0 && drug.benefit <= 48) {
    drug.benefit += 2
  }
}
export default herbalUpdate