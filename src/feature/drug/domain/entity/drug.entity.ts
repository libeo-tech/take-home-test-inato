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
    if (this.expiresIn < 0) {
      benefit = this._benefit - this._expiresIn;
      benefit -= 2 * (daysSinceCreation - this._expiresIn);
    } else {
      benefit = this._benefit - daysSinceCreation;
    }

    return benefit;
  }

  private timeSinceCreation() {
    return Date.now() - this._createdAt;
  }
}
