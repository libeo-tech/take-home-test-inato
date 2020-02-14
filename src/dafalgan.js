export function dafalganBenefitBehavior() {
  if (this.expiresIn > 0) {
    this.benefit -= 2;
  } else {
    this.benefit -= 4;
  }
  this.expiresIn -= 1;
}
