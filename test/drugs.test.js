import { Drug } from "../src/drugs";

describe.each([
  ["test", 2, 3, 1, 2],
  ["Herbal Tea", 2, 3, 1, 4],
  ["Magic Pill", 2, 3, 2, 3],
  ["Fervex", 2, 3, 1, 6],
  ["Dafalgan", 2, 3, 1, 1]
])(
  "Drug %s",
  (name, expiresIn, benefit, expectedExpiresIn, expectedBenefit) => {
    it("should update the benefit and expiresIn", () => {
      expect(new Drug(name, expiresIn, benefit).updateBenefit()).toEqual(
        new Drug(name, expectedExpiresIn, expectedBenefit)
      );
    });
  }
);
