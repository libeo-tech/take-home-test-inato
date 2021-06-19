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

describe("Drug", () => {
  it("should accept benefit and expiresIn as two arguments", () => {
    /* GIVEN */
    const benefit = 8;
    const expiresIn = 15;
    /* WHEN */
    const drug = new Drug("test", expiresIn, benefit);
    /* THEN */
    expect(drug.benefit).toBe(benefit);
    expect(drug.expiresIn).toBe(expiresIn);
  });

  it("should accept benefit and expiresIn as an object", () => {
    /* GIVEN */
    const benefit = 8;
    const expiresIn = 15;
    /* WHEN */
    const drug = new Drug("test", { expiresIn, benefit });
    /* THEN */
    expect(drug.benefit).toBe(benefit);
    expect(drug.expiresIn).toBe(expiresIn);
  });
});
