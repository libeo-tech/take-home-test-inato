import { Drug } from "./Drug";

describe("Drug", () => {
  it("has an expiresIn value which denotes the number of days we have until the item expires", () => {
    expect(new Drug()).toHaveProperty("expiresIn");
  });
  it("has a benefit value which denotes how powerful the drug is", () => {
    expect(new Drug()).toHaveProperty("benefit");
  });
});
