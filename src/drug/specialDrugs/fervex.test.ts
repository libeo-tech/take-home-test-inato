import { Drug } from "../drug";

describe("Herbal Tea", () => {
  /* Fervex */
  it("[Fervex] should increase before 10 days before expiration", () => {
    let drug = new Drug("Fervex", 15, 10);
    drug.update();
    expect(drug).toEqual(new Drug("Fervex", 14, 11));

    drug = new Drug("Fervex", 20, 0);
    drug.update();
    expect(drug).toEqual(new Drug("Fervex", 19, 1));
  });

  it("[Fervex] should increase*2 between 10 to 5 days before expiration", () => {
    let drug = new Drug("Fervex", 9, 5);
    drug.update();
    expect(drug).toEqual(new Drug("Fervex", 8, 7));

    drug = new Drug("Fervex", 10, 0);
    drug.update();
    expect(drug).toEqual(new Drug("Fervex", 9, 2));

    drug = new Drug("Fervex", 6, 0);
    drug.update();
    expect(drug).toEqual(new Drug("Fervex", 5, 2));
  });

  it("[Fervex] should increase*3 between 5 to 0 days before expiration", () => {
    let drug = new Drug("Fervex", 5, 5);
    drug.update();
    expect(drug).toEqual(new Drug("Fervex", 4, 8));

    drug = new Drug("Fervex", 3, 0);
    drug.update();
    expect(drug).toEqual(new Drug("Fervex", 2, 3));
  });
});
