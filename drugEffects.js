const drugEffects = {
  "Herbal tea": {
    benefitIncrements: {
      regular: 1,
      expired: 2
    }
  },
  default: {
    benefitIncrements: {
      regular: -1,
      expired: -2
    }
  }
}

export default drugEffects;
