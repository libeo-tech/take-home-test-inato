import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("Once the expiration date has passed, Benefit degrades twice as fast", ()=>{
    expect(new Pharmacy([new Drug("test", -1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -2, 1)]
    );
  })
  it("'Magic Pill' never expires nor decreases in Benefit.",()=>{
    expect(new Pharmacy([new Drug("Magic Pill", -1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", -1, 3)]
    );
  })
  it("The Benefit of an item is never negative.", ()=>{
    expect(new Pharmacy([new Drug("test", -1, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", -2, 0)]
    );
  })
  it("The Benefit of an item is never more than 50.", ()=>{
    expect(new Pharmacy([new Drug("test", 2, 50)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 49)]
    );
    expect(new Pharmacy([new Drug("test", 2, 51)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 50)]
    );
    expect(new Pharmacy([new Drug("Magic Pill", 2, 53)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 50)]
    );
    expect(new Pharmacy([new Drug("Fervex", 2, 53)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 1, 50)]
    );
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 53)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 50)]
    );
  })
  it(`"'Fervex', like Herbal Tea, increases in Benefit as its expiration date approaches.
  Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days"
  or less but Benefit drops to 0 after the expiration date."`, ()=>{
    expect(new Pharmacy([new Drug("Fervex", 9, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 8, 5)]
    );
    expect(new Pharmacy([new Drug("Fervex", 4, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 3, 6)]
    );
  })
});
