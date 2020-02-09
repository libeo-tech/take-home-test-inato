import { Drug, Pharmacy } from "./pharmacy";

describe("Drug", () => {
  const testCases = {
    "should prevent the benefit to be set to a negative value": {
      drug: new Drug("test", 2, -10),
      expected: new Drug("test", 2, 0)
    }
  };

  for (const [key, testCase] of Object.entries(testCases)) {
    it(key, () => {
      expect(testCase.drug).toStrictEqual(testCase.expected);
    });
  }
});

describe("Pharmacy", () => {
  const testCases = {
    "should decrease the benefit and expiresIn": {
      drug: new Drug("test", 2, 3),
      expected: new Drug("test", 1, 2)
    },
    "should start the benefit at 0": {
      drug: new Drug("test", 2, 0),
      expected: new Drug("test", 1, 0)
    }
  };

  for (const [key, testCase] of Object.entries(testCases)) {
    it(key, () => {
      expect(new Pharmacy([testCase.drug]).updateBenefitValue()).toStrictEqual([
        testCase.expected
      ]);
    });
  }
});
