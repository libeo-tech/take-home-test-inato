import { Drug } from "../drug";
import { SpecialDrugsNames } from "../specialDrugsList";

describe("Herbal Tea", () => {
  /* Magic Pill */
  it("[Magic Pill] should never expires nor decreases in benefit", () => {
    let drug = new Drug(SpecialDrugsNames.MagicPill, 5, 2);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.MagicPill, 5, 2));

    drug = new Drug(SpecialDrugsNames.MagicPill, -2, 5);
    drug.update();
    expect(drug).toEqual(new Drug(SpecialDrugsNames.MagicPill, -2, 5));
  });
});
