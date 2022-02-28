import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should keep benefit equal to zero and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 0)]
    );
  });

  it("should decrease the benefit per two and decrease expiresIn to negative value", () => {
    expect(
      new Pharmacy([new Drug("test", -2, 10)]).updateBenefitValue()
    ).toEqual([new Drug("test", -3, 8)]);
  });

  it("should increase the benefit and decrease expiresIn for Herbal Tea", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });

  //faire test de l'herbe avec le x2 changer le nom du test
  it("should increase the benefit per two when decrease in negative number expiresIn for Herbal Tea", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 5)]);
  });

  // test du maximum de benefice possible en incrémentant en évitant davoir le cas du 51
  it("should increase the benefit to the max value when decrease in negative number expiresIn for Herbal Tea", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 49)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 50)]);
  });

  it("should increase the benefit and decrease expiresIn for Fervex", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 15, 44)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 14, 45)]);
  });

  it("should increase the benefit per two when decrease expiresIn less 10 for Fervex", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 44)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 46)]);
  });

  it("should increase the benefit per three when decrease expiresIn less 5 for Fervex", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 33)]);
  });

  it("should set the benefit to zero per two when decrease expiresIn less 0 for Fervex", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });

  it("should decrease the benefit per two and decrease expiresIn for Dafalgan", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 4, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 3, 28)]);
  });

  it("should decrease the benefit per four and decrease expiresIn to negative value for Dafalgan", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 26)]);
  });
});
