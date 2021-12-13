import { Dafalgan } from "../src/drugs/Dafalgan";

describe("Dafalgan", () => {
  it("should decrease the benefit twice as fast as the normal drug", () => {
    const dafalgan = new Dafalgan(19, 28);
    dafalgan.updateBenefitValue();
    expect(dafalgan.benefit).toBe(26);
    expect(dafalgan.expiresIn).toBe(18);
  });
});
