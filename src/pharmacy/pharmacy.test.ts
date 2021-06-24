import { Drug } from "../drug/drug";
import { Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  /* Default Drug */
  it("[Default Drug] should decrease the benefit and expiresIn before expiration", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("[Default Drug] should decrease the benefit*2 and expiresIn after expiration", () => {
    expect(
      new Pharmacy([new Drug("test", -1, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", -2, 1)]);
    expect(
      new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 1)]);
  });

  it("[Default Drug] benefit should not be negative", () => {
    expect(
      new Pharmacy([new Drug("test", 5, 0)]).updateBenefitValue()
    ).toEqual([new Drug("test", 4, 0)]);

    expect(
      new Pharmacy([new Drug("test", -5, 0)]).updateBenefitValue()
    ).toEqual([new Drug("test", -6, 0)]);

    /*
    * TODO: Failing test, the output should never be negative even if input is
    expect(
      new Pharmacy([new Drug("test", -5, -10)]).updateBenefitValue()
    ).toEqual([new Drug("test", -6, 0)]);
    */
  });

  /* Herbal Tea */
  it("[Herbal Tea] should increase benefit and decrease expiresIn before expiration", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 5, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 4, 3)]);

    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 6)]);

    expect(
      new Pharmacy([new Drug("Herbal Tea", 1, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 0, 6)]);
  });

  it("[Herbal Tea] should increase benefit*2 and decrease expiresIn after expiration", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 4)]);

    expect(
      new Pharmacy([new Drug("Herbal Tea", -2, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -3, 7)]);
  });

  it("[Herbal Tea] benefit should never be above 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 5, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 4, 50)]);

    expect(
      new Pharmacy([new Drug("Herbal Tea", -2, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -3, 50)]);

    /*
    * TODO: Failing test, the output should never be above 50 even if input is
    expect(
      new Pharmacy([new Drug("test", 5, 60)]).updateBenefitValue()
    ).toEqual([new Drug("test", 4, 50)]);
    expect(
      new Pharmacy([new Drug("test", -5, 49)]).updateBenefitValue()
    ).toEqual([new Drug("test", -6, 50)]);
    */
  });

  /* Magic Pill */
  it("[Magic Pill] should never expires nor decreases in benefit", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 5, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 5, 2)]);

    expect(
      new Pharmacy([new Drug("Magic Pill", -2, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", -2, 5)]);
  });

  /* Fervex */
  it("[Fervex] should increase before 10 days before expiration", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 15, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 14, 11)]);

    expect(
      new Pharmacy([new Drug("Fervex", 20, 0)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 19, 1)]);

    expect(
      new Pharmacy([new Drug("Fervex", 11, 0)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 10, 1)]);
  });

  it("[Fervex] should increase*2 between 10 to 5 days before expiration", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 9, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 8, 7)]);

    expect(
      new Pharmacy([new Drug("Fervex", 10, 0)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 2)]);

    expect(
      new Pharmacy([new Drug("Fervex", 6, 0)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 5, 2)]);
  });

  it("[Fervex] should increase*3 between 5 to 0 days before expiration", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 8)]);

    expect(
      new Pharmacy([new Drug("Fervex", 3, 0)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 2, 3)]);
  });
});
