import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  const testCases = {
    "should decrease the benefit and expiresIn": {
      drug: new Drug("test", 2, 3),
      expected: new Drug("test", 1, 2)
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
