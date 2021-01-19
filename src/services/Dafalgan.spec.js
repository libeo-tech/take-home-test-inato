import { DAFALGAN } from "./Dafalgan";
import DrugFactory from "./DrugFactory";

/**
 *
 */
describe("Dafalgan drugs cases", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      DrugFactory.getInstance(DAFALGAN, 2, 3).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance(DAFALGAN, 1, 1));
  });

  it("should decrease the benefit with 4 unit and decrease expiresIn", () => {
    expect(
      DrugFactory.getInstance(DAFALGAN, 0, 5).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance(DAFALGAN, -1, 1));
  });

  it("should stop decrease at benefit 0 and decrease expiresIn", () => {
    expect(
      DrugFactory.getInstance(DAFALGAN, -1, 3).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance(DAFALGAN, -2, 0));

    expect(
      DrugFactory.getInstance(DAFALGAN, -3, 0).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance(DAFALGAN, -4, 0));
  });
});
