import { Drug } from "../drug";
import { SpecialDrugsNames } from "../specialDrugsList";

describe(SpecialDrugsNames.HerbalTea, () => {
  /* Herbal Tea */
  it("[Herbal Tea] should increase benefit and decrease expiresIn before expiration", () => {
    let drug = new Drug(SpecialDrugsNames.HerbalTea, 5, 2);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.HerbalTea, 4, 3));

    drug = new Drug(SpecialDrugsNames.HerbalTea, 2, 5);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.HerbalTea, 1, 6));
  });

  it("[Herbal Tea] should increase benefit*2 and decrease expiresIn after expiration", () => {
    let drug = new Drug(SpecialDrugsNames.HerbalTea, 0, 2);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.HerbalTea, -1, 4));

    drug = new Drug(SpecialDrugsNames.HerbalTea, -2, 5);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.HerbalTea, -3, 7));
  });

  it("[Herbal Tea] benefit should never be above 50", () => {
    let drug = new Drug(SpecialDrugsNames.HerbalTea, 5, 50);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.HerbalTea, 4, 50));

    drug = new Drug(SpecialDrugsNames.HerbalTea, -2, 50);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.HerbalTea, -3, 50));

    drug = new Drug(SpecialDrugsNames.HerbalTea, 5, 60);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.HerbalTea, 4, 50));

    drug = new Drug(SpecialDrugsNames.HerbalTea, -5, 49);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.HerbalTea, -6, 50));
  });
});
