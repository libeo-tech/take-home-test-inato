import { MagicPill } from "../src/drugs/MagicPill";

describe("MagicPill updateBenefitValue method", () => {
  it("should not decreases expiresIn nor benefit", () => {
    const drug = new MagicPill(11, 10);
    drug.updateBenefitValue();
    expect.assertions(2);
    expect(drug.benefit).toBe(10);
    expect(drug.expiresIn).toBe(11);
  });
});
