import { Drug } from "feature/drug";

const creationTime = 1530518207007;
const dayInMs = 1000 * 60 * 60 * 24;

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
    jest.spyOn(global.Date, "now").mockImplementation(() => creationTime);
    const drug = new Drug("d", 10, 10);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + dayInMs);
    expect(drug.expiresIn).toBe(9);
    expect(drug.benefit).toBe(9);
  });

  it("should degrade twice as fast the benefit one the expiration date has passed", () => {
    jest.spyOn(global.Date, "now").mockImplementation(() => creationTime);
    const drug = new Drug("d", 10, 20);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 10 * dayInMs);
    expect(drug.expiresIn).toBe(0);
    expect(drug.benefit).toBe(10);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 11 * dayInMs);
    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(8);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 12 * dayInMs);
    expect(drug.expiresIn).toBe(-2);
    expect(drug.benefit).toBe(6);
  });

  it("should never degrade the benefit to negative value", () => {
    jest.spyOn(global.Date, "now").mockImplementation(() => creationTime);
    const drug = new Drug("d", 10, 2);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 2 * dayInMs);
    expect(drug.expiresIn).toBe(8);
    expect(drug.benefit).toBe(0);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 3 * dayInMs);
    expect(drug.expiresIn).toBe(7);
    expect(drug.benefit).toBe(0);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 4 * dayInMs);
    expect(drug.expiresIn).toBe(6);
    expect(drug.benefit).toBe(0);
  });
});
