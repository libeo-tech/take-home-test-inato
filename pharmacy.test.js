import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});

describe("Dafalgan (when expiry date has not passed)", () => {
  it("should decrease in benefit twice as fast as normal drugs", ()=> {
    expect(new Pharmacy([new Drug("Dafalgan", 15, 10 )])).toEqual([new Drug("Dafalgan", 14, 8)]);
  });
});

describe("Dafalgan (after expiry date)", () => {
  it("should decrease in benefit by a total amount of 4", ()=> {
    expect(new Pharmacy([new Drug("Dafalgan", -1, 10)])).toEqual([new Drug("Dafalgan", -2, 6)]);
  });
});
