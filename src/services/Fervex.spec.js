import Fervex from "./Fervex";

/**
 *
 */
describe("Fervex drugs cases", () => {
  it("should increase the benefit and decrease expiresIn", () => {
    expect(new Fervex(12, 6).updateBenefitValue()).toEqual(new Fervex(11, 7));
  });

  it("should increase the benefit with 2 unit and decrease expiresIn", () => {
    expect(new Fervex(10, 20).updateBenefitValue()).toEqual(new Fervex(9, 22));
  });

  it("should increase the benefit with 3 unit and decrease expiresIn", () => {
    expect(new Fervex(5, 20).updateBenefitValue()).toEqual(new Fervex(4, 23));
  });

  it("should increase the benefit with 1 to not exceed 50 unit and decrease expiresIn", () => {
    expect(new Fervex(4, 49).updateBenefitValue()).toEqual(new Fervex(3, 50));
  });

  it("should put benefit to 0 to not exceed 50 unit and decrease expiresIn", () => {
    expect(new Fervex(0, 49).updateBenefitValue()).toEqual(new Fervex(-1, 0));
  });
});
