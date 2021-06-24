import { Drug } from "../drug";
import { SpecialDrugsNames } from "../specialDrugsList";

describe("Herbal Tea", () => {
  /* Fervex */
  it("[Fervex] should increase before 10 days before expiration", () => {
    let drug = new Drug(SpecialDrugsNames.Fervex, 15, 10);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.Fervex, 14, 11));

    drug = new Drug(SpecialDrugsNames.Fervex, 20, 0);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.Fervex, 19, 1));
  });

  it("[Fervex] should increase*2 between 10 to 5 days before expiration", () => {
    let drug = new Drug(SpecialDrugsNames.Fervex, 9, 5);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.Fervex, 8, 7));

    drug = new Drug(SpecialDrugsNames.Fervex, 10, 0);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.Fervex, 9, 2));

    drug = new Drug(SpecialDrugsNames.Fervex, 6, 0);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.Fervex, 5, 2));
  });

  it("[Fervex] should increase*3 between 5 to 0 days before expiration", () => {
    let drug = new Drug(SpecialDrugsNames.Fervex, 5, 5);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.Fervex, 4, 8));

    drug = new Drug(SpecialDrugsNames.Fervex, 3, 0);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.Fervex, 2, 3));
  });
});
