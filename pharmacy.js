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
    const increaseBenefit = (benefit, expiresIn, name) => {
      if (benefit < 50) {
        benefit++;
        if (name === "Fervex" && benefit < 50) {
          if (expiresIn < 11) {
            benefit++;
            if (expiresIn < 6) benefit++;
          }
        }
      }
      return benefit;
    };

    const decreaseBenefit = (benefit, name) => {
      if (name === "Fervex") return 0;
      if (name === "Herbal Tea") {
        if (benefit < 50) {
          benefit++;
        }
      } else {
        if (benefit > 0) {
          benefit--;
        }
      }
      return benefit;
    };

    this.drugs = this.drugs.map(({ benefit, expiresIn, name }) => {
      if (name === "Magic Pill") return { name, expiresIn, benefit };

      if (!["Herbal Tea", "Fervex"].includes(name)) {
        if (benefit > 0) {
          benefit--;
        }
      } else {
        benefit = increaseBenefit(benefit, expiresIn, name);
      }
      expiresIn--;
      if (expiresIn < 0) {
        benefit = decreaseBenefit(benefit, name);
      }
      return { name, expiresIn, benefit };
    });

    return this.drugs;
  }
}
