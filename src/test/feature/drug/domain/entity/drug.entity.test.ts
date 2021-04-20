import { Drug } from "feature/drug";
import { mockDateNow } from "test/utils";
import { creationTime, dayInMs } from "./constants";

describe("Drug Entity", () => {
  it("should have an expiresIn value which denotes the number of days we have until the item expires", () => {
    const drug = new Drug("d", 10, 10);
    expect(drug.expiresIn).toBeCloseTo(10);
  });

  it("should have a benefit value which denotes how powerful the drug is", () => {
    const drug = new Drug("d", 10, 10);
    expect(drug.benefit).toBeCloseTo(10);
  });

  it("should lower the values of benefit and expiresIn at the end of each day", () => {
    mockDateNow(creationTime);
    const drug = new Drug("d", 10, 10);

    mockDateNow(creationTime + dayInMs);
    expect(drug.expiresIn).toBe(9);
    expect(drug.benefit).toBe(9);
  });

  it("should degrade twice as fast the benefit one the expiration date has passed", () => {
    mockDateNow(creationTime);
    const drug = new Drug("d", 10, 20);

    mockDateNow(creationTime + 10 * dayInMs);
    expect(drug.expiresIn).toBe(0);
    expect(drug.benefit).toBe(10);

    mockDateNow(creationTime + 11 * dayInMs);
    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(8);

    mockDateNow(creationTime + 12 * dayInMs);
    expect(drug.expiresIn).toBe(-2);
    expect(drug.benefit).toBe(6);
  });

  it("should never degrade the benefit to negative value", () => {
    mockDateNow(creationTime);
    const drug = new Drug("d", 10, 2);

    mockDateNow(creationTime + 2 * dayInMs);
    expect(drug.expiresIn).toBe(8);
    expect(drug.benefit).toBe(0);

    mockDateNow(creationTime + 3 * dayInMs);
    expect(drug.expiresIn).toBe(7);
    expect(drug.benefit).toBe(0);

    mockDateNow(creationTime + 4 * dayInMs);
    expect(drug.expiresIn).toBe(6);
    expect(drug.benefit).toBe(0);
  });
  it("should never exceed 50 in benefit ", () => {
    const veryBeneficialDrug = new Drug("d", 10, 100);
    expect(veryBeneficialDrug.benefit).toBe(50);
    const limitBeneficialDrug = new Drug("d", 10, 50);
    expect(limitBeneficialDrug.benefit).toBe(50);
  });
});
