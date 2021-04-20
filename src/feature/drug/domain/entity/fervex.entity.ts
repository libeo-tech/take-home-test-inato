import { Drug } from "./drug.entity";

export class Fervex extends Drug {
  get benefit() {
    const daysSinceCreation = this.timeSinceCreation() / (1000 * 24 * 3600);
    let benefitLoss = 0;
    let daysElapsed = 1;

    if (daysSinceCreation > this._expiresIn) return 0;

    while (daysElapsed <= daysSinceCreation) {
      const expiration = this._expiresIn - daysElapsed;
      if (expiration > 10) {
        benefitLoss++;
      } else if (expiration <= 10 && expiration > 5) {
        benefitLoss -= 2;
      } else if (expiration <= 5 && expiration >= 0) {
        benefitLoss -= 3;
      }
      daysElapsed++;
    }

    return Math.max(
      0,
      Math.min(this._benefit - benefitLoss, this._benefitLimit)
    );
  }
}
