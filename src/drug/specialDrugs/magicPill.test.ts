import { Drug } from "../drug";

describe("Herbal Tea", () => {
  /* Magic Pill */
  it("[Magic Pill] should never expires nor decreases in benefit", () => {
    let drug = new Drug("Magic Pill", 5, 2);
    drug.update();
    expect(drug).toEqual(new Drug("Magic Pill", 5, 2));

    drug = new Drug("Magic Pill", -2, 5);
    drug.update();
    expect(drug).toEqual(new Drug("Magic Pill", -2, 5));
  });
});
