export class Drug {
  constructor(
    private _name: string,
    private _expiresIn: number,
    private _benefit: number
  ) {}

  get name() {
    return this._name;
  }

  get expiresIn() {
    return this._expiresIn;
  }

  get benefit() {
    return this._benefit;
  }
}
