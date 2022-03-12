export class Drug {
  private readonly expiresIn: number; // number of days

  private constructor(params: { expiresIn: number }) {
    this.expiresIn = params.expiresIn;
  }

  getExpiresIn(): number {
    return this.expiresIn;
  }

  private static validate(params: { expiresIn: number }): void {
    if (Number.isNaN(params.expiresIn)) {
      throw new Error(`expiresIn "${params.expiresIn}" is not a valid number`);
    }

    if (Number(params.expiresIn) <= 0) {
      throw new Error('Expiration cannot be equal / under 0.');
    }
  }

  static create(params: { expiresIn: number }): Drug {
    this.validate(params);

    return new Drug(params);
  }
}
