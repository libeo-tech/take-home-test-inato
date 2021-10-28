import { Dafalgan } from "../../../src/models/Drugs";

describe("Dafalgan", () => {
  it("should decrease expiresIn and twice as fast benefit", () => {
    const dafalganCalculated = new Dafalgan(10, 10).toNextDay();
    const dafalganClean = new Dafalgan(9, 8);

    expect(dafalganCalculated.benefit).toEqual(dafalganClean.benefit);
    expect(dafalganCalculated.expiresIn).toEqual(dafalganClean.expiresIn);
  });
});
