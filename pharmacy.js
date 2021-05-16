export const MIN_BENEFIT = 0;
export const MAX_BENEFIT = 50;

export const computeNewBenefitGeneric = (benefit, expiresIn) => 
  trimBenefit(expiresIn <= 0 ? benefit - 2 : benefit - 1);

export const computeNewExpiresInGeneric = expiresIn => --expiresIn;

export const trimBenefit = benefit => benefit <= MIN_BENEFIT 
  ? MIN_BENEFIT 
  : benefit >= MAX_BENEFIT ? MAX_BENEFIT : benefit;

export class Drug {
  constructor(name, expiresIn, benefit, expires, computeNewBenefit, computeNewExpiresIn) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.expires = expires;
    this.computeNewBenefit = computeNewBenefit;
    this.computeNewExpiresIn = computeNewExpiresIn;
  }
};

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  };

  updatePharmacy() {
    this.drugs.forEach(drug => {
      drug.expiresIn = drug.computeNewExpiresIn(drug.expiresIn);
      drug.benefit = drug.computeNewBenefit(drug.benefit, drug.expiresIn);
    });

    return this.drugs;
  };

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
  };
};