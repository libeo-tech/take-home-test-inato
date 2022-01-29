import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });

  it("should decrease benefit", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });

  it("should increase benefit", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3, "increase")]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 4, "increase")]);
  });

  it("should not have negative benefit", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 0)]);
  });

  it("should not have benefit more than 50", () => {
    expect(
      new Pharmacy([new Drug("test", 5, 50, "increase")]).updateBenefitValue()
    ).toEqual([new Drug("test", 4, 50, "increase")]);
  });

  it("should decrease the benefit twice as fast when expiration date has passed", () => {
    expect(
      new Pharmacy([new Drug("test", -1, 10)]).updateBenefitValue()
    ).toEqual([new Drug("test", -2, 8)]);
  });

  it("should not decrease expiresIn when hasExpirationDate is false", () => {
    expect(
      new Pharmacy([
        new Drug("test", 2, 3, null, 1, false)
      ]).updateBenefitValue()
    ).toEqual([new Drug("test", 2, 3, null, 1, false)]);
  });

  it("should not decrease benefit when benefitEffect is null", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3, null)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 3, null)]);
  });

  it("should decrease the benefit twice as fast as normal drug", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3, "decrease", 2)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 1, "decrease", 2)]);
  });

  it("should benefit drops to 0 when hasBenefitAfterExpiration is false and expiration date has passed", () => {
    expect(
      new Pharmacy([
        new Drug("test", 0, 21, "decrease", 1, true, false)
      ]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 0, "decrease", 1, true, false)]);
  });

  it("should decrease the benefit by benefitMultiplier when expiresIn is less than value", () => {
    expect(
      new Pharmacy([
        new Drug("test", 6, 21, "decrease", 1, true, true, [
          { expiresIn: 10, benefitMultiplier: 3 }
        ])
      ]).updateBenefitValue()
    ).toEqual([
      new Drug("test", 5, 18, "decrease", 1, true, true, [
        { expiresIn: 10, benefitMultiplier: 3 }
      ])
    ]);
  });

  describe("Specifics drugs", () => {
    describe("Herbal Tea", () => {
      it("should increase benefit drug", () => {
        expect(
          new Pharmacy([
            new Drug("test", 10, 5, "increase")
          ]).updateBenefitValue()
        ).toEqual([new Drug("test", 9, 6, "increase")]);
      });

      it("should increase benefit twice as fast when expiration date has passed", () => {
        expect(
          new Pharmacy([
            new Drug("test", 0, 5, "increase")
          ]).updateBenefitValue()
        ).toEqual([new Drug("test", -1, 7, "increase")]);
      });
    });

    describe("Fervex", () => {
      it("should increase benefit drug", () => {
        expect(
          new Pharmacy([
            new Drug("test", 11, 21, "increase", 1, true, false, [
              { expiresIn: 10, benefitMultiplier: 2 },
              { expiresIn: 5, benefitMultiplier: 3 }
            ])
          ]).updateBenefitValue()
        ).toEqual([
          new Drug("test", 10, 22, "increase", 1, true, false, [
            { expiresIn: 10, benefitMultiplier: 2 },
            { expiresIn: 5, benefitMultiplier: 3 }
          ])
        ]);
      });

      it("should increase benefit by 2 when there are 10 days", () => {
        expect(
          new Pharmacy([
            new Drug("test", 10, 21, "increase", 1, true, false, [
              { expiresIn: 10, benefitMultiplier: 2 },
              { expiresIn: 5, benefitMultiplier: 3 }
            ])
          ]).updateBenefitValue()
        ).toEqual([
          new Drug("test", 9, 23, "increase", 1, true, false, [
            { expiresIn: 10, benefitMultiplier: 2 },
            { expiresIn: 5, benefitMultiplier: 3 }
          ])
        ]);
      });

      it("should increase benefit by 2 when there are less than 10 days", () => {
        expect(
          new Pharmacy([
            new Drug("test", 9, 21, "increase", 1, true, false, [
              { expiresIn: 10, benefitMultiplier: 2 },
              { expiresIn: 5, benefitMultiplier: 3 }
            ])
          ]).updateBenefitValue()
        ).toEqual([
          new Drug("test", 8, 23, "increase", 1, true, false, [
            { expiresIn: 10, benefitMultiplier: 2 },
            { expiresIn: 5, benefitMultiplier: 3 }
          ])
        ]);
      });

      it("should increase benefit by 3 when there are 5 days", () => {
        expect(
          new Pharmacy([
            new Drug("test", 5, 21, "increase", 1, true, false, [
              { expiresIn: 10, benefitMultiplier: 2 },
              { expiresIn: 5, benefitMultiplier: 3 }
            ])
          ]).updateBenefitValue()
        ).toEqual([
          new Drug("test", 4, 24, "increase", 1, true, false, [
            { expiresIn: 10, benefitMultiplier: 2 },
            { expiresIn: 5, benefitMultiplier: 3 }
          ])
        ]);
      });

      it("should increase benefit by 3 when there are less than 5 days", () => {
        expect(
          new Pharmacy([
            new Drug("test", 4, 21, "increase", 1, true, false, [
              { expiresIn: 10, benefitMultiplier: 2 },
              { expiresIn: 5, benefitMultiplier: 3 }
            ])
          ]).updateBenefitValue()
        ).toEqual([
          new Drug("test", 3, 24, "increase", 1, true, false, [
            { expiresIn: 10, benefitMultiplier: 2 },
            { expiresIn: 5, benefitMultiplier: 3 }
          ])
        ]);
      });

      it("should benefit drops to 0 when expiration date has passed", () => {
        expect(
          new Pharmacy([
            new Drug("test", 0, 21, "increase", 1, true, false, [
              { expiresIn: 10, benefitMultiplier: 2 },
              { expiresIn: 5, benefitMultiplier: 3 }
            ])
          ]).updateBenefitValue()
        ).toEqual([
          new Drug("test", -1, 0, "increase", 1, true, false, [
            { expiresIn: 10, benefitMultiplier: 2 },
            { expiresIn: 5, benefitMultiplier: 3 }
          ])
        ]);
      });
    });

    describe("Magic Pill", () => {
      it("should never expire", () => {
        expect(
          new Pharmacy([
            new Drug("test", 15, 40, null, 1, false)
          ]).updateBenefitValue()
        ).toEqual([new Drug("test", 15, 40, null, 1, false)]);
      });

      it("should never decrease benefit", () => {
        expect(
          new Pharmacy([
            new Drug("test", 15, 40, null, 1, false)
          ]).updateBenefitValue()
        ).toEqual([new Drug("test", 15, 40, null, 1, false)]);
      });
    });

    describe("Dafalgan", () => {
      it("should decrease the benefit twice as fast as normal drug", () => {
        expect(
          new Pharmacy([
            new Drug("test", 2, 3, "decrease", 2)
          ]).updateBenefitValue()
        ).toEqual([new Drug("test", 1, 1, "decrease", 2)]);
      });
    });
  });
});
