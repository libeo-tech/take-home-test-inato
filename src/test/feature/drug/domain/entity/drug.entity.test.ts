import { Drug } from "feature/drug";

describe("Drug Entity", () => {
  it("should have an expiresIn value which denotes the number of days we have until the item expires", () => {
    const drug = new Drug("d", 10, 10);
    expect(drug.expiresIn).toBe(10);
  });

  it("should have a benefit value which denotes how powerful the drug is", () => {
    const drug = new Drug("d", 10, 10);
    expect(drug.benefit).toBe(10);
  });

  it("should lower the values of benefit and expiresIn at the end of each day", () => {
    const creationTime = 1530518207007;

    jest.spyOn(global.Date, "now").mockImplementation(() => creationTime);
    const drug = new Drug("d", 10, 10);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 1000 * 60 * 60 * 24);
    expect(drug.expiresIn).toBe(9);
    expect(drug.benefit).toBe(9);
  });
});
