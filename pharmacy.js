const NORMAL_DRUG_INCREASE_VALUE = -1;

const DEFAULT_OPTIONS = {
  increaseOptions: [],
  increaseValue: NORMAL_DRUG_INCREASE_VALUE,
  neverExpire: false,
  dropsToZeroAfterExpiration: false
};

const DRUGS_DEFAULT_OPTIONS = {
  ["Doliprane"]: {},
  ["Herbal Tea"]: { increaseValue: 1 },
  ["Fervex"]: {
    increaseValue: 1,
    dropsToZeroAfterExpiration: true,
    increaseOptions: [
      { whenExpireIsLessThan: 10, increaseBy: 2 },
      { whenExpireIsLessThan: 5, increaseBy: 3 }
    ]
  },
  ["Magic Pill"]: {
    neverExpire: true,
    increaseValue: 0
  },
  ["Dafalgan"]: {
    increaseValue: NORMAL_DRUG_INCREASE_VALUE * 2
  }
};

export class Drug {
  constructor(name, expiresIn, benefit, options) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    if (options) {
      this.options = { ...DEFAULT_OPTIONS, ...options };
    } else if (DRUGS_DEFAULT_OPTIONS[name]) {
      this.options = { ...DEFAULT_OPTIONS, ...DRUGS_DEFAULT_OPTIONS[name] };
    } else {
      this.options = DEFAULT_OPTIONS;
    }
    this.options.increaseOptions.sort(
      (a, b) => a.whenExpireIsLessThan - b.whenExpireIsLessThan
    );
  }

  updateExpiration() {
    const { neverExpire } = this.options;
    if (!neverExpire) {
      this.expiresIn--;
    }
  }

  updateBenefitBeforeExpiration() {
    const { increaseValue, increaseOptions } = this.options;
    this.benefit += increaseValue;
    for (const {
      increaseBy = 0,
      whenExpireIsLessThan = +Infinity,
      increaseWhenExpireIsMoreThan = -Infinity
    } of increaseOptions) {
      if (
        increaseWhenExpireIsMoreThan < this.expiresIn &&
        this.expiresIn < whenExpireIsLessThan
      ) {
        this.benefit += increaseBy - increaseValue;
        break;
      }
    }
  }

  updateBenefitAfterExpiration() {
    const { increaseValue, dropsToZeroAfterExpiration } = this.options;
    if (dropsToZeroAfterExpiration) {
      this.benefit = 0;
      return;
    } else {
      this.benefit += increaseValue * 2;
    }
  }

  update() {
    this.updateExpiration();
    if (this.expiresIn >= 0) {
      this.updateBenefitBeforeExpiration();
    } else {
      this.updateBenefitAfterExpiration();
    }
    if (this.benefit > 50) this.benefit = 50;
    if (this.benefit < 0) this.benefit = 0;
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
