import HerbalTea from "../../../src/models/drugs/herbalTea";
import Pharmacy from "../../../src/models/pharmacy";

describe("Herbal Tea", () => {
  it("should increases benefit twice faster the older it gets", () => {
    expect(new Pharmacy([new HerbalTea(-1, 10)]).updateDrugs()).toEqual([
      new HerbalTea(-2, 12)
    ]);
    expect(new Pharmacy([new HerbalTea(0, 15)]).updateDrugs()).toEqual([
      new HerbalTea(-1, 17)
    ]);
  });

  it("should benefit never be superior to 50", () => {
    expect(new Pharmacy([new HerbalTea(-1, 50)]).updateDrugs()).toEqual([
      new HerbalTea(-2, 50)
    ]);
  });
});
