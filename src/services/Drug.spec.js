import Drug from "./Drug";

/**
 *
 */
describe("standard drugs cases", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Drug("test", 2, 3).updateBenefitValue()).toEqual(
      new Drug("test", 1, 2)
    );
  });

  it("should decrease the benefit with 2 unit and decrease expiresIn", () => {
    expect(new Drug("test", 0, 3).updateBenefitValue()).toEqual(
      new Drug("test", -1, 1)
    );
  });

  it("should stop decrease at benefit 0 and decrease expiresIn", () => {
    expect(new Drug("test", -1, 1).updateBenefitValue()).toEqual(
      new Drug("test", -2, 0)
    );

    expect(new Drug("test", -3, 0).updateBenefitValue()).toEqual(
      new Drug("test", -4, 0)
    );
  });
});
