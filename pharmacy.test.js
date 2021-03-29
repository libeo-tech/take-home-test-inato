import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)])
      .updateBenefitValue())
      .toEqual([new Drug("test", 1, 2)]);
  });

  it("the benefit of Doliprane decrease twice as fast when expiration date has passed", () => {
    expect(new Pharmacy([new Drug('Doliprane', -1, 2)])
      .updateBenefitValue())
      .toEqual([new Drug('Doliprane', -2, 0)]);
  })
});
