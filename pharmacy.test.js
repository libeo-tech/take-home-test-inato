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

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });


  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 4)]
    );
  });

  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 50)]
    );
  });
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 50)]
    );
  });

  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -3, 5)]
    );
  });
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 49)]
    );
  });


  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Fervex", 9, 13)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 8, 15)]
    );
  });
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Fervex", 4, 7)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 3, 10)]
    );
  });
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Fervex", -4, 7)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -5, 0)]
    );
  });


  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Dafalgan", -4, 7)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -5, 3)]
    );
  });

  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Dafalgan", -4, 2)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -5, 0)]
    );
  });


  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 4, 2)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 3, 0)]
    );
  });
});
