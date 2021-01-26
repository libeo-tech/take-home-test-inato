import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  describe("When it is normal drug", () => {
    it("Should never get a negative benefit (min == 0)", () => {
      expect(
        new Pharmacy([new Drug("test", 1, 0)]).updateBenefitValue()
      ).toEqual([new Drug("test", 0, 0)]);
    });

    /**
     * Only Herbal Tea & Fervex could increase in benefits actually
     * That' why it's used for this tests
     * */
    it("Should never get a benefit more than 50 (max == 50)", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", -1, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -2, 50)]);
    });

    describe("When expiration has passed", () => {
      it("Should degrade benefit twice as fast", () => {
        expect(
          new Pharmacy([new Drug("test", -1, 10)]).updateBenefitValue()
        ).toEqual([new Drug("test", -2, 8)]);
      });
    });
  });

  describe("When it is Herbal Tea", () => {
    it("Should increase benefit twice as fast after the expiration", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", -1, 20)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -2, 22)]);
    });
  });

  describe("When it is Fervex", () => {
    describe("When expiration is < 10 days but > 5 days", () => {
      it("Should increase benefit by 2 ", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 7, 12)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 6, 14)]);
      });
    });

    describe("When expiration is < 5 days", () => {
      it("Should increase benefit by 3", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 3, 12)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 2, 15)]);
      });
    });

    describe("When expiration has passed", () => {
      it("Should drop benefit to 0", () => {
        expect(
          new Pharmacy([new Drug("Fervex", -1, 12)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", -2, 0)]);
      });
    });
  });

  describe("When it is Magic Pill", () => {
    it("Should never change expiration or benefit ", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 7, 12)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 7, 12)]);
    });
  });

  // TODO: activate after implementing Dafalgan business rule
  describe.skip("When it is Dafalgan", () => {
    describe("When expiration has passed", () => {
      it("Should degrade benefit twice as fast as normal drugs", () => {
        expect(
          new Pharmacy([new Drug("Dafalgan", -1, 12)]).updateBenefitValue()
        ).toEqual([new Drug("Dafalgan", -2, 10)]);
      });
    });
  });
});
