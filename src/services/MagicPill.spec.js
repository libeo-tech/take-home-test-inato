import MagicPill from "./MagicPill";

/**
 *
 */
describe("Magic Pill drugs cases", () => {
  it("should fix Magic Pill params", () => {
    expect(new MagicPill(1, 49).updateBenefitValue()).toEqual(
      new MagicPill(1, 49)
    );
  });
});
