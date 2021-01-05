const NORMAL_DRUG_INCREASE_VALUE = -1;

const DEFAULT_OPTIONS = {
    increaseOptions: [],
    increaseValue: NORMAL_DRUG_INCREASE_VALUE,
    neverExpire: false,
    dropsToZeroAfterExpiration: false
}
    

export class Drug {
    constructor(name, expiresIn, benefit, options) {
        this.name = name;
        this.expiresIn = expiresIn;
        this.benefit = benefit;
        this.options = {...DEFAULT_OPTIONS, ...options};
        this.options.increaseOptions.sort((a,b) => a.whenExpireIsLessThan - b.whenExpireIsLessThan);
    }
                                

  update() {
    const { increaseValue, increaseOptions, dropsToZeroAfterExpiration, neverExpire } = this.options;
    if (!neverExpire) {
        this.expiresIn--;
    }
    if (this.expiresIn >= 0) {
            this.benefit += increaseValue;
            for (const { increaseBy = 0, whenExpireIsLessThan = +Infinity, increaseWhenExpireIsMoreThan = -Infinity } of increaseOptions) {
                if (increaseWhenExpireIsMoreThan < this.expiresIn && this.expiresIn < whenExpireIsLessThan) {
                    this.benefit += increaseBy - increaseValue;
                    break;
                }
            }
    } else {
        if (dropsToZeroAfterExpiration) {
            this.benefit = 0;
            return;
        } else {
            this.benefit += increaseValue * 2;
        }
    }
    if (this.benefit > 50) {
        this.benefit = 50;
    }
    if (this.benefit < 0) {
        this.benefit = 0;
    }
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (const drug of this.drugs) {
        drug.update();
    }
    return this.drugs;
  }
}
