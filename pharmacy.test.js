import { Drug, Pharmacy } from "./pharmacy";

const test = new Drug("test", 2, 3);
const pharmacy = new Pharmacy([test]);

describe("Pharmacy", () => {
  it("[unit] should decrease benefit & expiresIn", () => {
    expect(pharmacy.updateBenefitValue()).toMatchSnapshot();
  });
});
