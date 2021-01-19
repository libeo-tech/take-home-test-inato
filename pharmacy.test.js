import {
  DrugFactory,
  DAFALGAN,
  FERVEX,
  MAGIC_PILL,
  HERBAL_TEA,
} from "./pharmacy";

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

/**
 *
 */
describe("Test error cases", () => {
  it("should throw Error because all args are not provided", () => {
    expect(() => {
      DrugFactory.getInstance();
    }).toThrow(
      new Error("Must provide all 'name' , 'expiresIn' , 'benefit' arguments")
    );

    expect(() => {
      DrugFactory.getInstance(FERVEX);
    }).toThrow(
      new Error("Must provide all 'name' , 'expiresIn' , 'benefit' arguments")
    );

    expect(() => {
      DrugFactory.getInstance(MAGIC_PILL, 1);
    }).toThrow(
      new Error("Must provide all 'name' , 'expiresIn' , 'benefit' arguments")
    );
  });

  it("should throw Error because expiresIn or benefit is not int", () => {
    expect(() => {
      DrugFactory.getInstance(MAGIC_PILL, "1", 0);
    }).toThrow(new Error("args 'expiresIn' and 'benefit' must be integer"));

    expect(() => {
      DrugFactory.getInstance(FERVEX, 1, "0");
    }).toThrow(new Error("args 'expiresIn' and 'benefit' must be integer"));

    expect(() => {
      DrugFactory.getInstance(HERBAL_TEA, "1", "0");
    }).toThrow(new Error("args 'expiresIn' and 'benefit' must be integer"));
  });

  it("should throw Error because  benefit exceed 50 unit is not int", () => {
    expect(() => {
      DrugFactory.getInstance("test", 1, 51);
    }).toThrow(new Error("benefit can't exceed 50"));
  });
});
