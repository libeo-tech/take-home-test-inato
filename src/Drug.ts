export interface Drug {
  readonly name: string;
  readonly expiresIn: number;
  readonly benefit: number;
  updateBenefitValue(): void;
}
