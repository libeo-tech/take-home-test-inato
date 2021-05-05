import { buildDrug, Dafalgan, Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});

describe("Drug builder", () => {
  it("should create a drug with the right type", () => {
    class TestDrug extends Drug {}

    expect(buildDrug("TestDrug", 1, 2, TestDrug)).toEqual(
      new TestDrug("TestDrug", 1, 2)
    );
  });

  it("should fail to create a drug if the drug type is unknown", () => {
    class TestDrug {}

    expect(() => buildDrug("TestDrug", 1, 2, TestDrug)).toThrow(
      "Unable to create drug TestDrug : TestDrug is not a know drug type"
    );
  });
});

describe("Drug", () => {
  it("should decrease benefit and expiresIn", () => {
    const drug = new Drug("Test", 2, 2);
    drug.decreaseBenefit();
    drug.decreaseExpiresIn();
    expect(drug).toEqual(new Drug("Test", 1, 1));
  });

  it("should stop decreasing benefit at 0", () => {
    const drug = new Drug("Test", 2, 0);
    drug.decreaseBenefit();
    drug.decreaseExpiresIn();
    expect(drug).toEqual(new Drug("Test", 1, 0));
  });
});

describe("Dafalgan", () => {
  it("should decrease benefit twice", () => {
    const dafalgan = new Dafalgan("Dafalgan", 2, 2);
    dafalgan.decreaseBenefit();
    dafalgan.decreaseExpiresIn();
    expect(dafalgan).toEqual(new Dafalgan("Dafalgan", 1, 0));
  });
});
