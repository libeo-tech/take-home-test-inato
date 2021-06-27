import { Drug } from "../src/drug";

describe("Drug", () => {
  it.each([["Efferalgan", 2, 3], ["Doliprane", 2, 3], ["Dafalgan", 0, 1]])(
    "%s should decrease the benefit by 1 and expiresIn by 1",
    (name, expiresIn, benefit) => {
      const actual = new Drug(name, expiresIn, benefit).updateBenefitValue();
      const expected = new Drug(name, expiresIn - 1, benefit - 1);
      expect(actual).toEqual(expected);
    }
  );
  it.each([
    ["Doliprane", 0, 10],
    ["Doliprane", 0, 2],
    ["Dafalgan", 2, 3],
    ["Dafalgan", 0, 2]
  ])(
    "%s should decrease the benefit by 2 and expiresIn by 1",
    (name, expiresIn, benefit) => {
      const actual = new Drug(name, expiresIn, benefit).updateBenefitValue();
      const expected = new Drug(name, expiresIn - 1, benefit - 2);
      expect(actual).toEqual(expected);
    }
  );
  it.each([["Dafalgan", 0, 3]])(
    "%s should decrease the benefit by 3 and expiresIn by 1",
    (name, expiresIn, benefit) => {
      const actual = new Drug(name, expiresIn, benefit).updateBenefitValue();
      const expected = new Drug(name, expiresIn - 1, benefit - 3);
      expect(actual).toEqual(expected);
    }
  );
  it.each([["Dafalgan", 0, 4]])(
    "%s should decrease the benefit by 4 and expiresIn by 1",
    (name, expiresIn, benefit) => {
      const actual = new Drug(name, expiresIn, benefit).updateBenefitValue();
      const expected = new Drug(name, expiresIn - 1, benefit - 4);
      expect(actual).toEqual(expected);
    }
  );
  it.each([["Doliprane", 0, 1]])(
    "%s should decrease the benefit by 1 and expiresIn by 1",
    (name, expiresIn, benefit) => {
      const actual = new Drug(name, expiresIn, benefit).updateBenefitValue();
      const expected = new Drug(name, expiresIn - 1, benefit - 1);
      expect(actual).toEqual(expected);
    }
  );
  it.each([["Doliprane", 0, 0]])(
    "%s should not change the benefit and decrease expiresIn by 1",
    (name, expiresIn, benefit) => {
      const actual = new Drug(name, expiresIn, benefit).updateBenefitValue();
      const expected = new Drug(name, expiresIn - 1, benefit);
      expect(actual).toEqual(expected);
    }
  );
  it.each([["Herbal Tea", 10, 5], ["Herbal Tea", 8, 7], ["Fervex", 12, 40]])(
    "%s should decrease the benefit by 1 and increase expiresIn by 1",
    (name, expiresIn, benefit) => {
      const actual = new Drug(name, expiresIn, benefit).updateBenefitValue();
      const expected = new Drug(name, expiresIn - 1, benefit + 1);
      expect(actual).toEqual(expected);
    }
  );
  it.each([["Fervex", 5, 40], ["Fervex", 5, 47]])(
    "%s should increase the benefit by 3 and decrease expiresIn by 1",
    (name, expiresIn, benefit) => {
      const actual = new Drug(name, expiresIn, benefit).updateBenefitValue();
      const expected = new Drug(name, expiresIn - 1, benefit + 3);
      expect(actual).toEqual(expected);
    }
  );
  it.each([["Fervex", 10, 40], ["Fervex", 5, 48], ["Herbal Tea", 0, 40]])(
    "%s should increase the benefit by 2 and decrease expiresIn by 1",
    (name, expiresIn, benefit) => {
      const actual = new Drug(name, expiresIn, benefit).updateBenefitValue();
      const expected = new Drug(name, expiresIn - 1, benefit + 2);
      expect(actual).toEqual(expected);
    }
  );
  it.each([["Fervex", 5, 49], ["Herbal Tea", 0, 49], ["Herbal Tea", 5, 49]])(
    "%s should increase the benefit by 1 and decrease expiresIn by 1",
    (name, expiresIn, benefit) => {
      const actual = new Drug(name, expiresIn, benefit).updateBenefitValue();
      const expected = new Drug(name, expiresIn - 1, benefit + 1);
      expect(actual).toEqual(expected);
    }
  );
  it.each([["Fervex", 5, 50], ["Herbal Tea", 0, 50], ["Herbal Tea", 5, 50]])(
    "%s should not change the benefit and decrease expiresIn by 1",
    (name, expiresIn, benefit) => {
      const actual = new Drug(name, expiresIn, benefit).updateBenefitValue();
      const expected = new Drug(name, expiresIn - 1, benefit);
      expect(actual).toEqual(expected);
    }
  );
  it.each([["Fervex", 0, 1], ["Fervex", 0, 30], ["Fervex", 0, 50]])(
    "%s should drop the benefit to 0 and decrease expiresIn by 1",
    (name, expiresIn, benefit) => {
      const actual = new Drug(name, expiresIn, benefit).updateBenefitValue();
      const expected = new Drug(name, expiresIn - 1, 0);
      expect(actual).toEqual(expected);
    }
  );
  it.each([["Magic Pill", 15, 40]])(
    "%s should not change",
    (name, expiresIn, benefit) => {
      const actual = new Drug(name, expiresIn, benefit).updateBenefitValue();
      const expected = new Drug(name, expiresIn, benefit);
      expect(actual).toEqual(expected);
    }
  );
});
