export class Drug {
  name: string;
  expiresIn: number;
  benefit: number;

  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  drugs: Drug[];

  constructor(drugs?: Drug[]) {
    this.drugs = drugs || [];
  }

  // TODO function's name should be: updateValues || updateBenefitExpiresInValues
  updateBenefitValue(): Drug[] {
    this.drugs.forEach(drug => {
      if (drug.name != "Herbal Tea" && drug.name != "Fervex") {
        drug.benefit > 0 && drug.name != "Magic Pill" && (drug.benefit -= 1); // "Magic Pill" never decreases in Benefit
        drug.name == "Dafalgan" && (drug.benefit -= 1); // "Dafalgan" degrades in Benefit twice as fast as normal drugs
      } else {
        if (drug.benefit < 50) {
          drug.benefit += 1; // "Fervex" & "Herbal Tea" - Benefit increases as its expiration date approaches
          if (drug.name == "Fervex") {
            drug.expiresIn < 11 && drug.benefit < 50 && (drug.benefit += 1); // "Fervex" - Benefit increases: by 2 when <= 10 days
            drug.expiresIn < 6 && drug.benefit < 50 && (drug.benefit += 1); // "Fervex" - Benefit increases: by 3 when <= 5 days
          }
        }
      }

      drug.name != "Magic Pill" && (drug.expiresIn -= 1); // "Magic Pill" never expires

      if (drug.expiresIn < 0) {
        if (drug.name != "Herbal Tea") {
          drug.name != "Fervex"
            ? drug.benefit > 0 && (drug.benefit -= 1)
            : (drug.benefit = 0); // "Fervex" - Benefit = 0 after the expiration date
        } else {
          drug.benefit < 50 && (drug.benefit += 1); // "Herbal Tea" - Benefit increases twice as fast after the expiration date.
        }
      }
    });

    return this.drugs;
  }
}
