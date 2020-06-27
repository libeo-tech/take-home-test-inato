export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs.forEach(drug => {
      // "Magic Pill" never expires nor decreases in Benefit.
      if (drug.name === "Magic Pill") return;

      drug.expiresIn = drug.expiresIn - 1;

      // I use switch for a better reading experience
      // more than an optimized solution
      switch (drug.name) {
        case "Herbal Tea":
          drug.benefit = drug.benefit =
            drug.expiresIn <= 0 ? drug.benefit + 2 : drug.benefit + 1;
          break;
        case "Dafalgan":
          drug.benefit = drug.benefit =
            drug.expiresIn <= 0 ? drug.benefit - 4 : drug.benefit - 2;
          break;
        case "Fervex":
          drug.benefit = updateFervexBenefit(drug);
          break;
        default:
          drug.benefit = drug.benefit =
            drug.expiresIn <= 0 ? drug.benefit - 2 : drug.benefit - 1;
          break;
      }

      // The Benefit of an item is never more than 50.
      if (drug.benefit > 50) drug.benefit = 50;

      // The Benefit of an item is never negative.
      if (drug.benefit < 0) drug.benefit = 0;
    });

    return this.drugs;
  }
}

function updateFervexBenefit(drug) {
  if (drug.expiresIn <= 0) return 0;
  if (drug.expiresIn <= 5) return drug.benefit + 3;
  if (drug.expiresIn <= 10) return drug.benefit + 2;
  return drug.benefit + 1;
}
