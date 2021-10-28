export default class Drug {
  name = 'BasicDrug';
  expiresIn = 10;
  #benefit = 50;

  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;

    this.toJSON = function() {
      return {
        name: this.name,
        expiresIn: this.expiresIn,
        benefit: this.benefit,
      }
    };
  }

  get benefit() {
    return this.#benefit;
  }

  set benefit(benefit) {
    if (benefit < 0) {
      throw new Error('benefit cannot be lower than 0');
    }
    else if (benefit > 50){
      throw new Error('benefit cannot be higher than 50');
    }
    this.#benefit = benefit;
  }

  /**
   * Return the new benefit, after day change
   * @returns {Number} - The new calculated benefit
   */
   calculateNextBenefit() {
    if (this.benefit >= 2 && this.expiresIn < 0){
      this.benefit -= 2;
    }
    else if (this.benefit >= 1 && this.expiresIn >= 0){
      this.benefit--;
    }

    return this.benefit;
  }

  
  /**
   * Calculate new benefit and new expireIn, after new day
   * @returns {Drug} - The current instance
   */
   toNextDay() {
    this.expiresIn--;
    this.calculateNextBenefit();
    return this;
  }
}
