import { Drug, Pharmacy } from "./pharmacy";
import {fs} from 'fs';

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it('should return the same output file', () => {
    var fs = require('fs');
    var tmpBuf = fs.readFileSync('output_v1.txt');
    var testBuf = fs.readFileSync('output.txt');
    
    expect(tmpBuf.equals(testBuf)).toEqual(true);
    
  });

});
