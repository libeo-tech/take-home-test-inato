import { HerbalTea } from "feature/drug";
import { creationTime, dayInMs } from "./constants";

describe("Herbal Tea", () => {
  it("should lower the values of benefit and expiresIn at the end of each day", () => {
    jest.spyOn(global.Date, "now").mockImplementation(() => creationTime);
    const drug = new HerbalTea("HerbalTea", 10, 10);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + dayInMs);
    expect(drug.expiresIn).toBe(9);
    expect(drug.benefit).toBe(9);
  });
  it("should increases in benefit twice as fast after the expiration date", () => {
    jest.spyOn(global.Date, "now").mockImplementation(() => creationTime);
    const drug = new HerbalTea("HerbalTea", 10, 20);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 10 * dayInMs);
    expect(drug.expiresIn).toBe(0);
    expect(drug.benefit).toBe(10);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 11 * dayInMs);
    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(12);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 12 * dayInMs);
    expect(drug.expiresIn).toBe(-2);
    expect(drug.benefit).toBe(14);
  });
  it("should never exceed 50 in benefit ", () => {
    jest.spyOn(global.Date, "now").mockImplementation(() => creationTime);
    const drug = new HerbalTea("Herbal Tea", 100, 100);
    expect(drug.benefit).toBe(50);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 50 * dayInMs);
    expect(drug.benefit).toBe(50);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 100 * dayInMs);
    expect(drug.benefit).toBe(0);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 126 * dayInMs);
    expect(drug.benefit).toBe(50);
  });
});
