import { MagicPill } from "feature/drug";
import { creationTime, dayInMs } from "./constants";

describe("Magic Pill Entity", () => {
  it("should have an expiresIn value which denotes the number of days we have until the item expires", () => {
    const drug = new MagicPill("MagicPill", 10, 10);
    expect(drug.expiresIn).toBeCloseTo(10);
  });

  it("should have a benefit value which denotes how powerful the drug is", () => {
    const drug = new MagicPill("MagicPill", 10, 10);
    expect(drug.benefit).toBeCloseTo(10);
  });

  it("should never lower the values of benefit and expiresIn at the end of each day", () => {
    jest.spyOn(global.Date, "now").mockImplementation(() => creationTime);
    const drug = new MagicPill("MagicPill", 10, 10);

    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => creationTime + dayInMs);
    expect(drug.expiresIn).toBe(10);
    expect(drug.benefit).toBe(10);
  });
  it("should never exceed 50 in benefit ", () => {
    const veryBeneficialDrug = new MagicPill("MagicPill", 10, 100);
    expect(veryBeneficialDrug.benefit).toBe(50);
    const limitBeneficialDrug = new MagicPill("MagicPill", 10, 50);
    expect(limitBeneficialDrug.benefit).toBe(50);
  });
});
