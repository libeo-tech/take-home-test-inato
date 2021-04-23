module.exports = {
  /**
   * Default drug specifications
   * Default: -1
   * Once 0 days reached: -2
   */
  defaultDrug: {
    default: {
      benefitChange: -1,
      expires: true
    },
    stateChanges: [
      {
        fromExpiresIn: 0,
        benefitChange: -2
      }
    ]
  },
  otherDrugs: {
    /**
     * Magic Pill specifications
     * Default: -2
     * Once 0 days reached: -4
     */
    "Magic Pill": {
      default: {
        benefitChange: 0,
        expires: false
      },
      stateChanges: []
    },

    /**
     * Herbal Tea specifications
     * Default: +1
     * Once 0 days reached: +2
     */
    "Herbal Tea": {
      default: {
        benefitChange: 1,
        expires: true
      },
      stateChanges: [
        {
          fromExpiresIn: 0,
          benefitChange: 2
        }
      ]
    },

    /**
     * Fervex specifications
     * Default: +1
     * Once 10 days reached: +2
     * Once 5 days reached: +3
     * Once 0 days reached: 0
     */
    Fervex: {
      default: {
        benefitChange: 1,
        expires: true
      },
      stateChanges: [
        {
          fromExpiresIn: 10,
          benefitChange: 2
        },
        {
          fromExpiresIn: 5,
          benefitChange: 3
        },
        {
          fromExpiresIn: 0,
          benefitChange: -Number.MAX_VALUE
        }
      ]
    }
  }
};
