import { Drug, Pharmacy } from "./pharmacy";
import { generateOutput } from "./generateOuput.js";
import { legacyOutput } from "./output.js";

describe("Pharmacy", () => {
  it("should not change behaviour", () => {
    expect(generateOutput()).toEqual(legacyOutput);
  });

  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});
