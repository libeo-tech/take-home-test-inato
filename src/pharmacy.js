const DRUG_NAMES = { HERBAL_TEA: "Herbal Tea", MAGIC_PILL: "Magic Pill" };
class DrugBehavior {
  updateValues(name, benefit, expiresIn) {
    if (name != "Herbal Tea" && name != "Fervex") {
      if (benefit > 0) {
        if (name != "Magic Pill") {
          benefit = benefit - 1;
        }
      }
    } else {
      if (benefit < 50) {
        benefit = benefit + 1;
        if (name == "Fervex") {
          if (expiresIn < 11) {
            if (benefit < 50) {
              benefit = benefit + 1;
            }
          }
          if (expiresIn < 6) {
            if (benefit < 50) {
              benefit = benefit + 1;
            }
          }
        }
      }
    }
    if (name != "Magic Pill") {
      expiresIn = expiresIn - 1;
    }
    if (expiresIn < 0) {
      if (name != "Herbal Tea") {
        if (name != "Fervex") {
          if (benefit > 0) {
            if (name != "Magic Pill") {
              benefit = benefit - 1;
            }
          }
        } else {
          benefit = benefit - benefit;
        }
      } else {
        if (benefit < 50) {
          benefit = benefit + 1;
        }
      }
    }
    return { benefit, expiresIn };
  }

  updateBenefit(current, toAdd) {
    let newValue = current + toAdd;
    if (newValue > 50) {
      return 50;
    }
    if (newValue < 0) {
      return 0;
    }
    return newValue;
  }
}

class HerbalTeaBehavior extends DrugBehavior {
  updateValues(name, benefit, expiresIn) {
    const benefitIncrement = expiresIn <= 0 ? 2 : 1;
    const updatedBenefit = this.updateBenefit(benefit, benefitIncrement);
    return { benefit: updatedBenefit, expiresIn: expiresIn - 1 };
  }
}

class MagicPillBehavior extends DrugBehavior {
  updateValues(name, benefit, expiresIn) {
    return { benefit, expiresIn: expiresIn };
  }
}

function createDrugBehavior(drugName) {
  switch (drugName) {
    case DRUG_NAMES.HERBAL_TEA:
      return new HerbalTeaBehavior();
    case DRUG_NAMES.MAGIC_PILL:
      return new MagicPillBehavior();
    default:
      return new DrugBehavior();
  }
}
export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.behavior = createDrugBehavior(name);
  }

  elapseDay() {
    const { benefit, expiresIn } = this.behavior.updateValues(
      this.name,
      this.benefit,
      this.expiresIn
    );
    this.benefit = benefit;
    this.expiresIn = expiresIn;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach((drug) => drug.elapseDay());
    return this.drugs;
  }

  toOutput() {
    return this.drugs.map(({ name, expiresIn, benefit }) => ({
      name,
      expiresIn,
      benefit,
    }));
  }
}
