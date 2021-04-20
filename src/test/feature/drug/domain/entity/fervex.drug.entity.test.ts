import { Fervex } from "feature/drug";
import { creationTime, dayInMs } from "./constants";

describe("Fervex", () => {
  it("should have an expiresIn value which denotes the number of days we have until the item expires", () => {
    const drug = new Fervex("Fervex", 10, 10);
    expect(drug.expiresIn).toBeCloseTo(10);
  });
  it("should have a benefit value which denotes how powerful the drug is", () => {
    const drug = new Fervex("Fervex", 10, 10);
    expect(drug.benefit).toBeCloseTo(10);
  });
  it("should lower the values of benefit and expiresIn at the end of each day", () => {
    jest.spyOn(global.Date, "now").mockImplementation(() => creationTime);
    const drug = new Fervex("Fervex", 20, 20);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + dayInMs);
    expect(drug.expiresIn).toBe(19);
    expect(drug.benefit).toBe(19);
  });
  it("should increases in benefit by 2 when there are 10 days or less in expiration", () => {
    jest.spyOn(global.Date, "now").mockImplementation(() => creationTime);
    const drug = new Fervex("Fervex", 20, 20);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 10 * dayInMs);
    expect(drug.expiresIn).toBe(10);
    expect(drug.benefit).toBe(13);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 11 * dayInMs);
    expect(drug.expiresIn).toBe(9);
    expect(drug.benefit).toBe(15);
  });
  it("should increases in benefit by 3 when there are 5 days or less in expiration", () => {
    jest.spyOn(global.Date, "now").mockImplementation(() => creationTime);
    const drug = new Fervex("Fervex", 20, 20);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 15 * dayInMs);
    expect(drug.expiresIn).toBe(5);
    expect(drug.benefit).toBe(24);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 16 * dayInMs);
    expect(drug.expiresIn).toBe(4);
    expect(drug.benefit).toBe(27);
  });
  it("should drop benefit to 0 after expiration date", () => {
    jest.spyOn(global.Date, "now").mockImplementation(() => creationTime);
    const drug = new Fervex("Fervex", 20, 20);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 20 * dayInMs);
    expect(drug.expiresIn).toBe(0);
    expect(drug.benefit).toBe(39);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 21 * dayInMs);
    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(0);
  });
  it("should never exceed 50 in benefit ", () => {
    jest.spyOn(global.Date, "now").mockImplementation(() => creationTime);
    const drug = new Fervex("Fervex", 100, 100);
    expect(drug.benefit).toBe(50);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 50 * dayInMs);
    expect(drug.benefit).toBe(50);
  });
  it("should never degrade the benefit to negative value", () => {
    jest.spyOn(global.Date, "now").mockImplementation(() => creationTime);
    const drug = new Fervex("Fervex", 1, 2);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 3 * dayInMs);
    expect(drug.benefit).toBe(0);
  });
});
