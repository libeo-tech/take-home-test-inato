import Dafalgan from "./Dafalgan";

/**
 *
 */
describe("Dafalgan drugs cases", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Dafalgan(2, 3).updateBenefitValue()).toEqual(new Dafalgan(1, 1));
  });

  it("should decrease the benefit with 4 unit and decrease expiresIn", () => {
    expect(new Dafalgan(0, 5).updateBenefitValue()).toEqual(
      new Dafalgan(-1, 1)
    );
  });

  it("should stop decrease at benefit 0 and decrease expiresIn", () => {
    expect(new Dafalgan(-1, 3).updateBenefitValue()).toEqual(
      new Dafalgan(-2, 0)
    );

    expect(new Dafalgan(-3, 0).updateBenefitValue()).toEqual(
      new Dafalgan(-4, 0)
    );
  });
});
