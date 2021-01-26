import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  describe("When it is normal drug", () => {
    it("Should never get a negative benefit (min == 0)", () => {
      throw Error("TO BE IMPLEMENTED");
    });

    it("Should never get a benefit more than 50 (max == 50)", () => {
      throw Error("TO BE IMPLEMENTED");
    });

    describe("When expiration has passed", () => {
      it("Should degrade benefit twice as fast", () => {
        throw Error("TO BE IMPLEMENTED");
      });
    });
  });

  describe("When it is Herbal Tea", () => {
    it("Should increase benefit twice as fast after the expiration", () => {
      throw Error("TO BE IMPLEMENTED");
    });
  });

  describe("When it is Fervex", () => {
    describe("When expiration is < 10 days but > 5 days", () => {
      it("Should increase benefit by 2 ", () => {
        throw Error("TO BE IMPLEMENTED");
      });
    });

    describe("When expiration is < 5 days", () => {
      it("Should increase benefit by 3", () => {
        throw Error("TO BE IMPLEMENTED");
      });
    });

    describe("When expiration has passed", () => {
      it("Should drop benefit to 0", () => {
        throw Error("TO BE IMPLEMENTED");
      });
    });
  });

  describe("When it is Dafalgan", () => {
    describe("When expiration has passed", () => {
      it("Should degrade benefit twice as fast as normal drugs", () => {
        throw Error("TO BE IMPLEMENTED");
      });
    });
  });
});
