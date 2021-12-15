import { Fervex } from "./fervex";

describe("Fervex", () => {
  describe("when expiresIn > 10", () => {
    const fervex = new Fervex(12, 10);

    it("should descrease expiresIn", () => {
      fervex.decreaseExpiresIn();
      expect(fervex.expiresIn).toBe(11);
      expect(fervex.benefit).toBe(11);
    });
  });

  describe("when expiresIn in [10, 3)", () => {
    const fervex = new Fervex(10, 10);

    it("should descrease expiresIn", () => {
      fervex.decreaseExpiresIn();
      expect(fervex.expiresIn).toBe(9);
      expect(fervex.benefit).toBe(12);
    });
  });

  describe("when expiresIn in [3, 0)", () => {
    const fervex = new Fervex(3, 10);

    it("should descrease expiresIn", () => {
      fervex.decreaseExpiresIn();
      expect(fervex.expiresIn).toBe(2);
      expect(fervex.benefit).toBe(13);
    });
  });

  describe("when expiresIn 0 or less", () => {
    const fervex = new Fervex(1, 10);

    it("should descrease expiresIn", () => {
      fervex.decreaseExpiresIn();
      expect(fervex.expiresIn).toBe(0);
      expect(fervex.benefit).toBe(0);
    });
  });
});
