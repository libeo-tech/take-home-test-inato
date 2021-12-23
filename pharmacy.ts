interface DrugData {
  readonly name: string;
  expiresIn: number;
  benefit: number;
}
export class Drug implements DrugData {
  constructor(
    public readonly name: string,
    public expiresIn: number,
    public benefit: number,
  ) {
  }

  public toJSON = (): DrugData => ({
    name: this.name,
    expiresIn: this.expiresIn,
    benefit: this.benefit
  });

  public toObject = (): DrugData => ({
    name: this.name,
    expiresIn: this.expiresIn,
    benefit: this.benefit
  });

  public benefitRevaluate(): void {
    this._benefitRevaluate();
    this.updateExpires();
  }

  protected _benefitRevaluate(): void {
    // TODO: Missing logic
  }

  protected updateExpires(): void {
    this.expiresIn = this.expiresIn - 1;
  }
}
export class Pharmacy {
  constructor(public drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (
        this.drugs[i].name != "Herbal Tea" &&
        this.drugs[i].name != "Fervex"
      ) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name != "Magic Pill") {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name == "Fervex") {
            if (this.drugs[i].expiresIn < 11) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
            if (this.drugs[i].expiresIn < 6) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
          }
        }
      }
      if (this.drugs[i].name != "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != "Herbal Tea") {
          if (this.drugs[i].name != "Fervex") {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != "Magic Pill") {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }
            }
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
          }
        } else {
          if (this.drugs[i].benefit < 50) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
        }
      }
    }

    return this.drugs;
  }
}
