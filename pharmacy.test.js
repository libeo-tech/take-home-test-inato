import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("default drug", () => {
    it("should decrease the benefit and expiresIn", () => {
      // see https://jestjs.io/docs/snapshot-testing for documentation about
      // snapshot testing with jest
      expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue())
        .toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 2,
            "expiresIn": 1,
            "name": "test",
          },
        ]
      `);
    });
  });
});
