export class BenefitUpdater {
  updateBenefitValue(benefit, expiresIn) {
    if (benefit > 0) benefit--;
    expiresIn--;
    if (expiresIn < 0 && benefit > 0) benefit--;

    return { benefit, expiresIn };
  }
}
