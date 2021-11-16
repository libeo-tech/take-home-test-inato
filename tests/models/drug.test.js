import Pharmacy from "../../src/models/pharmacy";
import Drug from "../../src/models/drug";

describe("Drug", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("drug", 2, 3)]).updateDrugs()).toEqual([
      new Drug("drug", 1, 2)
    ]);
  });

  it("should benefit never be negative", () => {
    expect(new Pharmacy([new Drug("drug", 0, 0)]).updateDrugs()).toEqual([
      new Drug("drug", -1, 0)
    ]);
  });

  it("should degrades benefit twice as fast when expiration date has passed", () => {
    expect(new Pharmacy([new Drug("drug", -1, 10)]).updateDrugs()).toEqual([
      new Drug("drug", -2, 8)
    ]);
    expect(new Pharmacy([new Drug("drug", 0, 10)]).updateDrugs()).toEqual([
      new Drug("drug", -1, 8)
    ]);
  });
});
