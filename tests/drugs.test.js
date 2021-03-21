import { Defalgan, Drug, Fervex, HerbalTea, MagicPill } from "../model/drugs";

describe("Drug", () => {
  it("should decrease in Benefit and expiresIn", () => {
    expect(new Drug("test", 2, 3).updateBenefit()).toEqual(new Drug("test", 1, 2));
  });

  it("should decrease in Benefit twice faster after expiration date", () => {
    expect(new Drug("test", -1, 3).updateBenefit()).toEqual(new Drug("test", -2, 1));
  });
});

describe("Herbal Tea", () => {
  it("should increase in Benefit and decrease expiresIn", () => {
    expect(new HerbalTea("Herbal Tea", 2, 3).updateBenefit()).toEqual(new HerbalTea("Herbal Tea", 1, 4));
  });

  it("should increase in Benefit twice faster after expiration date", () => {
    expect(new HerbalTea("Herbal Tea", -1, 3).updateBenefit()).toEqual(new HerbalTea("Herbal Tea", -2, 5));
  });
});

describe("Magic Pill", () => {
  it("never decreases in Benefit nor expires", () => {
    expect(new MagicPill("Magic Pill", 1, 1).updateBenefit()).toEqual(new MagicPill("Magic Pill", 1, 1));
  });
});


describe("Fervex", () => {
  it("increases in Benefit as its expiration date approaches", () => {
    expect(new Fervex("Fervex", 12, 1).updateBenefit()).toEqual(new Fervex("Fervex", 11, 2));
  });

  it("increases in Benefit by 2 when there are 10 days or less before the expiration date", () => {
    expect(new Fervex("Fervex", 10, 1).updateBenefit()).toEqual(new Fervex("Fervex", 9, 3));
  });

  it("increases in Benefit by 3 when there are 5 days or less before the expiration date", () => {
    expect(new Fervex("Fervex", 5, 1).updateBenefit()).toEqual(new Fervex("Fervex", 4, 4));
  });

  it("drops in Benefit to 0 after the expiration date", () => {
    expect(new Fervex("Fervex", 0, 78).updateBenefit()).toEqual(new Fervex("Fervex", -1, 0));
  });
});

describe("Defalgan", () => {
    it("degrades in Benefit twice as fast as normal drugs.", () => {
      expect(new Defalgan("Defalgan", 12, 10).updateBenefit()).toEqual(new Defalgan("Defalgan", 11, 8));
    });
  });
  