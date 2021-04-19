export class Drug {
  private _createdAt: number;

  constructor(
    private _name: string,
    private _expiresIn: number,
    private _benefit: number
  ) {
    this._createdAt = Date.now();
  }

  get name() {
    return this._name;
  }

  get expiresIn() {
    const daysSinceCreation = this.timeSinceCreation() / (1000 * 24 * 3600);
    return this._expiresIn - daysSinceCreation;
  }

  get benefit() {
    const daysSinceCreation = this.timeSinceCreation() / (1000 * 24 * 3600);
    let benefit;

    // If the expiration date has passed
    if (this.expiresIn < 0) {
      // Only degrade 1 point before expiration
      benefit = this._benefit - this._expiresIn;
      // Degrade twice as fast after expiration date
      benefit -= 2 * (daysSinceCreation - this._expiresIn);
    } else {
      benefit = this._benefit - daysSinceCreation;
    }

    // Benefit should never be 0
    if (benefit >= 0) return benefit;
    return 0;
  }

  private timeSinceCreation() {
    return Date.now() - this._createdAt;
  }
}
