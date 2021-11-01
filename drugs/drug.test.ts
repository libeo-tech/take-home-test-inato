import { Drug, MIN_BENEFIT, MAX_BENEFIT } from "./drug";

describe("Drug", () => {
  describe("Limits to the benefit", () => {
    it("should never compute a benefit smaller than the minimal value", () => {
      const drug = new Drug("test", 2, MIN_BENEFIT);
      expect(drug.benefit).toEqual(MIN_BENEFIT);
    });

    it("should never compute a benefit greater than the maximal value", () => {
      const drug = new Drug("Herbal Tea", 2, MAX_BENEFIT);
      expect(drug.benefit).toEqual(MAX_BENEFIT);
    });
  });

  describe("Generic drug", () => {
    it("should decrease the benefit before expiration", () => {
      const drug = new Drug("test", 2, 3);
      drug.update();
      expect(drug.benefit).toEqual(2);
    });

    it("should decrease the benefit twice as fast after the expiration", () => {
      const drug = new Drug("test", 0, 3);
      drug.update();
      expect(drug.benefit).toEqual(1);
    });

    it("should decrease the expiration date", () => {
      const drug = new Drug("test", 2, 3);
      drug.update();
      expect(drug.expiresIn).toEqual(1);
    });
  });

  describe("Herbal Tea", () => {
    it("should increase the benefit before expiration", () => {
      const drug = new Drug("Herbal Tea", 2, 3);
      drug.update();
      expect(drug.benefit).toEqual(4);
    });

    it("should increase the benefit twice as fast after expiration", () => {
      const drug = new Drug("Herbal Tea", 0, 3);
      drug.update();
      expect(drug.benefit).toEqual(5);
    });

    it("should decrease the expiration date", () => {
      const drug = new Drug("Herbal Tea", 2, 3);
      drug.update();
      expect(drug.expiresIn).toEqual(1);
    });
  });

  describe("Magic Pill", () => {
    it("should never lose benefit", () => {
      const drug = new Drug("Magic Pill", 2, 3);
      drug.update();
      expect(drug.benefit).toEqual(3);
    });

    it("should never expire", () => {
      const drug = new Drug("Magic Pill", 2, 3);
      drug.update();
      expect(drug.expiresIn).toEqual(2);
    });
  });

  describe("Fervex", () => {
    it("should increase the benefit before expiration", () => {
      const drug = new Drug("Fervex", 15, 3);
      drug.update();
      expect(drug.benefit).toEqual(4);
    });

    it("should increase the benefit by 2 when 10 days or less before expiration", () => {
      const drug = new Drug("Fervex", 10, 3);
      drug.update();
      expect(drug.benefit).toEqual(5);
      drug.update();
      expect(drug.benefit).toEqual(7);
    });

    it("should increase the benefit by 3 when 5 days or less before expiration", () => {
      const drug = new Drug("Fervex", 5, 3);
      drug.update();
      expect(drug.benefit).toEqual(6);
      drug.update();
      expect(drug.benefit).toEqual(9);
    });

    it("should drop the benefit to 0 after expiration", () => {
      const drug = new Drug("Fervex", 0, 10);
      drug.update();
      expect(drug.benefit).toEqual(0);
    });

    it("should decrease the expiration date", () => {
      const drug = new Drug("Fervex", 2, 3);
      drug.update();
      expect(drug.expiresIn).toEqual(1);
    });
  });

  describe("Dafalgan", () => {
    it("should decrease the benefit before expiration", () => {
      const drug = new Drug("Dafalgan", 2, 3);
      drug.update();
      expect(drug.benefit).toEqual(1);
    });

    it("should decrease the benefit twice as fast after the expiration", () => {
      const drug = new Drug("Dafalgan", 0, 10);
      drug.update();
      expect(drug.benefit).toEqual(6);
    });

    it("should decrease the expiration date", () => {
      const drug = new Drug("Dafalgan", 2, 3);
      drug.update();
      expect(drug.expiresIn).toEqual(1);
    });
  });
});
