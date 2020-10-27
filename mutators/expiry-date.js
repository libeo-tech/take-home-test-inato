const expiryUpdate = drug => {
 drug.expiresIn -= 1
 return drug
}
export default expiryUpdate