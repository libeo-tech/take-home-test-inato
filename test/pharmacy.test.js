import { Drug, Pharmacy } from "../src/pharmacy";

// Test just any drug
describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should decrease the benefit twice as fast after expiration", () => {
    expect(new Pharmacy([new Drug("test", 0, 5)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 3)]
    );
  });

  it("should never decrease the benefit below 0", () => {
    expect(new Pharmacy([new Drug("test", 4, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 3, 0)]
    );
  });
});

// Test of "Herbal Tea"
describe("Herbal Tea", () => {
  it("should increase in benefit while expiring", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 4, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 3, 6)]
    );
  });

  it("should increase in benefit twice as fast after expiration", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -2, 8)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -3, 10)]
    );
  });

  it("should never increase benefit beyond 50", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -2, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -3, 50)]
    );
  });
});

// Test of "Magic Pill"
describe("Magic Pill", () => {
  it("should never expire nor decrease in benefit", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 10, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill",10, 20)]
    );
  });
});

// Test of "Fervex"
describe("Fervex", () => {
  it("Fervex has special behavior", () => {
    expect(new Pharmacy([
      new Drug("Fervex", 13, 12),
      new Drug("Fervex", 9, 12),
      new Drug("Fervex", 5, 10),
      new Drug("Fervex", 0, 49)]).updateBenefitValue()).toEqual([
        new Drug("Fervex", 12, 13),
        new Drug("Fervex", 8, 14),
        new Drug("Fervex", 4, 13),
        new Drug("Fervex", -1, 0)]
    );
  });
});

// Test of "Dafalgan"
describe("Dafalgan", () => {
  it("should decrease in benefit twice as fast", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 5, 18)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 4, 16)]
    );
  });

  it("should decrease the benefit twice as fast after expiration", () => {
    expect(new Pharmacy([new Drug("Dafalgan", -2, 19)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -3, 15)]
    );
  });

  it("should never decrease the benefit below 0", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 5, 2)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 4, 0)]
    );
  });
});
