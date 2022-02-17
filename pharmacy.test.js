import { Drug, Pharmacy } from "./pharmacy";

//default test
describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});

// Herbal Tea test
describe("Herbal Tea test", () => {
  it("should increase by 1 with expiresIn > 0", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 15, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 14, 31)]
    );
  });

  it("should increase by 2 with expiresIn <= 0", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -1, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -2, 12)]
    );
  });

  it("benefit is never more than 50", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 15, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 14, 50)]
    );
  });

});

// Magic Pill test
describe("Magic Pill test", () => {
  it("should never expire nor decrease in benefit", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 15, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 15, 40)]
    );
  });
})

// Fervex test
describe("Fervex test", () => {
  it("should increase by 1 with expiresIn > 10", () => {
    expect(new Pharmacy([new Drug("Fervex", 15, 25)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 14, 26)]
    );
  });

  it("should increase by 2 with expiresIn <= 10 and expiresIn > 5", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 15)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 17)]
    );
  });

  it("should increase by 3 with expiresIn <= 5 and expiresIn > 0", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 33)]
    );
  });

  it("should drop to 0 with expiresIn <= 0", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });

  it("benefit is never more than 50", () => {
    expect(new Pharmacy([new Drug("Fervex", 15, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 14, 50)]
    );
  });

});

// Defalgan test
describe("Defalgan test", () => {
  it("should decrease by 2 with expiresIn > 0 ", () => {
    expect(new Pharmacy([new Drug("Defalgan", 15, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Defalgan", 14, 38)]
    );
  });

  it("should decrease by 4 with expiresIn <= 0 ", () => {
    expect(new Pharmacy([new Drug("Defalgan", 0, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Defalgan", 0, 26)]
    );
  });

  it("benefit is never less than 0", () => {
    expect(new Pharmacy([new Drug("Defalgan", -1, 2)]).updateBenefitValue()).toEqual(
      [new Drug("Defalgan", -2, 0)]
    );
  });

})

