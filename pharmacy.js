import { drugsData, defaultDrugsData } from "./Drugs/drugsData";

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
    this.drugs.forEach(d => {
      let drugData = drugsData.find(e => e.name == d.name);
      if (!drugData) drugData = defaultDrugsData;
      const { noExpiration, hasToDrop, base, values } = drugData;
      if (!noExpiration) {
        if (hasToDrop && d.expiresIn <= 0) d.benefit = 0;
        else {
          let newBase = values
            .filter(v => d.expiresIn - v.limit <= 0)
            .sort((a, b) => a.limit - b.limit)[0];
          newBase = newBase ? newBase.value : base;
          d.benefit += newBase;
          if (d.benefit >= 50) d.benefit = 50;
          else if (d.benefit <= 0) d.benefit = 0;
        }
        d.expiresIn--;
      }
    });

    return this.drugs;
  }
}
