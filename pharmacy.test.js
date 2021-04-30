import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("default drugs", () => {
    it("should decrease benefit and expiresIn appropriately", () => {
      expect(
        new Pharmacy([ new Drug("test", 2, 3) ]).updateBenefitValue()
      ).toStrictEqual([ new Drug("test", 1, 2) ]);
    });

    it("should maintain benefit at 0", () => {
      expect(
        new Pharmacy([ new Drug("test", 0, 0) ]).updateBenefitValue()
      ).toStrictEqual([ new Drug("test", -1, 0) ]);
      expect(
        new Pharmacy([ new Drug("test", 1, 0) ]).updateBenefitValue()
      ).toStrictEqual([ new Drug("test", 0, 0) ]);
    });

    it("should decrease benefit by 2 as expiry date has passed", () => {
      expect(
        new Pharmacy([ new Drug("test", 0, 3) ]).updateBenefitValue()
      ).toStrictEqual([ new Drug("test", -1, 1) ]);
    });
  });

  describe("Herbal Tea", () => {
    it("Should increase the benefit instead of decreasing it", () => {
      expect(
        new Pharmacy([ new Drug("Herbal Tea", 5, 5) ]).updateBenefitValue()
      ).toStrictEqual([ new Drug("Herbal Tea", 4, 6) ]);
    });

    it("should maintain the benefit at 50", () => {
      expect(
        new Pharmacy([ new Drug("Herbal Tea", 1, 50) ]).updateBenefitValue()
      ).toStrictEqual([ new Drug("Herbal Tea", 0, 50) ]);
    });

    it("should increase benefit by 2 as expiry date has passed", () => {
      expect(
        new Pharmacy([ new Drug("Herbal Tea", -5, 1) ]).updateBenefitValue()
      ).toStrictEqual([ new Drug("Herbal Tea", -6, 3) ]);
    });
  });

  describe("Magic Pills", () => {
    it("should maintain benefit for Magic Pills", () => {
      expect(
        new Pharmacy([ new Drug("Magic Pill", 1, 10) ]).updateBenefitValue()
      ).toStrictEqual([ new Drug("Magic Pill", 0, 10) ]);
    });
  });

  describe("Fervex", () => {
    it("should increase benefit by 1", () => {
      expect(
        new Pharmacy([ new Drug("Fervex", 20, 3) ]).updateBenefitValue()
      ).toStrictEqual([ new Drug("Fervex", 19, 4) ]);
    });

    it("should increase benefit by 2", () => {
      expect(
        new Pharmacy([ new Drug("Fervex", 8, 4) ]).updateBenefitValue()
      ).toStrictEqual([ new Drug("Fervex", 7, 6) ]);
    });

    it("should increase benefit by 3", () => {
      expect(
        new Pharmacy([ new Drug("Fervex", 2, 4) ]).updateBenefitValue()
      ).toStrictEqual([ new Drug("Fervex", 1, 7) ]);
    });
  });

  describe("Dafalgan", () => {
    it("should decrease benefit by 2", () => {
      expect(
        new Pharmacy([ new Drug("Dafalgan", 10, 2) ]).updateBenefitValue()
      ).toStrictEqual([ new Drug("Dafalgan", 9, 0) ]);
    });

    it("should increase benefit by 4", () => {
      expect(
        new Pharmacy([ new Drug("Dafalgan", 0, 4) ]).updateBenefitValue()
      ).toStrictEqual([ new Drug("Dafalgan", -1, 0) ]);
    });


  });
});
