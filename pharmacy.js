export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

function updateDefaultDrug(drug) {
  const delta = drug.expiresIn > 0 ? 1 : 2;
  const expiresIn = drug.expiresIn - 1;
  let benefit = drug.benefit - delta;
  if (benefit > 50) {
    benefit = 50;
  }
  if (benefit < 0) {
    benefit = 0;
  }
  return {
    ...drug,
    expiresIn,
    benefit,
  };
}
const updateDrugsHandlers = {};
export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      const handler =
        updateDrugsHandlers[this.drugs[i].name] || updateDefaultDrug;
      this.drugs[i] = handler(this.drugs[i]);
    }
    return this.drugs;
  }
}
