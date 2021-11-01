import { Drug, MIN_BENEFIT, MAX_BENEFIT } from "./drug";

describe("Drug", () => {
  it("should never compute a benefit smaller than the minimal value", () => {
    const drug = new Drug("test", 2, MIN_BENEFIT);
    expect(drug.benefit).toEqual(MIN_BENEFIT);
  });

  it("should never compute a benefit greater than the maximal value", () => {
    const drug = new Drug("Herbal Tea", 2, MAX_BENEFIT);
    expect(drug.benefit).toEqual(MAX_BENEFIT);
  });
});
