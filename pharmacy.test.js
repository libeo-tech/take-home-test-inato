import { Drug, Pharmacy } from "./pharmacy";

describe("Drug", () => {
  const testCases = {
    "should prevent the benefit to be set to a negative value": {
      actual: new Drug("test", 2, -10),
      expected: new Drug("test", 2, 0)
    },
    "should prevent the benefit to be greater than 50": {
      actual: new Drug("test", 2, 60),
      expected: new Drug("test", 2, 50)
    }
  };

  for (const [key, testCase] of Object.entries(testCases)) {
    it(key, () => {
      expect(testCase.actual).toStrictEqual(testCase.expected);
    });
  }
});

describe("Pharmacy", () => {
  const testCases = {
    "should decrease benefit and expiresIn": {
      actual: new Drug("test", 2, 3),
      expected: new Drug("test", 1, 2)
    },
    "should start the benefit at 0": {
      actual: new Drug("test", 2, 0),
      expected: new Drug("test", 1, 0)
    },
    "should decrease benefit by 2 after the expiration date": {
      actual: new Drug("test", 0, 10),
      expected: new Drug("test", -1, 8)
    },
    "should increase benefit by 1 for 'Herbal Tea'": {
      actual: new Drug("Herbal Tea", 2, 10),
      expected: new Drug("Herbal Tea", 1, 11)
    },
    "should increase benefit by 2 for 'Herbal Tea' after the expiration date": {
      actual: new Drug("Herbal Tea", 0, 10),
      expected: new Drug("Herbal Tea", -1, 12)
    },
    "should neither change benefit nor expiration for 'Magic Pill'": {
      actual: new Drug("Magic Pill", 2, 10),
      expected: new Drug("Magic Pill", 2, 10)
    },
    "should increase benefit by 1 for 'Fervex'": {
      actual: new Drug("Fervex", 11, 10),
      expected: new Drug("Fervex", 10, 11)
    },
    "should increase benefit by 2 for 'Fervex'": {
      actual: new Drug("Fervex", 10, 10),
      expected: new Drug("Fervex", 9, 12)
    },
    "should increase benefit by 3 for 'Fervex'": {
      actual: new Drug("Fervex", 5, 10),
      expected: new Drug("Fervex", 4, 13)
    },
    "should drop benefit to 0 for 'Fervex'": {
      actual: new Drug("Fervex", 0, 10),
      expected: new Drug("Fervex", -1, 0)
    },
    "should decrease benefit by 2 for Dafalgan": {
      actual: new Drug("Dafalgan", 2, 3),
      expected: new Drug("Dafalgan", 1, 1)
    }
  };

  for (const [key, testCase] of Object.entries(testCases)) {
    it(key, () => {
      expect(
        new Pharmacy([testCase.actual]).updateBenefitValue()
      ).toStrictEqual([testCase.expected]);
    });
  }
});
