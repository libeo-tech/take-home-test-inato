import { Dafalgan, Drug, Fervex, HerbalTea, MagicPill } from "../DrugClasses";
import { Pharmacy } from ".";

describe("Pharmacy", () => {
  it("should decrease the Benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });
});

describe("Benefit", () => {
  it("Once the expiration date has passed, Benefit degrades twice as fast.", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 6)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 4)]);
  });
  test("The Benefit of an item can't be superior to 50 at instantiation.", () => {
    expect(() => {
      new Drug("test", 2, 51);
    }).toThrow(" Benefit > 50 !");
  });
  it("The Benefit of an item is never superior to 50 after been updated.", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 50)]);
  });
  test("The Benefit of an item can't be negative at instantiation.", () => {
    expect(() => {new Drug("test", 2, -1)}).toThrow(" Benefit negative ! ");
  });
  it("The Benefit of an item is never negative after been updated.", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 0)]);
  });
});

describe("Herbal Tea", () => {
  it("Herbal Tea should increases in Benefit the older it gets.", () => {
    expect(new Pharmacy([new HerbalTea(2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 4)]
    );
  });
  it("Herbal Tea should increases twice as fast after the expiration date.", () => {
    expect(new Pharmacy([new HerbalTea(0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 5)]
    );
  });
  it("Herbal Tea Benefit should not be over 50 after the expiration date.", () => {
    expect(new Pharmacy([new HerbalTea(0, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 50)]
    );
  });
  it("Herbal Tea Benefit should not be over 50 after the expiration date", () => {
    expect(new Pharmacy([new HerbalTea(0, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 50)]
    );
  });
});

describe("Magic Pill", () => {
  it("Magic Pill should never expires nor decreases in Benefit.", () => {
    expect(new Pharmacy([new MagicPill(2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 3)]
    );
  });
});

describe("Fervex", () => {
  it("Fervex Benefit should increases by 1 when expiration date is over 10 days.", () => {
    expect(new Pharmacy([new Fervex(11, 2)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 10, 3)]
    );
  });
  it("Fervex Benefit should increases by 2 when expiration date is equal to 10 days or less.", () => {
    expect(new Pharmacy([new Fervex(10, 2)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 4)]
    );
  });
  it("Fervex Benefit should increases by 2 when expiration date is equal to 10 days or less.", () => {
    expect(new Pharmacy([new Fervex(6, 2)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 5, 4)]
    );
  });
  it("Fervex Benefit should increases by 3 when expiration date is equal to 5 days or less.", () => {
    expect(new Pharmacy([new Fervex(5, 2)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 5)]
    );
  });
  it("Fervex Benefit should drop to 0 after the expiration date.", () => {
    expect(new Pharmacy([new Fervex(0, 2)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });
  it("Fervex Benefit increases 2x time faster must be equal or less than 50", () => {
    expect(new Pharmacy([new Fervex(7, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 6, 50)]
    );
  });
  it("Fervex Benefit increases 3x time faster must be equal or less than 50", () => {
    expect(new Pharmacy([new Fervex(2, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 1, 50)]
    );
  });

});

describe("Dafalgan", () => {
  it("Dafalgan should decreases 2x faster in Benefit the older it gets.", () => {
    expect(new Pharmacy([new Dafalgan(2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 1)]
    );
  });
  it("Dafalgan Benefit should not be negative.", () => {
    expect(new Pharmacy([new Dafalgan(2, 1)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 0)]
    );
  });
  it("Dafalgan should decreases of 0 if Benefit is equal to 0", () => {
    expect(new Pharmacy([new Dafalgan(0, 4)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -1, 0)]
    );
  });
  it("-0 : Dafalgan decreases 4x faster in Benefit should not be negative.", () => {
    expect(new Pharmacy([new Dafalgan(-1, 0)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -2, 0)]
    );
  });
  it("-1 : Dafalgan decreases 4x faster in Benefit should not be negative.", () => {
    expect(new Pharmacy([new Dafalgan(-1, 1)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -2, 0)]
    );
  });
  it("-2 : Dafalgan decreases 4x faster in Benefit should not be negative.", () => {
    expect(new Pharmacy([new Dafalgan(-1, 2)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -2, 0)]
    );
  });
  it("-3 : Dafalgan decreases 4x faster in Benefit should not be negative.", () => {
    expect(new Pharmacy([new Dafalgan(-1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -2, 0)]
    );
  });
});
