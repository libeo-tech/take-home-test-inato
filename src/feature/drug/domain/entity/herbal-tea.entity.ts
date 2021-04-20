import { Drug } from "./drug.entity";

export class HerbalTea extends Drug {
  get benefit() {
    const daysSinceCreation = this.timeSinceCreation() / (1000 * 24 * 3600);
    let benefit;

    // If the expiration date has passed
    if (this.expiresIn < 0) {
      // Only degrade 1 point before expiration
      benefit =
        this._benefit - this._expiresIn * this._benefitDegradationPerDay;
      // Increase twice as fast after expiration date
      benefit +=
        2 *
        (daysSinceCreation - this._expiresIn) *
        this._benefitDegradationPerDay;
    } else {
      benefit =
        this._benefit - daysSinceCreation * this._benefitDegradationPerDay;
    }

    // Benefit should never be 0
    if (benefit >= 0) return Math.min(this._benefitLimit, benefit);
    return 0;
  }
}
