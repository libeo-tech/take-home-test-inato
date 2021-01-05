import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("should not decrease the benefit", () => {
    const options = { increaseValue: 0 };
    expect(
      new Pharmacy([new Drug("test", 2, 3, options)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 3, options)]);
  });
  it("should not decrease the benefit and the expiresIn", () => {
    const options = { increaseValue: 0, neverExpire: true };
    expect(
      new Pharmacy([new Drug("test", 2, 3, options)]).updateBenefitValue()
    ).toEqual([new Drug("test", 2, 3, options)]);
  });
  it("should increase the benefit and decrease the expiresIn", () => {
    const options = { increaseValue: 1 };
    expect(
      new Pharmacy([new Drug("test", 2, 3, options)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 4, options)]);
  });
  it("should once the expiration date has passed benefit degrades twice as fast", () => {
    const options = { increaseValue: -1 };
    expect(
      new Pharmacy([new Drug("test", 0, 3, options)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 1, options)]);
  });
  it("should once the expiration date has passed benefit upgrades twice as fast", () => {
    const options = { increaseValue: 1 };
    expect(
      new Pharmacy([new Drug("test", 0, 3, options)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 5, options)]);
  });
  it("The Benefit of an item should never more than 50", () => {
    const options = { increaseValue: 1 };
    expect(
      new Pharmacy([new Drug("test", 2, 51, options)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 50, options)]);
  });
  it("The Benefit of an item should never less than 0", () => {
    const options = { increaseValue: 1 };
    expect(
      new Pharmacy([new Drug("test", 2, -10, options)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 0, options)]);
  });
  it("The Benefit should decrease by 5 when expiresIn is less than 1", () => {
    const options = {
      increaseValue: 1,
      increaseOptions: [{ increaseBy: -5, whenExpireIsLessThan: 1 }]
    };
    expect(
      new Pharmacy([new Drug("test", 1, 5, options)]).updateBenefitValue()
    ).toEqual([new Drug("test", 0, 0, options)]);
  });
  it("The Benefit should increase by 5 when expiresIn is less than 1", () => {
    const options = {
      increaseValue: 1,
      increaseOptions: [{ increaseBy: 5, whenExpireIsLessThan: 1 }]
    };
    expect(
      new Pharmacy([new Drug("test", 1, 0, options)]).updateBenefitValue()
    ).toEqual([new Drug("test", 0, 5, options)]);
  });
  it("The Benefit should not increase by 5 when expiresIn is more than 1", () => {
    const options = {
      increaseValue: 1,
      increaseOptions: [{ increaseBy: 5, whenExpireIsLessThan: 1 }]
    };
    expect(
      new Pharmacy([new Drug("test", 2, 5, options)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 6, options)]);
  });
  it("The Benefit should not decrease by 5 when expiresIn is more than 1", () => {
    const options = {
      increaseValue: 1,
      increaseOptions: [{ increaseBy: -5, whenExpireIsLessThan: 1 }]
    };
    expect(
      new Pharmacy([new Drug("test", 2, 5, options)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 6, options)]);
  });
});
