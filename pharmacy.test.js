import { Drug, Pharmacy } from "./pharmacy";

// Normal drug tests
describe("Pharmacy", () => {
  it("(normal drug) should decrease the benefit by 1 and expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("normal drug", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("normal drug", 1, 2)]);
  });
});

describe("Pharmacy", () => {
  it("(normal drug) should decrease the benefit by 2 and expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("normal drug", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("normal drug", -1, 1)]);
  });
});

describe("Pharmacy", () => {
  it("(normal drug) should make to benefit equal to 0 and expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("normal drug", 0, 1)]).updateBenefitValue()
    ).toEqual([new Drug("normal drug", -1, 0)]);
  });
});

// Dafalgan tests
describe("Pharmacy", () => {
  it("(Dafalgan) should decrease the benefit by 2 and expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 1, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 0, 0)]);
  });
});

describe("Pharmacy", () => {
  it("(Dafalgan) should decrease the benefit by 4 and expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 4)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 0)]);
  });
});

describe("Pharmacy", () => {
  it("(Dafalgan) should make to benefit equal to 0 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 0)]);
  });
});

// Magic Pill tests
describe("Pharmacy", () => {
  it("(Magic Pill) should keep the same benefit and expiresIn values", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 10, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 10, 10)]);
  });
});

// Fervex tests
describe("Pharmacy", () => {
  it("(Fervex) should increase the benefit by 1 and expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 11, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 10, 11)]);
  });
});

describe("Pharmacy", () => {
  it("(Fervex) should increase the benefit by 2 and expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 12)]);
  });
});

describe("Pharmacy", () => {
  it("(Fervex) should increase the benefit by 3 and expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 13)]);
  });
});

describe("Pharmacy", () => {
  it("(Fervex) should make the benefit equal to 0 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
});

describe("Pharmacy", () => {
  it("(Fervex) should make to benefit equal to 0 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 4)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
});

// Herbal Tea test
describe("Pharmacy", () => {
  it("(Herbal Tea) should increase the benefit by 1 and expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 11)]);
  });
});

describe("Pharmacy", () => {
  it("(Herbal Tea) should increase the benefit by 2 and expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 12)]);
  });
});

describe("Pharmacy", () => {
  it("(Herbal Tea) should keep the same benefit and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 10, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 9, 50)]);
  });
});
