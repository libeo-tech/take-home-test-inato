import { Drug } from "../src/drugs/Drug";

describe("Drug class constructor", () => {
  it("should set a default value for benefit factor, expiresIn and benefit", () => {
    const drug = new Drug();
    expect(drug.benefitFactor).toBe(-1);
    expect(drug.expiresIn).toBe(0);
    expect(drug.benefit).toBe(0);
  });
});
describe("Drug class setter", () => {
  it("should prevent max value from beeing set a class construction", () => {
    const drug = new Drug("drug", 10, 60);
    expect.assertions(1);
    expect(drug.benefit).toBe(50);
  });
  it("should prevent min value from beeing set a class construction", () => {
    const drug = new Drug("drug", 10, -60);
    expect.assertions(1);
    expect(drug.benefit).toBe(0);
  });
  it("should prevent max value from beeing set", () => {
    const drug = new Drug("drug", 10, 10);
    expect.assertions(2);
    expect(drug.benefit).toBe(10);
    drug.benefit = 60;
    expect(drug.benefit).toBe(50);
  });
  it("should prevent min value from beeing set", () => {
    const drug = new Drug("drug", 10, 10);
    expect.assertions(2);
    expect(drug.benefit).toBe(10);
    drug.benefit = 0;
    expect(drug.benefit).toBe(0);
  });
});
describe("Drug updateBenefitValue method", () => {
  it("should update benefit and expiresIn, benefit should increase if benefit factor is positive", () => {
    const drug = new Drug("drug", 10, 10, 3);
    drug.updateBenefitValue();
    expect.assertions(2);
    expect(drug.benefit).toBe(13);
    expect(drug.expiresIn).toBe(9);
  });
  it("should update benefit and expiresIn, benefit should decrease if benefit factor is positive", () => {
    const drug = new Drug("drug", 10, 10, -4);
    drug.updateBenefitValue();
    expect.assertions(2);
    expect(drug.benefit).toBe(6);
    expect(drug.expiresIn).toBe(9);
  });
});
