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

  updateDolipraneBenefitValue(drug) {
    drug.benefit = drug.expiresIn === 0 ? drug.benefit -= 2 : drug.benefit -= 1;
    // -1 default, twice as fast once expiration -2
  }

  updateHerbalTeaBenefitValue(drug) {
    drug.benefit = drug.expiresIn === 0 ? drug.benefit += 2 : drug.benefit += 1;
    // +1 default, twice as fast on expiration +2
  }

  updateFervexBenefitValue(drug) {
    if (drug.expiresIn === 0) {
      drug.benefit = 0;

      return;
    }

    if (drug.expiresIn > 10) {
      drug.benefit = drug.benefit += 1;
    } else if (drug.expiresIn > 5) {
      drug.benefit = drug.benefit += 2;
    } else if (drug.expiresIn <= 5) {
      drug.benefit = drug.benefit += 3;
    }
    // +1 default, +2 if 10- days, +3 if 5- days, 0 after expiration
  }

  updateDafalganBenefitValue(drug) {
    drug.benefit = drug.expiresIn === 0 ? drug.benefit -= 4 : drug.benefit -= 2;
    // -2 default, twice as fast on expiration -4
  }


  updateBenefitValue() {
    this.drugs.forEach((drug) => {
      if (drug.benefit === 0 || drug.benefit === 50 || drug.name === "Magic Pill") {
        return;
      }

      switch (drug.name) {
        case 'Doliprane':
          this.updateDolipraneBenefitValue(drug);
          break;
        case 'Herbal Tea':
          this.updateHerbalTeaBenefitValue(drug);
          break;
        case 'Fervex':
          this.updateFervexBenefitValue(drug);
          break;
        case 'Dafalgan':
          this.updateDafalganBenefitValue(drug);
          break;
      }

      if (drug.benefit < 0) {
        drug.benefit = 0;
      } else if (drug.benefit > 50) {
        drug.benefit = 50;
      }

      if (drug.expiresIn != 0) {
        drug.expiresIn = drug.expiresIn -= 1;
      }
    })

    return this.drugs;
  }
}
