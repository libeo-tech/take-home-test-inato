import { Pharmacy } from "./pharmacy";
import { Drug } from "./drug";

const herbalTea = "Herbal Tea";
const fervex = "Fervex";
const magicPills = "Magic Pill";
const dafalgan = 'Dalagan';


const fs = require("fs");
const outputFilePromises = ["output.txt", "expected_output.txt"].map(function(_path) {
  return new Promise(
    function(_path, resolve) {
      fs.readFile(_path, "utf8", function(err, data) {
        if (err) {
          resolve(null);
        } else {
          resolve(data);
        }
      });
    }.bind(this, _path)
  );
});

describe("Pharmacy", () => {

  it("should respect Normal Medicine specifications", ()=>{
    expect(
      new Pharmacy([new Drug("test", 2, 1)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 0)]);

    expect(
      new Pharmacy([new Drug("test", 2, 100)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 50)]);

    expect(
      new Pharmacy([new Drug("test", 2, -2)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 0)]);
  })

  it("should respect Magic Pill specifications (increasevalues as in get old. Increase benefit increases by 2 when there are 10 days or les. Increase Benefit by 3 when there are 5 days. Drop 0 when expires", ()=>{
    expect(
      new Pharmacy([new Drug(magicPills, 1, 1)]).updateBenefitValue()
    ).toEqual([new Drug(magicPills, 1, 1)]);

  })
  it("should respect Fervex specifications (Increase values as in get old. Increase benefit increases by 2 when there are 10 days or les. Increase Benefit by 3 when there are 5 days. Drop 0 when expires", ()=>{
    expect(
      new Pharmacy([new Drug(fervex, 1, 1)]).updateBenefitValue()
    ).toEqual([new Drug(fervex, 0, 4)]);

    expect(
      new Pharmacy([new Drug(fervex, 6, 1)]).updateBenefitValue()
    ).toEqual([new Drug(fervex, 5, 3)]);

    expect(
      new Pharmacy([new Drug(fervex, 11, 1)]).updateBenefitValue()
    ).toEqual([new Drug(fervex, 10, 2)]);

    expect(
      new Pharmacy([new Drug(fervex, 0, 10)]).updateBenefitValue()
    ).toEqual([new Drug(fervex, -1, 0)]);
  })
  xit("should respect Herbal tea specifications (increase by getting old, benefit increases twice as fast after the expiration date.)", ()=>{
  
    expect(
      new Pharmacy([new Drug(herbalTea, 1, 1)]).updateBenefitValue()
    ).toEqual([new Drug(herbalTea, 0, 2)]);

    expect(
      new Pharmacy([new Drug(herbalTea, 0, 10)]).updateBenefitValue()
    ).toEqual([new Drug(herbalTea, -1, 12)]);
  })

  it("should return the exact same output file", () => {
    Promise.all(outputFilePromises).then(function(results){
      expect(results[0]).toEqual(results[1])
    })
  });


});
