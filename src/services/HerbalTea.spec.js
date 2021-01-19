import DrugFactory from "./DrugFactory";
import { HERBAL_TEA } from "./HerbalTea";

/**
 *
 */
describe("Herbal Tea drugs cases", () => {
  it("should increase the benefit and decrease expiresIn", () => {
    expect(
      DrugFactory.getInstance(HERBAL_TEA, 9, 6).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance(HERBAL_TEA, 8, 7));
  });

  it("should increase the benefit with 2 units and decrease expiresIn", () => {
    expect(
      DrugFactory.getInstance(HERBAL_TEA, 0, 15).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance(HERBAL_TEA, -1, 17));
  });

  it("should stop incresing benefit to 50 and decrease expiresIn", () => {
    expect(
      DrugFactory.getInstance(HERBAL_TEA, 0, 49).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance(HERBAL_TEA, -1, 50));

    expect(
      DrugFactory.getInstance(HERBAL_TEA, -1, 50).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance(HERBAL_TEA, -2, 50));
  });
});
