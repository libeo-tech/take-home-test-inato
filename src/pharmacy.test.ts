import { Drug, Pharmacy } from "./types";
import { updateBenefitValue } from "./mutations";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    const drug = new Drug("test", 2, 3);
    const pharmacy = new Pharmacy([drug]);
    expect(updateBenefitValue(pharmacy)).toEqual([new Drug("test", 1, 2)]);
  });
});
