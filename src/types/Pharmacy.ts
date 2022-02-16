import { Drug } from "./Drug";

export class Pharmacy {
  drugs: Drug[];
  MAX_BENEFIT = 50;

  constructor(drugs: Drug[]) {
    this.drugs = drugs;
  }

  private handleMaxBenefit(d: Drug) {
    return d.benefit > this.MAX_BENEFIT ? this.MAX_BENEFIT : d.benefit;
  }

  private handleDegradationDafalgan(d: Drug) {
    return d.benefit - 2;
  }

  private handleDegradationFervex(d: Drug) {
    if (d.expiresIn <= 0) {
      return 0;
    } else if (d.expiresIn <= 5) {
      return d.benefit + 3;
    } else if (d.expiresIn <= 10) {
      return d.benefit + 2;
    }
    return d.benefit + 1;
  }

  private handleDegradationMagicPill(d: Drug) {
    return d.benefit;
  }

  private handleDegradationHerbalTea(d: Drug) {
    if (d.expiresIn > 0) {
      return d.benefit + 1;
    }
    return d.benefit + 2;
  }

  private handleDegradationCommonDrugs(d: Drug) {
    let benefit;

    if (d.expiresIn > 0) {
      benefit = d.benefit - 1;
    } else {
      benefit = d.benefit - 2;
    }

    return benefit > 0 ? benefit : 0;
  }

  updateBenefitValue() {
    const drugs = this.drugs;

    drugs.map((d) => {
      if (d.name === "Herbal Tea") {
        d.benefit = this.handleDegradationHerbalTea(d);
        d.expiresIn--;
      } else if (d.name === "Magic Pill") {
        d.benefit = this.handleDegradationMagicPill(d);
      } else if (d.name === "Fervex") {
        d.benefit = this.handleDegradationFervex(d);
        d.expiresIn--;
      } else if (d.name === "Dafalgan") {
        d.benefit = this.handleDegradationDafalgan(d);
        d.expiresIn--;
      } else {
        d.benefit = this.handleDegradationCommonDrugs(d);
        d.expiresIn--;
      }

      d.benefit = this.handleMaxBenefit(d);
    });

    return drugs;
  }
}
