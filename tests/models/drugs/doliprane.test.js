import Pharmacy from "../../../src/models/pharmacy";
import Doliprane from "../../../src/models/drugs/doliprane";

describe("Doliprane", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Doliprane(2, 3)]).updateDrugs()).toEqual([
      new Doliprane(1, 2)
    ]);
  });

  it("should benefit never be negative", () => {
    expect(new Pharmacy([new Doliprane(0, 0)]).updateDrugs()).toEqual([
      new Doliprane(-1, 0)
    ]);
  });

  it("should degrades benefit twice as fast when expiration date has passed", () => {
    expect(new Pharmacy([new Doliprane(-1, 10)]).updateDrugs()).toEqual([
      new Doliprane(-2, 8)
    ]);
    expect(new Pharmacy([new Doliprane(0, 10)]).updateDrugs()).toEqual([
      new Doliprane(-1, 8)
    ]);
  });
});
