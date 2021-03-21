import Pharmacy from "../model/pharmacy";
import { Drug } from "../model/drugs"; 

describe("Pharmacy", () => {
  it("updates correctly the benefit and expiration date of every drug", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual([new Drug("test", 1, 2)]);
  });
});
