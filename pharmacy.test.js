import { Drug, Pharmacy } from "./pharmacy";
import {fs} from 'fs';

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );

    expect(new Pharmacy([new Drug("test", -2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -3, 1)]
    );
  });

  it('should return the same output file', () => {
    var fs = require('fs');
    var tmpBuf = fs.readFileSync('output_v1.txt');
    var testBuf = fs.readFileSync('output.txt');
    
    expect(tmpBuf.equals(testBuf)).toEqual(true);
    
  });

  it("should increase herbal tea´s benefit with time", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 4)]
    );

    expect(new Pharmacy([new Drug("Herbal Tea", -1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -2, 5)]
    );
  });

  it("should increase fervex´s benefit with time", () => {
    expect(new Pharmacy([new Drug("Fervex", 12, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 11, 4)]
    );

    expect(new Pharmacy([new Drug("Fervex", 7, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 6, 5)]
    );

    expect(new Pharmacy([new Drug("Fervex", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 1, 6)]
    );

    expect(new Pharmacy([new Drug("Fervex", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });

  it("should keep magic pill´s stats constant", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 3)]
    );
  });
  
  it("should decrease dafalgan´s benefit twice as fast", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 1)]
    );

    expect(new Pharmacy([new Drug("Dafalgan", -2, 5)]).updateBenefitValue()).toEqual(
      [new Drug("test", -3, 1)]
    );
  });
});
