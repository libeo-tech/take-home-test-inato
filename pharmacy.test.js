import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  // At the end of each day our system lowers both values for every drug
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateDrugs()).toEqual(
      new Drug("test", 1, 2)
    );
  });

  //Once the expiration date has passed, Benefit degrades twice as fast.
  it("should decrease the benefit by 2", () => {
    expect(new Pharmacy([new Drug("test", 0, 3)]).updateDrugs()).toEqual([
      new Drug("test", -1, 1)
    ]);
  });

  //The Benefit of an item is never negative.
  it("should keep the benefit at zero", () => {
    expect(new Pharmacy([new Drug("test", 1, 0)]).updateDrugs()).toEqual([
      new Drug("test", 0, 0)
    ]);
  });

  //The Benefit of an item is never more than 50.
  it("should keep benefit value at 50", () => {
    expect(new Pharmacy([new Drug("test", 2, 78)]).updateDrugs()).toEqual([
      new Drug("test", 1, 50)
    ]);
  });

  //specific drugs tests - herbal tea
  it("should increase the benefit by 1", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateDrugs()).toEqual([
      new Drug("Herbal Tea", 1, 4)
    ]);
  });
  it("should increase the benefit by 2", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateDrugs()).toEqual([
      new Drug("Herbal Tea", -1, 5)
    ]);
  });

  //specific drugs tests - Magic Pill
  it("should keep the benefit and expiresIn at their original value", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 5, 3)]).updateDrugs()).toEqual([
      new Drug("Magic Pill", 5, 3)
    ]);
  });

  //specific drugs tests - Fervex
  it("should increase the benefit by 2", () => {
    expect(new Pharmacy([new Drug("Fervex", 7, 3)]).updateDrugs()).toEqual([
      new Drug("Fervex", 6, 5)
    ]);
  });
  it("should increase the benefit by 3", () => {
    expect(new Pharmacy([new Drug("Fervex", 4, 3)]).updateDrugs()).toEqual([
      new Drug("Fervex", 3, 6)
    ]);
  });
  it("should drop the benefit to 0", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 3)]).updateDrugs()).toEqual([
      new Drug("Fervex", -1, 0)
    ]);
  });

  //specific drugs tests - Dafalgan
  it("should decrease benefit by 2", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 5, 3)]).updateDrugs()).toEqual([
      new Drug("Dafalgan", 4, 1)
    ]);
  });
});
