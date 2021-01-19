import DrugFactory from "./DrugFactory";

/**
 *
 */
describe("standard drugs cases", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(DrugFactory.getInstance("test", 2, 3).updateBenefitValue()).toEqual(
      DrugFactory.getInstance("test", 1, 2)
    );
  });

  it("should decrease the benefit with 2 unit and decrease expiresIn", () => {
    expect(DrugFactory.getInstance("test", 0, 3).updateBenefitValue()).toEqual(
      DrugFactory.getInstance("test", -1, 1)
    );
  });

  it("should stop decrease at benefit 0 and decrease expiresIn", () => {
    expect(DrugFactory.getInstance("test", -1, 1).updateBenefitValue()).toEqual(
      DrugFactory.getInstance("test", -2, 0)
    );

    expect(DrugFactory.getInstance("test", -3, 0).updateBenefitValue()).toEqual(
      DrugFactory.getInstance("test", -4, 0)
    );
  });
});
