import HerbalTea from "./HerbalTea";

/**
 *
 */
describe("Herbal Tea drugs cases", () => {
  it("should increase the benefit and decrease expiresIn", () => {
    expect(new HerbalTea(9, 6).updateBenefitValue()).toEqual(
      new HerbalTea(8, 7)
    );
  });

  it("should increase the benefit with 2 units and decrease expiresIn", () => {
    expect(new HerbalTea(0, 15).updateBenefitValue()).toEqual(
      new HerbalTea(-1, 17)
    );
  });

  it("should stop incresing benefit to 50 and decrease expiresIn", () => {
    expect(new HerbalTea(0, 49).updateBenefitValue()).toEqual(
      new HerbalTea(-1, 50)
    );

    expect(new HerbalTea(-1, 50).updateBenefitValue()).toEqual(
      new HerbalTea(-2, 50)
    );
  });
});
