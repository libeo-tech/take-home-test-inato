import DrugFactory from "./DrugFactory";
import { MAGIC_PILL } from "./MagicPill";

/**
 *
 */
describe("Magic Pill drugs cases", () => {
  it("should fix Magic Pill params", () => {
    expect(
      DrugFactory.getInstance(MAGIC_PILL, 1, 49).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance(MAGIC_PILL, 1, 49));
  });
});
