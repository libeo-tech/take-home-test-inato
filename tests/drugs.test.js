import drugFactory, { Defalgan, Drug, Fervex, HerbalTea, MagicPill } from "../model/drugs";

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


describe("The drug factory", () => {
  it("instantiates a Herbal Tea when the name of the drug is 'Herbal Tea'", () => {
    expect(new drugFactory("Herbal Tea", 12, 10)).toBeInstanceOf(HerbalTea);
  });

  it("instantiates a Magic Pill when the name of the drug is 'Magic Pill'", () => {
    expect(new drugFactory("Magic Pill", 12, 10)).toBeInstanceOf(MagicPill);
  });

  it("instantiates a Fervex when the name of the drug is 'Fervex'", () => {
    expect(new drugFactory("Fervex", 12, 10)).toBeInstanceOf(Fervex);
  });

  it("instantiates a Defalgan Tea when the name of the drug is 'Defalgan'", () => {
    expect(new drugFactory("Defalgan", 12, 10)).toBeInstanceOf(Defalgan);
  });

  it("instantiates a normal Drug for other names", () => {
    expect(new drugFactory("Doliprane", 12, 10).constructor.name).toEqual("Drug");
  });
})
