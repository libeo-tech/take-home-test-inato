import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Doliprane", 20, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Doliprane", 19, 29)]
    );
  });
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 10, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 9, 6)]
    );
  });
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 43)]
    );
  });
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 15, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 14, 38)]
    );
  });
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 15, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 15, 40)]
    );
  });
  it("should decrease the benefit x 2 and expiresIn of Dafalgan", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 1)]
    )
  });
  it("should decrease the benefit to 0 of Dafalgan", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 0, 0)]
    )
  });
  it("Dont touch to the Magic Pill", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 3)]
    )
  });
  it("Dont touch to the Magic Pill", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 3)]
    )
  });
  it("should increase the benefit and decrease the expiresIn of Herbal Tea", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 4)]
    )
  });
  it("should increase the benefit of Herbal Tea", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 0, 7)]
    )
  });
  it("should increase the benefit + 3 of Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 4, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 3, 8)]
    )
  });
  it("should increase the benefit + 2 of Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 7)]
    )
  });
  it("should increase the benefit + 1 of Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 15, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 14, 6)]
    )
  });
  it("should decrease the benefit to 0 of Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 0, 0)]
    )
  });
});
