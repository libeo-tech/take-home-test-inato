export const drugsConfig = [
  {
    benefitMultipliersByExpiresIn: [{ multiplier: 2 }],
    name: 'Dafalgan',
  },
  {
    benefitAfterExpired: 0,
    benefitMultipliersByExpiresIn: [
      { gt: 10, multiplier: -1 },
      { lte: 10, gt: 5, multiplier: -2 },
      { lte: 5, gt: 0, multiplier: -3 },
    ],
    name: 'Fervex',
  },
  {
    benefitMultipliersByExpiresIn: [{ gt: 0, multiplier: -1 }, { lte: 0, multiplier: -2 }],
    name: 'Herbal Tea',
  },
  {
    benefitMultipliersByExpiresIn: [{ multiplier: 0 }],
    expires: false,
    name: 'Magic Pill',
  },
];
