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

    this._drugsConfig = [];
    this._globalConfig = {
      maxBenefit: 0,
      minBenefit: 0,
    };
  }

  /**
   *
   * @param config Configuration informations of the pharmacy
   * @param config.maxBenefit Maximum benefit a drug can get to
   * @param configminBenefit Minimum benefit a drug can get to
   */
  setConfig(config) {
    this._globalConfig = config;
  }

  /**
   *
   * @param config Configuration informations of the drugs
   * @param config[0].benefitAfterExpires An optional value to force set the benefit once the drug is expired
   * @param config[0].benefitMultipliersByExpiresIn The multipliers of the expiration for specified the expiresIn range
   * @param config[0].expires Does the drug expire ? Defaults to true
   * @param config[0].name Name of the drug, used to find its config
   */
  setDrugsConfig(config) {
    this._drugsConfig = config;
  }

  _readDrugConfig(name, expiresIn) {
    const drugConfig = this._drugsConfig.find(configItem => configItem.name === name);

    // Default behavior of druges
    const drugConfigResult = {
      benefitAfterExpired: false,
      expires: true,
      multiplier: expiresIn > 0 ? 1 : 2,
    };

    if (drugConfig) {
      // Does the drug expire ?
      if (drugConfig.expires !== undefined) {
        drugConfigResult.expires = drugConfig.expires;
      }

      // Does the drug have a specific behavior when expiresIn < 0 ?
      if (drugConfig.benefitAfterExpired !== undefined) {
        drugConfigResult.benefitAfterExpired = drugConfig.benefitAfterExpired;
      }

      // Search for the multiplier in out current range
      const multiplierData = drugConfig.benefitMultipliersByExpiresIn.find(multiplierData => {
        if (multiplierData.gte !== undefined && !(expiresIn >= multiplierData.gte)) {
          return false;
        }

        if (multiplierData.lte !== undefined && !(expiresIn <= multiplierData.lte)) {
          return false;
        }

        if (multiplierData.gt !== undefined && !(expiresIn > multiplierData.gt)) {
          return false;
        }

        if (multiplierData.lt !== undefined && !(expiresIn < multiplierData.lt)) {
          return false;
        }

        return true;
      });

      if (multiplierData) {
        drugConfigResult.multiplier = multiplierData.multiplier;
      }
    }

    return drugConfigResult;
  }

  updateBenefitValue() {
    this.drugs = this.drugs.map(drug => {
      const configData = this._readDrugConfig(drug.name, drug.expiresIn);

      let newBenefit =
        configData.multiplier !== undefined
          ? drug.benefit + -1 * configData.multiplier
          : drug.benefit - 1;

      // Does the drug have a specific behavior when expiresIn <= 0 ?
      if (configData.benefitAfterExpired !== false && drug.expiresIn <= 0) {
        newBenefit = 0;
      }

      // Maximum benefit cap
      if (newBenefit > 50) {
        newBenefit = this._globalConfig.maxBenefit;
      }

      // Minimum benefit cap
      if (newBenefit < 0) {
        newBenefit = this._globalConfig.minBenefit;
      }

      return new Drug(
        drug.name,
        configData.expires ? drug.expiresIn - 1 : drug.expiresIn,
        newBenefit,
      );
    });

    return this.drugs;
  }

  /** @deprecated */
  _updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (this.drugs[i].name != 'Herbal Tea' && this.drugs[i].name != 'Fervex') {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name != 'Magic Pill') {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name == 'Fervex') {
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
      if (this.drugs[i].name != 'Magic Pill') {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != 'Herbal Tea') {
          if (this.drugs[i].name != 'Fervex') {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != 'Magic Pill') {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }
            }
          } else {
            this.drugs[i].benefit = this.drugs[i].benefit - this.drugs[i].benefit;
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
