export class ThresholdsBenefitStrategy {
  constructor(thresholds) {
    this.values = thresholds;
    this.thresholds = Object.keys(thresholds).sort();
  }

  getChange(state) {
    const currentExpiresIn = state.getExpiresIn();

    for (const threshold of this.thresholds) {
      if (currentExpiresIn > threshold) {
        return this.values[threshold];
      }
    }

    return -1 * state.getBenefit();
  }
}
