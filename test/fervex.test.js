import { Fervex } from "../src/drugs/Fervex";

describe("Fervex updateBenefitValue method", () => {
  it("should increase benefit by 1 if the expiration date > 10", () => {
    const drug = new Fervex(11, 10);
    drug.updateBenefitValue();
    expect.assertions(2);
    expect(drug.benefit).toBe(11);
    expect(drug.expiresIn).toBe(10);
  });
  it("should increase benefit by 2 if the expiration date is 5 < expirationDate <= 10", () => {
    const drug = new Fervex(6, 10);
    drug.updateBenefitValue();
    expect.assertions(2);
    expect(drug.benefit).toBe(12);
    expect(drug.expiresIn).toBe(5);
  });
  it("should increase benefit by 3 if the expiration date is expirationDate <= 5", () => {
    const drug = new Fervex(3, 10);
    drug.updateBenefitValue();
    expect.assertions(2);
    expect(drug.benefit).toBe(13);
    expect(drug.expiresIn).toBe(2);
  });
  it("should set benefit = 0 if the expiration date has expired", () => {
    const drug = new Fervex(0, 10);
    drug.updateBenefitValue();
    expect.assertions(2);
    expect(drug.benefit).toBe(0);
    expect(drug.expiresIn).toBe(-1);
  });
});
