import * as medicine from "./drugs";
import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new medicine.Drug("test", 2, 3)]).updateDrugsValues()
    ).toEqual([new medicine.Drug("test", 1, 2)]);
  });
});