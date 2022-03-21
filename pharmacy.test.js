import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy error", () => {
  it("ERROR - should throw an error when processing a typo or a drug name that doens't exists on the system", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      new Error("Drug not found or not available")
    );
  });
});

describe("Dafalgan", () => {
  it("Should decrease the benefit by 2 and expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 20, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 19, 28)]);
  });
});

describe("Magic Pill", () => {
  it("The item never expires nor decreases in Benefit", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 20, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 20, 30)]);
  });
});

describe("Herbal Tea", () => {
  it("Benefit increases the older it gets. Should increase by 1 if expire date is more than 0 and should decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 13, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 12, 31)]);
  });
});

describe("Herbal Tea", () => {
  it("Benefit increases twice as fast after the expiration date. Should increase by 2 after expire date and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 32)]);
  });
});

describe("Fervex", () => {
  it("Less than 10 days - should increases benefit by 1 when there are more than 10 days left to expire and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 14, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 13, 31)]);
  });
});

describe("Fervex", () => {
  it("10 to 5 days - should increases benefit by 2 when there are 10 days or less, and more than 5 days left to expire and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 11, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 10, 32)]);
  });
});

describe("Fervex", () => {
  it("Less than 5 days - should increases benefit by 3 when there are 5 days or less left to expire and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 6, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 5, 33)]);
  });
});

describe("Fervex", () => {
  it("0 or less days - should set benefit to 0 when there are 0 days or less left to expire and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 1, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 0, 0)]);
  });
});

describe("Common drug - no special effects", () => {
  it("Should decrease benefit by 1 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Doliprane", 6, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Doliprane", 5, 29)]);
  });
});

describe("Overall test", () => {
  it("The Benefit of an item is never negative", () => {
    expect(
      new Pharmacy([
        new Drug("Doliprane", -2, 0),
        new Drug("Fervex", -3, 0),
        new Drug("Dafalgan", 0, 0)
      ]).updateBenefitValue()
    ).toEqual([
      new Drug("Doliprane", -3, 0),
      new Drug("Fervex", -4, 0),
      new Drug("Dafalgan", -1, 0)
    ]);
  });
});

describe("Overall test", () => {
  it("The Benefit of an item is never more than 50", () => {
    expect(
      new Pharmacy([
        new Drug("Herbal Tea", -2, 50),
        new Drug("Fervex", 4, 49)
      ]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -3, 50), new Drug("Fervex", 3, 50)]);
  });
});

describe("Overall test", () => {
  it("Once the expiration date has passed, benefit degrades twice as fast. Benefits Dafalgan should decrease by 4 and Doliprane should decrease by 2, and both should decrease expireIn by 1", () => {
    expect(
      new Pharmacy([
        new Drug("Dafalgan", -2, 34),
        new Drug("Doliprane", -6, 28)
      ]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -3, 30), new Drug("Doliprane", -7, 26)]);
  });
});
