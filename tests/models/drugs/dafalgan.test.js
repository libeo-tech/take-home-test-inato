import Pharmacy from "../../../src/models/pharmacy";
import Dafalgan from "../../../src/models/drugs/dafalgan";

describe("Dafalgan", () => {
  it("should degrades in Benefit twice as fast as normal drugs", () => {
    expect(new Pharmacy([new Dafalgan(8, 10)]).updateDrugs()).toEqual([
      new Dafalgan(7, 8)
    ]);
    expect(new Pharmacy([new Dafalgan(-4, 10)]).updateDrugs()).toEqual([
      new Dafalgan(-5, 6)
    ]);
  });
});
