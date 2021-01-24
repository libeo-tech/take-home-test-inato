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
    this.specialDrugs = [
      {
        name: "Herbal Tea",
        func: function(drug) {
          if (drug.expiresIn > 0)
            drug.benefit += 1;
          else
            drug.benefit += 2;
          if (drug.benefit > 50)
            drug.benefit = 50;
          return drug;
        }
      },
      {
        name: "Magic Pill",
        func: function(drug) {
          drug.expiresIn = 0;
          return drug;
        }
      },
      {
        name: "Fervex",
        func: function(drug) {
          if (drug.expiresIn > 0)
          {
            if (drug.expiresIn <= 5)
              drug.benefit += 3;
            else if (drug.expiresIn <= 10)
              drug.benefit += 2;
            else
              drug.benefit += 1;
            if (drug.benefit > 50)
              drug.benefit = 50;
          }
          else
            drug.benefit = 0;
          return drug;
        }
      }
    ]
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; ++i) {
      this.drugs[i].expiresIn -= 1;
      
      var updatedSpecialDrug = this.checkSpecialDrugs(this.drugs[i]);

      if (updatedSpecialDrug != null)
        this.drugs[i] = updatedSpecialDrug;
      else
      {
        if (this.drugs[i].expiresIn > 0)
          this.drugs[i].benefit -= 1;
        else
          this.drugs[i].benefit -= 2;
        if (this.drugs[i].benefit < 0)
          this.drugs[i].benefit = 0;
      }
    }
    return this.drugs;
  }
  checkSpecialDrugs(drug) {
    for (var j = 0; j < this.specialDrugs.length; ++j) {
      if (drug.name == this.specialDrugs[j].name) {
        drug = this.specialDrugs[j].func(drug);
        return drug;
      }
    }
    return null;
  }
}
