const DRUGS_CONFIG = {
  // DEFAULT CASE
  default_: (expiresIn, benefit) => {
    // First main case, we depreciate benefit by one before expiration
    if (expiresIn > 0)
      return {
        expiresIn: expiresIn - 1,
        benefit: Math.max(benefit - 1, 0)
      };
    // Second main case, we depreciate benefit by two before expiration
    if (expiresIn <= 0)
      return {
        expiresIn: expiresIn - 1,
        benefit: Math.max(benefit - 2, 0)
      };
  },

  // HERBAL TEA CASE
  "Herbal Tea": (expiresIn, benefit) => {
    // Herbal Tea" actually increases in Benefit the older it gets.
    if (expiresIn > 0)
      return {
        expiresIn: expiresIn - 1,
        benefit: Math.min(benefit + 1, 50)
      };
    // Benefit increases twice as fast after the expiration date.
    if (expiresIn <= 0)
      return {
        expiresIn: expiresIn - 1,
        benefit: Math.min(benefit + 2, 50)
      };
  },

  // MAGIC PILL CASE
  "Magic Pill": (expiresIn, benefit) => ({
    expiresIn,
    benefit // nothing happens for either expiresIn or benefit
  }),

  // FERVEX CASE
  Fervex: (expiresIn, benefit) => {
    // like Herbal Tea, increases in Benefit (+1) as its expiration date approaches.
    if (expiresIn > 10)
      return {
        expiresIn: expiresIn - 1,
        benefit: Math.min(benefit + 1, 50)
      };
    // Benefit increases by 2 when there are 10 days or less
    if (expiresIn > 5)
      return {
        expiresIn: expiresIn - 1,
        benefit: Math.min(benefit + 2, 50)
      };
    // Benefit increases by 3 when there are 5 days or less
    if (expiresIn > 0)
      return {
        expiresIn: expiresIn - 1,
        benefit: Math.min(benefit + 3, 50)
      };
    // Benefit drops to 0 after the expiration date
    if (expiresIn <= 0)
      return {
        expiresIn: expiresIn - 1,
        benefit: 0
      };
  },

  // DAFALGAN CASE
  Dafalgan: (expiresIn, benefit) => {
    // "Dafalgan" degrades in Benefit twice as fast as normal drugs.
    if (expiresIn > 0)
      return {
        expiresIn: expiresIn - 1,
        benefit: Math.max(benefit - 2, 0)
      };
    // Second main case, we depreciate benefit by two before expiration
    if (expiresIn <= 0)
      return {
        expiresIn: expiresIn - 1,
        benefit: Math.max(benefit - 4, 0)
      };
  }
};

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
    const DRUGS = Object.keys(DRUGS_CONFIG);

    for (var i = 0; i < this.drugs.length; i++) {
      const drugName = this.drugs[i].name;
      const drugBenefit = this.drugs[i].benefit;
      const drugExpiration = this.drugs[i].expiresIn;

      if (DRUGS.includes(drugName)) {
        const { benefit, expiresIn } = DRUGS_CONFIG[drugName](
          drugExpiration,
          drugBenefit
        );
        this.drugs[i].benefit = benefit;
        this.drugs[i].expiresIn = expiresIn;
      } else {
        const { benefit, expiresIn } = DRUGS_CONFIG["default_"](
          drugExpiration,
          drugBenefit
        );
        this.drugs[i].benefit = benefit;
        this.drugs[i].expiresIn = expiresIn;
      }
    }

    return this.drugs;
  }
}
