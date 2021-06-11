import { Drug, HerbalTea, MagicPill, Fervex, Pharmacy,Dafalgan } from "./pharmacy";

describe("Drug", () => {
  it("should decrease the benefit ", () => {
    expect(new Drug({name :"test", expiresIn:2,benefit: 3}).decreaseBenefitValue(1)).toEqual(2);
  });
  it("should decrease the benefit ", () => {
    expect(new Drug({name :"test", expiresIn:2,benefit: 0}).decreaseBenefitValue(1)).toEqual(0);
  });

  it("should increase the benefit ", () => {
    expect(new Drug({name :"test", expiresIn:2,benefit: 7}).increaseBenefitValue(1)).toEqual(8);
  });
  it("should increase the benefit ", () => {
    expect(new Drug({name :"test", expiresIn:2,benefit: 50}).increaseBenefitValue(5)).toEqual(50);
  });



  it("should drop the benefit to ZERO ", () => {
    expect(new Drug({name :"test", expiresIn:2,benefit: 50}).dropBenefitToZero(5)).toEqual(0);
  });
  
});

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug({name :"test", expiresIn:2,benefit: 3})]).updateBenefitValue()).toEqual(
      [new Drug({name :"test", expiresIn:1,benefit: 2})]
    );
  });


  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new HerbalTea( { expiresIn: 2, benefit: 3 })]).updateBenefitValue()).toEqual(
      [new HerbalTea( { expiresIn: 1, benefit: 4 })]
    );
  });

  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new HerbalTea( { expiresIn: 2, benefit: 49 })]).updateBenefitValue()).toEqual(
      [new HerbalTea( { expiresIn: 1, benefit: 50 })]
    );
  });
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new HerbalTea( { expiresIn: 2, benefit: 50 })]).updateBenefitValue()).toEqual(
      [new HerbalTea({ expiresIn: 1, benefit: 50 })]
    );
  });

  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new HerbalTea( { expiresIn: -2, benefit: 3 })]).updateBenefitValue()).toEqual(
      [new HerbalTea( { expiresIn: -3, benefit: 5 })]
    );
  });
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new MagicPill({ expiresIn: 2, benefit: 49 })]).updateBenefitValue()).toEqual(
      [new MagicPill( { expiresIn: 2, benefit: 49 })]
    );
  });


  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Fervex( { expiresIn: 9, benefit: 13 })]).updateBenefitValue()).toEqual(
      [new Fervex( { expiresIn: 8, benefit: 15})]
    );
  });
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Fervex( { expiresIn: 4, benefit: 7 })]).updateBenefitValue()).toEqual(
      [new Fervex( { expiresIn: 3, benefit: 10 })]
    );
  });
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Fervex( { expiresIn: -4, benefit: 7 })]).updateBenefitValue()).toEqual(
      [new Fervex( { expiresIn: -5, benefit: 0 })]
    );
  });


  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Dafalgan({ expiresIn: -4, benefit: 7 })]).updateBenefitValue()).toEqual(
      [new Dafalgan( { expiresIn: -5, benefit: 3 })]
    );
  });

  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Dafalgan({ expiresIn: -4, benefit: 2 })]).updateBenefitValue()).toEqual(
      [new Dafalgan( { expiresIn: -5, benefit: 0 })]
    );
  });


  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Dafalgan( { expiresIn: 4, benefit: 2 })]).updateBenefitValue()).toEqual(
      [new Dafalgan({ expiresIn: 3, benefit: 0 })]
    );
  });
});
