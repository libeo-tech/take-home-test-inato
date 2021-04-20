import * as assert from "assert";

export class Drug {
  protected _createdAt: number;
  protected readonly _benefitLimit = 50;
  protected _benefitDegradationPerDay = 1;
  protected _daysSinceCreation: number;

  constructor(
    protected _name: string,
    protected _expiresIn: number,
    protected _benefit: number,
    protected _useExternalElapsedDay = false
  ) {
    this._createdAt = Date.now();
  }

  get name() {
    return this._name;
  }

  get expiresIn() {
    const daysSinceCreation = this.timeSinceCreation / (1000 * 24 * 3600);
    return this._expiresIn - daysSinceCreation;
  }

  get benefit() {
    const daysSinceCreation = this.timeSinceCreation / (1000 * 24 * 3600);
    let benefit;

    // If the expiration date has passed
    if (this.expiresIn < 0) {
      // Only degrade 1 point before expiration
      benefit =
        this._benefit - this._expiresIn * this._benefitDegradationPerDay;
      // Degrade twice as fast after expiration date
      benefit -=
        2 *
        (daysSinceCreation - this._expiresIn) *
        this._benefitDegradationPerDay;
    } else {
      benefit =
        this._benefit - daysSinceCreation * this._benefitDegradationPerDay;
    }

    // Benefit should never be 0
    return Math.max(0, Math.min(benefit, this._benefitLimit));
  }

  set daysSinceCreation(days: number) {
    if (days < 0) {
      throw new Error("Elapsed day must not be negative");
    }
    if (!this._useExternalElapsedDay) {
      throw new Error("Operation not permitted");
    }
    this._daysSinceCreation = days;
  }

  protected get timeSinceCreation() {
    if (this._useExternalElapsedDay) {
      return this._daysSinceCreation! * 1000 * 3600 * 24;
    }
    return Date.now() - this._createdAt;
  }

  public toString(): string {
    return `{"name": ${this._name}, "expiresIn": ${this.expiresIn}, "benefit": ${this.benefit}}`;
  }

  public toJSON() {
    return {
      name: this._name,
      expiresIn: this.expiresIn,
      benefit: this.benefit,
    };
  }
}
