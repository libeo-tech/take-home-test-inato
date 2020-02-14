export function fervexBenefitBehavior() {
  if (this.expiresIn <= 0) {
    this.benefit = 0;
  } else if (this.expiresIn <= 5) {
    this.benefit += 3;
  } else if (this.expiresIn <= 10) {
    this.benefit += 2;
  } else {
    this.benefit -= 1;
  }
  this.expiresIn -= 1;
}
