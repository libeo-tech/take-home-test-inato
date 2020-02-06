const drugEffects = {
  Dafalgan: {
    benefitIncrements: {
      regular: -2,
      expired: -4
    },
    expirationDecrease: -1
  },
  Fervex: {
    benefitIncrementsByDays: [
      // Ensures benefit drops to 0 (flattened to 0 afterwards anyway)
      {
        days: 0,
        increment: -50
      },
      {
        days: 5,
        increment: 3
      },
      {
        days: 10,
        increment: 2
      }
    ],
    benefitIncrements: {
      regular: 1
    },
    expirationDecrease: -1
  },
  "Herbal tea": {
    benefitIncrements: {
      regular: 1,
      expired: 2
    },
    expirationDecrease: -1
  },
  "Magic pill": {
    benefitIncrements: {
      regular: 0,
      expired: 0
    },
    expirationDecrease: 0
  },
  default: {
    benefitIncrements: {
      regular: -1,
      expired: -2
    },
    expirationDecrease: -1
  }
}

export default drugEffects;
