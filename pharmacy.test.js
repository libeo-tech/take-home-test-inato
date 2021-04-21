import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {

  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("Once the expiration date has passed, Benefit degrades twice as fast.", () => {
    expect(new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 1)]
    );
  });

  it("The Benefit of an item is never negative.", () => {
    expect(new Pharmacy([new Drug("test", 3, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 2, 0)]
    );
  });

  it("The Benefit of an item is never more than 50.", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 20, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 19, 50)]
    );
  });

  describe("Drugs", () => {
    describe("Magic Pill", () => {
      it("Never expires nor decreases in Benefit", () => {
        expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()).toEqual(
          [new Drug("Magic Pill", 2, 3)]
        );
      });
    });
    describe("Herbal Tea", () => {
      it("Actually increases in Benefit the older it gets.", () => {
        expect(new Pharmacy([new Drug("Herbal Tea", 3, 3)]).updateBenefitValue()).toEqual(
          [new Drug("Herbal Tea", 2, 4)]
        );
      });
      it("Benefit increases twice as fast after the expiration date.", () => {
        expect(new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()).toEqual(
          [new Drug("Herbal Tea", -1, 5)]
        );
      });
    });
    describe("Fervex", () => {
      it("like Herbal Tea, increases in Benefit as its expiration date approaches.", () => {
        expect(new Pharmacy([new Drug("Fervex", 15, 3)]).updateBenefitValue()).toEqual(
          [new Drug("Fervex", 14, 4)]
        );
      });
      it("Benefit increases by 2 when there are 10 days or less", () => {
        expect(new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue()).toEqual(
          [new Drug("Fervex", 9, 5)]
        );
      });
      it("Benefit increases by 3 when there are 5 days or less", () => {
        expect(new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue()).toEqual(
          [new Drug("Fervex", 4, 6)]
        );
      });
      it("Benefit drops to 0 after the expiration date.", () => {
        expect(new Pharmacy([new Drug("Fervex", 0, 3)]).updateBenefitValue()).toEqual(
          [new Drug("Fervex", -1, 0)]
        );
      });
      describe("Dafalgan", () => {
        it("Dafalgan degrades in Benefit twice as fast as normal drugs.", () => {
          expect(new Pharmacy([new Drug("Dafalgan", 5, 5)]).updateBenefitValue()).toEqual(
            [new Drug("Dafalgan", 4, 3)]
          );
        });
      });
    });
  });
});









