import DrugFactory from "./DrugFactory";
import { FERVEX } from "./Fervex";

/**
 *
 */
describe("Fervex drugs cases", () => {
  it("should increase the benefit and decrease expiresIn", () => {
    expect(DrugFactory.getInstance(FERVEX, 12, 6).updateBenefitValue()).toEqual(
      DrugFactory.getInstance(FERVEX, 11, 7)
    );
  });

  it("should increase the benefit with 2 unit and decrease expiresIn", () => {
    expect(
      DrugFactory.getInstance(FERVEX, 10, 20).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance(FERVEX, 9, 22));
  });

  it("should increase the benefit with 3 unit and decrease expiresIn", () => {
    expect(DrugFactory.getInstance(FERVEX, 5, 20).updateBenefitValue()).toEqual(
      DrugFactory.getInstance(FERVEX, 4, 23)
    );
  });

  it("should increase the benefit with 1 to not exceed 50 unit and decrease expiresIn", () => {
    expect(DrugFactory.getInstance(FERVEX, 4, 49).updateBenefitValue()).toEqual(
      DrugFactory.getInstance(FERVEX, 3, 50)
    );
  });

  it("should put benefit to 0 to not exceed 50 unit and decrease expiresIn", () => {
    expect(DrugFactory.getInstance(FERVEX, 0, 49).updateBenefitValue()).toEqual(
      DrugFactory.getInstance(FERVEX, -1, 0)
    );
  });
});
