import { DrugInterface } from "./DrugInterface";
import { Drug } from "../Drug";

const DRUG_MAX_BENEFIT = 50;

export class DrugInstance implements DrugInterface {
  private name: string;
  private expiresIn: number;
  private benefit: number;

  constructor(drug: Drug) {
    this.name = drug.getName();
    this.expiresIn = drug.getExpiresIn();
    this.benefit = drug.getBenefit();
  }

  handleMaxBenefit() {
    this.benefit =
      this.benefit > DRUG_MAX_BENEFIT ? DRUG_MAX_BENEFIT : this.benefit;
  }

  getExpiresIn() {
    return this.expiresIn;
  }

  getBenefit() {
    return this.benefit;
  }

  setExpiresIn(expire: number) {
    this.expiresIn = expire;
  }

  setBenefit(benefit: number) {
    this.benefit = benefit;
  }

  updateDegradation(): void {
    return;
  }

  updateExpiration(): void {
    return;
  }
}
