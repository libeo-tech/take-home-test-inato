import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("Normal Drugs should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Normal Drugs", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Normal Drugs", 1, 2)]);
  });
  it("Expired Normal Drugs should decrease the expiresIn and the benefit 2 times", () => {
    expect(
      new Pharmacy([new Drug("Normal Drugs", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Normal Drugs", -1, 1)]);
  });
  it("Herbal Tea should decrease the expiresIn and increase the benefit", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });
  it("Expired Herbal Tea should decrease the expiresIn and increase the benefit 2 times", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 5)]);
  });
  it("Fervex should decrease the expiresIn and increase the benefit", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 12, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 11, 4)]);
  });
  it("Less than 10 days to expired Fervex should decrease the expiresIn and increase the benefit 2 times", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 5)]);
  });
  it("Less than 5 days to expired Fervex should decrease the expiresIn and increase the benefit 3 times", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 6)]);
  });
  it("Expired Fervex should decrease the expiresIn and the benefit is 0", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
  it("Magic Pill never expires nor decreases in Benefit", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 9, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 9, 10)]);
  });
  it("Dafalgan should decrease the benefit 2 times and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 1, 1)]);
  });
  it("Expired Dafalgan should decrease expiresIn and the benefit 2 times fater than Expired normal drugs", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 1)]);
  });
});
