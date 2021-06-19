export class Drug {
  constructor(name, expiresInOrObject, benefit) {
    this.name = name;
    if (typeof expiresInOrObject === "object" && expiresInOrObject != null) {
      this.expiresIn = expiresInOrObject.expiresIn;
      this.benefit = expiresInOrObject.benefit;
    } else {
      this.expiresIn = expiresInOrObject;
      this.benefit = benefit;
    }
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      const drug = this.drugs[i];
      const initialBenefit = drug.benefit;
      const initialExpiresIn = drug.expiresIn;

      // base case: lower benefit by one, two if expiry has pass
      this.setBenefitToDrug(
        drug,
        initialBenefit - (initialExpiresIn > 0 ? 1 : 2)
      );
      // then lower expiresIn by one
      drug.expiresIn = initialExpiresIn - 1;

      // special case: "Herbal Tea" increases in benefit by one, two if expiry has pass
      if (drug.name === "Herbal Tea") {
        this.setBenefitToDrug(
          drug,
          initialBenefit + (initialExpiresIn > 0 ? 1 : 2)
        );
      }

      // special case: "Magic Pill" never expires nor decreases in Benefit.
      if (drug.name === "Magic Pill") {
        this.setBenefitToDrug(drug, initialBenefit);
        drug.expiresIn = initialExpiresIn;
      }

      // special case: "Fervex"
      if (drug.name === "Fervex") {
        if (initialExpiresIn <= 0) {
          // benefit drops to 0 after the expiration date
          this.setBenefitToDrug(drug, 0);
        } else {
          if (initialExpiresIn <= 5) {
            // benefit increase by 3 when there are 5 days or less before expiration date
            this.setBenefitToDrug(drug, initialBenefit + 3);
          } else if (initialExpiresIn <= 10) {
            // benefit increase by 2 when there are 10 days and more than 5 before expiration date
            this.setBenefitToDrug(drug, initialBenefit + 2);
          } else {
            // benefit increase by one otherwise
            this.setBenefitToDrug(drug, initialBenefit + 1);
          }
        }
      }

      // special case: "Dafalgan" lower benefit by two, four if expiry has pass
      if (drug.name === "Dafalgan") {
        this.setBenefitToDrug(
          drug,
          initialBenefit - (initialExpiresIn > 0 ? 2 : 4)
        );
      }
    }

    return this.drugs;
  }

  setBenefitToDrug(drug, benefit) {
    drug.benefit = Math.min(50, Math.max(benefit, 0));
  }
}
