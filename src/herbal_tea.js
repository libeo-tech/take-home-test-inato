export function herbalTeaBenefitBehavior() {
  if (this.expiresIn > 0) {
    this.benefit += 1;
  } else {
    this.benefit += 2;
  }
  this.expiresIn -= 1;
}
