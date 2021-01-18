import { DrugFactory } from "./pharmacy";

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

/**
 *
 */
describe("Herbal Tea drugs cases", () => {
  it("should increase the benefit and decrease expiresIn", () => {
    expect(
      DrugFactory.getInstance("Herbal Tea", 9, 6).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance("Herbal Tea", 8, 7));
  });

  it("should increase the benefit with 2 units and decrease expiresIn", () => {
    expect(
      DrugFactory.getInstance("Herbal Tea", 0, 15).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance("Herbal Tea", -1, 17));
  });

  it("should stop incresing benefit to 50 and decrease expiresIn", () => {
    expect(
      DrugFactory.getInstance("Herbal Tea", 0, 49).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance("Herbal Tea", -1, 50));

    expect(
      DrugFactory.getInstance("Herbal Tea", -1, 50).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance("Herbal Tea", -2, 50));
  });
});

/**
 *
 */
describe("Herbal Tea drugs cases", () => {
  it("should increase the benefit and decrease expiresIn", () => {
    expect(
      DrugFactory.getInstance("Herbal Tea", 9, 6).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance("Herbal Tea", 8, 7));
  });

  it("should increase the benefit with 2 units and decrease expiresIn", () => {
    expect(
      DrugFactory.getInstance("Herbal Tea", 0, 15).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance("Herbal Tea", -1, 17));
  });

  it("should stop incresing benefit to 50 and decrease expiresIn", () => {
    expect(
      DrugFactory.getInstance("Herbal Tea", 0, 49).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance("Herbal Tea", -1, 50));

    expect(
      DrugFactory.getInstance("Herbal Tea", -1, 50).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance("Herbal Tea", -2, 50));
  });
});

/**
 *
 */
describe("Herbal Tea drugs cases", () => {
  it("should increase the benefit and decrease expiresIn", () => {
    expect(
      DrugFactory.getInstance("Fervex", 12, 6).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance("Fervex", 11, 7));
  });

  it("should increase the benefit with 2 unit and decrease expiresIn", () => {
    expect(
      DrugFactory.getInstance("Fervex", 10, 20).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance("Fervex", 9, 22));
  });

  it("should increase the benefit with 3 unit and decrease expiresIn", () => {
    expect(
      DrugFactory.getInstance("Fervex", 5, 20).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance("Fervex", 4, 23));
  });

  it("should increase the benefit with 1 to not exceed 50 unit and decrease expiresIn", () => {
    expect(
      DrugFactory.getInstance("Fervex", 4, 49).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance("Fervex", 3, 50));
  });

  it("should put benefit to 0 to not exceed 50 unit and decrease expiresIn", () => {
    expect(
      DrugFactory.getInstance("Fervex", 0, 49).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance("Fervex", -1, 0));
  });
});

/**
 *
 */
describe("Magic Pill drugs cases", () => {
  it("should fix Magic Pill params", () => {
    expect(
      DrugFactory.getInstance("Magic Pill", 1, 49).updateBenefitValue()
    ).toEqual(DrugFactory.getInstance("Magic Pill", 1, 49));
  });
});
