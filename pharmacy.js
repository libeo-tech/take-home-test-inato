export class Drug {
  constructor(
    name,
    expiresIn,
    benefit,
    benefitEffect = "decrease",
    benefitMultiplier = 1,
    hasExpirationDate = true,
    hasBenefitAfterExpiration = true,
    benefitMultipliersByRemainingDay = []
  ) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.benefitEffect = benefitEffect;
    this.benefitMultiplier = benefitMultiplier;
    this.hasExpirationDate = hasExpirationDate;
    this.hasBenefitAfterExpiration = hasBenefitAfterExpiration;
    this.benefitMultipliersByRemainingDay = benefitMultipliersByRemainingDay;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => {
      if (0 < drug.benefit && drug.benefit <= 50) {
        let benefitMultiplier = drug.benefitMultiplier;
        let hasBenefitEnded = false;

        if (drug.expiresIn <= 0) {
          benefitMultiplier = 2;

          if (!drug.hasBenefitAfterExpiration) {
            drug.benefit = 0;
            hasBenefitEnded = true;
          }
        }

        if (
          drug.benefitMultipliersByRemainingDay.length > 0 &&
          !hasBenefitEnded
        ) {
          drug.benefitMultipliersByRemainingDay
            .sort((a, b) => {
              return b.expiresIn - a.expiresIn;
            })
            .map(element => {
              if (drug.expiresIn <= element.expiresIn) {
                benefitMultiplier = element.benefitMultiplier;
              }
            });
        }

        if (drug.benefitEffect !== null && !hasBenefitEnded) {
          let benefitValue = drug.benefit;

          benefitValue =
            benefitValue +
            (drug.benefitEffect === "decrease" ? -1 : 1) * benefitMultiplier;

          if (benefitValue < 0) {
            drug.benefit = 0;
          } else if (benefitValue > 50) {
            drug.benefit = 50;
          } else {
            drug.benefit = benefitValue;
          }
        }
      }

      if (drug.hasExpirationDate) {
        drug.expiresIn--;
      }
    });

    return this.drugs;
  }
}
