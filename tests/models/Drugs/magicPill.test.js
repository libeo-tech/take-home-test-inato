import { MagicPill } from "../../../src/models/Drugs";

describe("MagicPill", () => {
  it("should not increase the benefit and expiresIn", () => {
    const magicPillCalculated = new MagicPill(2, 3).toNextDay();
    const magicPillClean = new MagicPill(2, 3);

    expect(magicPillCalculated.benefit).toEqual(magicPillClean.benefit);
    expect(magicPillCalculated.expiresIn).toEqual(magicPillClean.expiresIn);
  });

});
