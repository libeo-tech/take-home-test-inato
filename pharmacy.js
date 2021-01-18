const  HERBAL_TEA = "Herbal Tea";
const  FERVEX = "Fervex";
const  MAGIC_PILL = "Magic Pill";

/**
 * @description build Drug instance using factory based on name
 */
export class DrugFactory {
  constructor() {
   
  }
  
  static getInstance(name, expiresIn, benefit){
    switch(name){
      case FERVEX: return new Fervex(expiresIn, benefit);
      case MAGIC_PILL: return new MagicPill(expiresIn, benefit);
      case HERBAL_TEA: return new HerbalTea(expiresIn, benefit);
      default: return new Drug(name, expiresIn, benefit);
    }
    
  }
}

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Fervex extends Drug{
  constructor( expiresIn, benefit) {
    super(FERVEX, expiresIn, benefit);
  }
}

export class MagicPill extends Drug {
  constructor( expiresIn, benefit) {
    super(MAGIC_PILL, expiresIn, benefit);
  }
}

export class HerbalTea extends Drug {
  constructor( expiresIn, benefit) {
    super(HERBAL_TEA, expiresIn, benefit);
  }
}



export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
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
  }
}
