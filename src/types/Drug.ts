import { HerbalTea } from "./Drugs/HerbalTea";
import { MagicPill } from "./Drugs/MagicPill";
import { Fervex } from "./Drugs/Fervex";
import { Dafalgan } from "./Drugs/Dafalgan";
import { CommonDrug } from "./Drugs/CommonDrug";
import { DrugInstance } from "./Drugs/DrugInstance";

export class Drug {
  private readonly name: string;
  private expiresIn: number;
  private benefit: number;

  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  getName() {
    return this.name;
  }

  getExpiresIn() {
    return this.expiresIn;
  }

  getBenefit() {
    return this.benefit;
  }

  private drugFactory(drug: Drug): DrugInstance {
    if (this.name === "Herbal Tea") {
      return new HerbalTea(drug);
    } else if (this.name === "Magic Pill") {
      return new MagicPill(drug);
    } else if (this.name === "Fervex") {
      return new Fervex(drug);
    } else if (this.name === "Dafalgan") {
      return new Dafalgan(drug);
    } else {
      return new CommonDrug(drug);
    }
  }

  updateBenefitAndExpiration(): void {
    const drugInstance = this.drugFactory(this);
    drugInstance.updateDegradation();
    drugInstance.updateExpiration();
    drugInstance.handleMaxBenefit();

    this.expiresIn = drugInstance.getExpiresIn();
    this.benefit = drugInstance.getBenefit();
  }
}
