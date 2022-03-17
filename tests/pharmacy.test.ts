import { Pharmacy } from "../src/pharmacy/Pharmacy";
import { Doliprane } from "../src/drugs/Doliprane";
import { Fervex } from "../src/drugs/Fervex";
import { MagicPill } from "../src/drugs/MagicPill";


test('constructor', () => {
  const doliprane = new Doliprane(13, 14);
  const fervex = new Fervex(14, 15);
  const magicPill = new MagicPill(9, 11);
  const pharmacy = new Pharmacy([doliprane, fervex, magicPill]);

  expect(pharmacy.drugs[0]).toBe(doliprane);
  expect(pharmacy.drugs[1]).toBe(fervex);
  expect(pharmacy.drugs[2]).toBe(magicPill);

});

describe("Testing updateBenefit logic.", () => {

  test("Benefit of Doliprane should decrease.", () => {
    const pharmacyInstance = new Pharmacy([new Doliprane(2, 3)]);

    expect(pharmacyInstance.updateBenefitValue()).toEqual(
      [new Doliprane(1, 2)]
    );
  });
});
