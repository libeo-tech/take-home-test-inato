const DRUG_MAX_BENEFIT = 50;

export class Drug {
  private name: string;
  private expiresIn: number;
  private benefit: number;

  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  private handleMaxBenefit() {
    return this.benefit > DRUG_MAX_BENEFIT ? DRUG_MAX_BENEFIT : this.benefit;
  }

  private handleDegradationDafalgan() {
    return this.benefit - 2;
  }

  private handleDegradationFervex() {
    if (this.expiresIn <= 0) {
      return 0;
    } else if (this.expiresIn <= 5) {
      return this.benefit + 3;
    } else if (this.expiresIn <= 10) {
      return this.benefit + 2;
    }
    return this.benefit + 1;
  }

  private handleDegradationMagicPill() {
    return this.benefit;
  }

  private handleDegradationHerbalTea() {
    if (this.expiresIn > 0) {
      return this.benefit + 1;
    }
    return this.benefit + 2;
  }

  private handleDegradationCommonDrugs() {
    let benefit;

    if (this.expiresIn > 0) {
      benefit = this.benefit - 1;
    } else {
      benefit = this.benefit - 2;
    }

    return benefit > 0 ? benefit : 0;
  }

  updateBenefitAndExpiration() {
    if (this.name === "Herbal Tea") {
      this.benefit = this.handleDegradationHerbalTea();
      this.expiresIn--;
    } else if (this.name === "Magic Pill") {
      this.benefit = this.handleDegradationMagicPill();
    } else if (this.name === "Fervex") {
      this.benefit = this.handleDegradationFervex();
      this.expiresIn--;
    } else if (this.name === "Dafalgan") {
      this.benefit = this.handleDegradationDafalgan();
      this.expiresIn--;
    } else {
      this.benefit = this.handleDegradationCommonDrugs();
      this.expiresIn--;
    }

    this.benefit = this.handleMaxBenefit();
  }
}
