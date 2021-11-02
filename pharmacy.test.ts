import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should work with no drugs", () => {
    const drugs = new Pharmacy([]).updateBenefitValue();
    expect(drugs).toEqual([]);
  });

  it("should work with one drug", () => {
    const drugs = new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue();
    expect(drugs).toEqual([new Drug("test", 1, 2)]);
  });

  it("should work with several drugs", () => {
    const drugs = new Pharmacy([
      new Drug("test", 2, 3),
      new Drug("test 2", 5, 5),
    ]).updateBenefitValue();
    expect(drugs).toEqual([new Drug("test", 1, 2), new Drug("test 2", 4, 4)]);
  });

  it("outputs correct JSON string", () => {
    const drugs = new Pharmacy([
      new Drug("test", 2, 3),
      new Drug("test 2", 5, 5),
    ]).updateBenefitValue();
    expect(JSON.stringify(drugs)).toEqual(
      '[{"name":"test","expiresIn":1,"benefit":2},{"name":"test 2","expiresIn":4,"benefit":4}]'
    );
  });
});
