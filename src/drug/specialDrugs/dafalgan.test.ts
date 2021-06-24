import { Drug } from "../drug";
import { SpecialDrugsNames } from "../specialDrugsList";

describe("Dafalgan", () => {
  it("[Dafalgan] should decrease*2 before expiration", () => {
    let drug = new Drug(SpecialDrugsNames.Dafalgan, 9, 5);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.Dafalgan, 8, 3));

    drug = new Drug(SpecialDrugsNames.Dafalgan, 10, 0);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.Dafalgan, 9, 0));
  });

  it("[Dafalgan] should decrease*2 after expiration", () => {
    let drug = new Drug(SpecialDrugsNames.Dafalgan, -1, 5);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.Dafalgan, -2, 1));

    drug = new Drug(SpecialDrugsNames.Dafalgan, -5, 2);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.Dafalgan, -6, 0));
  });
});
