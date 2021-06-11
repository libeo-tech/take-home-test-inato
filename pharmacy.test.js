import { Drug, Pharmacy } from "./pharmacy";

describe("Drug", () => {
  it("should decrease the benefit ", () => {
    expect(new Drug("test", 2, 3).decreaseBenefitValue(1)).toEqual(2);
  });
  it("should decrease the benefit ", () => {
    expect(new Drug("test", 2, 0).decreaseBenefitValue(1)).toEqual(0);
  });

  it("should increase the benefit ", () => {
    expect(new Drug("test", 2, 7).increaseBenefitValue(1)).toEqual(8);
  });
  it("should increase the benefit ", () => {
    expect(new Drug("test", 2, 50).increaseBenefitValue(5)).toEqual(50);
  });



  it("should drop the benefit to ZERO ", () => {
    expect(new Drug("test", 2, 50).dropBenefitToZero(5)).toEqual(0);
  });
  
});


