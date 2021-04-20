import { Dalfagan } from "feature/drug";
import { creationTime, dayInMs } from "./constants";

describe("Drug Entity", () => {
  it("should have an expiresIn value which denotes the number of days we have until the item expires", () => {
    const drug = new Dalfagan("Dalfagan", 10, 10);
    expect(drug.expiresIn).toBeCloseTo(10);
  });

  it("should have a benefit value which denotes how powerful the drug is", () => {
    const drug = new Dalfagan("Dalfagan", 10, 10);
    expect(drug.benefit).toBeCloseTo(10);
  });

  it("should lower the values of benefit and expiresIn at the end of each day twice as fast as normal drug", () => {
    jest.spyOn(global.Date, "now").mockImplementation(() => creationTime);
    const drug = new Dalfagan("Dalfagan", 10, 10);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + dayInMs);
    expect(drug.expiresIn).toBe(9);
    expect(drug.benefit).toBe(8);
  });

  it("should degrade twice as fast the benefit once the expiration date has passed", () => {
    jest.spyOn(global.Date, "now").mockImplementation(() => creationTime);
    const drug = new Dalfagan("Dalfagan", 3, 20);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 3 * dayInMs);
    expect(drug.expiresIn).toBe(0);
    expect(drug.benefit).toBe(14);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 5 * dayInMs);
    expect(drug.expiresIn).toBe(-2);
    expect(drug.benefit).toBe(6);
  });

  it("should never degrade the benefit to negative value", () => {
    jest.spyOn(global.Date, "now").mockImplementation(() => creationTime);
    const drug = new Dalfagan("Dalfagan", 3, 2);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 2 * dayInMs);
    expect(drug.expiresIn).toBe(1);
    expect(drug.benefit).toBe(0);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 3 * dayInMs);
    expect(drug.expiresIn).toBe(0);
    expect(drug.benefit).toBe(0);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + 4 * dayInMs);
    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(0);
  });
  it("should never exceed 50 in benefit ", () => {
    const veryBeneficialDrug = new Dalfagan("Dalfagan", 10, 100);
    expect(veryBeneficialDrug.benefit).toBe(50);
    const limitBeneficialDrug = new Dalfagan("Dalfagan", 10, 50);
    expect(limitBeneficialDrug.benefit).toBe(50);
  });
});
