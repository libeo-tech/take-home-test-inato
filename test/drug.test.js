import Drug, { Dafalgan, Fervex, HerbalTea, MagicPill } from "../src/drug";

describe("Drug", function() {
  test("Should decrease de benefit of one", function() {
    const myDrug = new Drug("MyDrug", 12, 5);
    myDrug.decreaseBenefit();
    expect(myDrug).toEqual(new Drug("MyDrug", 12, 4));
  });
  test("Should decrease de benefit of one", function() {
    const myDrug = new Drug("MyDrug", 12, 5);
    myDrug.increaseBenefit();
    expect(myDrug).toEqual(new Drug("MyDrug", 12, 6));
  });
  test("Should decrease the expireIn of one Day", function() {
    const myDrug = new Drug("MyDrug", 12, 5);
    myDrug.updateExpiresIn();
    expect(myDrug).toEqual(new Drug("MyDrug", 11, 5));
  });
  test("Benefit of an item should never negative", function() {
    const myDrug = new Drug("MyDrug", 12, 2);
    myDrug.decreaseBenefit();
    myDrug.decreaseBenefit();
    myDrug.decreaseBenefit();
    expect(myDrug).toEqual(new Drug("MyDrug", 12, 0));
  });
  test("Benefit of an item should never more than 50", function() {
    const myDrug = new Drug("MyDrug", 12, 50);
    myDrug.increaseBenefit();
    expect(myDrug).toEqual(new Drug("MyDrug", 12, 50));
  });

  describe("MagicPill", function() {
    test("Should never expires nor decreases in Benefit", function() {
      const magicPill = new MagicPill(1, 1);
      magicPill.decreaseBenefit();
      magicPill.decreaseBenefit();
      magicPill.updateExpiresIn();
      magicPill.updateExpiresIn();
      expect(magicPill).toEqual(new MagicPill(1, 1));
    });
  });

  describe("HerbalTea", function() {
    test("Should increases in Benefit the older it gets", function() {
      const herbaltea = new HerbalTea(5, 1);
      herbaltea.updateBenefitAfterOneDay();
      herbaltea.updateBenefitAfterOneDay();
      expect(herbaltea).toEqual(new HerbalTea(3, 3));
    });

    test("Benefit should twice as fast after the expiration date.", function() {
      const herbaltea = new HerbalTea(0, 1);
      herbaltea.updateBenefitAfterOneDay();
      expect(herbaltea).toEqual(new HerbalTea(-1, 3));
    });
  });

  describe("Fervex", function() {
    test("Should benefit increases by 2 when there are 10 days or less of expiration date", function() {
      const fervex = new Fervex(10, 1);
      fervex.updateBenefitAfterOneDay();
      expect(fervex).toEqual(new Fervex(9, 3));
    });
    test("Should benefit increases by 3 when there are 5 days or less of expiration date", function() {
      const fervex = new Fervex(5, 1);
      fervex.updateBenefitAfterOneDay();
      expect(fervex).toEqual(new Fervex(4, 4));
    });
    test("Should benefit drops to 0 after the expiration date", function() {
      const fervex = new Fervex(0, 1);
      fervex.updateBenefitAfterOneDay();
      expect(fervex).toEqual(new Fervex(-1, 0));
    });
  });

  describe("Dafalgan", function() {
    test("Should degrades in Benefit twice as fast as normal drugs", () => {
      const dafalgan = new Dafalgan(25, 4);
      dafalgan.updateBenefitAfterOneDay();
      expect(dafalgan).toEqual(new Dafalgan(24, 2));
    });
  });
});
