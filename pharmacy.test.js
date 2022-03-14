import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should never set benefit greater than 50", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 51)]).updateBenefitValue()
    )
    .toEqual(
      [new Drug("test", 1, 50)]
    );
  });
  
  it("should never set benefit less than 0", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()
    ).toEqual(
      [new Drug("test", 1, 0)]
    );
  });
  
  it("should allow drugs to never expire", () => {
    let trial = new Pharmacy([new Drug("test", 10, 10)])
    let expiryParams = [
      [-2, [-Infinity, Infinity]]
    ]
    trial.setDrugsExpiryParams({"test": expiryParams})
    expect(
      trial.updateBenefitValue()
    ).toEqual(
      [new Drug("test", 10, 8)]
    );
  });
  
  it("should enable setting arbitrary expiry behaviours", () => {
    let trial = new Pharmacy([new Drug("test", 2, 3)])
    let expiryParams = [
      [-2, [0, Infinity]],
      [-1, [-Infinity, 0]],
    ]
    trial.setDrugsExpiryParams({"test": expiryParams})
    expect(
      trial.updateBenefitValue()
    ).toEqual(
      [new Drug("test", 1, 1)]
    );
    expect(
      trial.updateBenefitValue()
    ).toEqual(
      [new Drug("test", 0, 0)]
    );
  });

  // etc. no time.
});
