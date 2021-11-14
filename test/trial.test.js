import { Pharmacy } from "../pharmacy";
import { Drug } from "../Drug";

describe("Pharmacy default", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });
  it("should degrades benefit twice after expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 1)]);
  });
  it("should benefit never be negative", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 1)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 0)]);
  });
  it("should benefit never be negative", () => {
    expect(
      new Pharmacy([new Drug("test", -2, 1)]).updateBenefitValue()
    ).toEqual([new Drug("test", -3, 0)]);
  });
});

describe("Pharmacy Dafalgan", () => {
  it("should decrease the benefit and expiresIn twice as normal drugs", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 1, 1)]);
  });
  it("should degrades benefit by 4 after expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 1)]);
  });
  it("should degrades benefit by 4 && never be negative ", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 0)]);
  });
  it("should benefit never be negative", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 0)]);
  });
  it("should benefit never be negative", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", -2, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -3, 0)]);
  });
  it("should benefit decrease by 4 when expired", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", -1, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -2, 6)]);
  });
});

describe("Pharmacy Herbal Tea", () => {
  it("should benefit of Herbal Tea never be more than 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 50)]);
  });
  it("should benefit of Herbal Tea never be more than 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 49)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 50)]);
  });
  it("should benefit of Herbal Tea never be more than 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 48)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 50)]);
  });
});

describe("Pharmacy Fervex", () => {
  it("should benefit of Fervex drops to 0", () => {
    expect(
      new Pharmacy([new Drug("Fervex", -1, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -2, 0)]);
  });
  it("should benefit of Fervex never be more than 50 && increase by 2", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 8, 48)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 7, 50)]);
  });
  it("should benefit of Fervex never be more than 50 && increase by 2", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 8, 49)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 7, 50)]);
  });
  it("should benefit of Fervex never be more than 50 && increase by 2", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 8, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 7, 50)]);
  });

  it("should benefit of Fervex never be more than 50 && increase by 3", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 7)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 10)]);
  });
  it("should benefit of Fervex never be more than 50 && increase by 3", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 48)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 50)]);
  });
  it("should benefit of Fervex never be more than 50 && increase by 3", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 4, 49)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 3, 50)]);
  });
  it("should benefit of Fervex never be more than 50 && increase by 3", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 4, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 3, 50)]);
  });
});
