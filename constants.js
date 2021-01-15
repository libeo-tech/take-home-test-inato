export const BENEFIT_MAX = 50;
export const BENEFIT_MIN = 0;

export const DEFAULT_BENEFIT_RULES = [
  { expiresIn: 0, variation: -2 },
  { expiresIn: 50, variation: -1 },
];

export const BENEFIT_SPECIFICS_RULES = {
  "Herbal Tea": [
    { expiresIn: 0, variation: 2 },
    { expiresIn: 50, variation: 1 }
  ],
  "Fervex": [
    { expiresIn: 0, value: 0 },
    { expiresIn: 5, variation: 3 },
    { expiresIn: 10, variation: 2 },
    { expiresIn: 50, variation: 1 },
  ],
  "Magic Pill": [],
  "Dafalgan": [
    { expiresIn: 0, variation: -4 },
    { expiresIn: 50, variation: -2 },
  ]
}