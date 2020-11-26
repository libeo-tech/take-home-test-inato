export class Drug {
  constructor(
    name,
    expiresIn,
    benefit,
    behavior = { benefit: { default: "-1", 0: "-2" }, expirable: true }
  ) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.behavior = behavior;
  }

  updateBenefit(operator) {
    this.benefit = Math.min(
      Math.max(parseInt(eval(`this.benefit${operator}`)), 0),
      50
    );
  }

  updateExpiresIn() {
    if (this.behavior.expirable) this.expiresIn = this.expiresIn - 1;
  }

  update() {
    // behavior is an object description how the drug ages
    // it contains 2 main keys:
    // expirable: if false, the drug will never expire
    // benefit: describe how the drug benefit evolves according to expiresIn
    // { 10: "-2", 0: "-3", default: "-1"} can be explained this way:
    // if expiresIn >= 10 then benefit - 2
    // else if experiesIn >= 0 then benefit -3
    // else benefit -1
    const options = Object.keys(this.behavior.benefit)
      .map(v => parseInt(v, 10))
      .sort((a, b) => a - b);
    const currentOption = options.find(option => option >= this.expiresIn);
    this.updateBenefit(
      this.behavior.benefit[currentOption?.toString() || "default"]
    );
    this.updateExpiresIn();
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    return this.drugs.map(drug => {
      drug.update();

      // "hack" to not change output.txt
      const { behavior, ...props } = drug;
      return props;
    });
  }
}
