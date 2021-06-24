import { Drug } from "./drug";

describe("Drug", () => {
  /* Default Drug */
  it("[Default Drug] should decrease the benefit and expiresIn before expiration", () => {
    const drug = new Drug("test", 2, 3);
    drug.update();
    expect(drug).toEqual(new Drug("test", 1, 2));
  });

  it("[Default Drug] should decrease the benefit*2 and expiresIn after expiration", () => {
    let drug = new Drug("test", -1, 3);
    drug.update();
    expect(drug).toEqual(new Drug("test", -2, 1));

    drug = new Drug("test", 0, 3);
    drug.update();
    expect(drug).toEqual(new Drug("test", -1, 1));
  });

  it("[Default Drug] benefit should not be negative", () => {
    let drug = new Drug("test", 5, 0);
    drug.update();
    expect(drug).toEqual(new Drug("test", 4, 0));

    drug = new Drug("test", -5, 0);
    drug.update();
    expect(drug).toEqual(new Drug("test", -6, 0));

    /*
    * TODO: Failing test, the output should never be negative even if input is
    expect(
      new Pharmacy([new Drug("test", -5, -10)]).updateBenefitValue()
    ).toEqual([new Drug("test", -6, 0)]);
    */
  });
});
