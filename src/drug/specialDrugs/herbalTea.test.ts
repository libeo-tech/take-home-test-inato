import { Drug } from "../drug";

describe("Herbal Tea", () => {
  /* Herbal Tea */
  it("[Herbal Tea] should increase benefit and decrease expiresIn before expiration", () => {
    let drug = new Drug("Herbal Tea", 5, 2);
    drug.update();
    expect(drug).toEqual(new Drug("Herbal Tea", 4, 3));

    drug = new Drug("Herbal Tea", 2, 5);
    drug.update();
    expect(drug).toEqual(new Drug("Herbal Tea", 1, 6));
  });

  it("[Herbal Tea] should increase benefit*2 and decrease expiresIn after expiration", () => {
    let drug = new Drug("Herbal Tea", 0, 2);
    drug.update();
    expect(drug).toEqual(new Drug("Herbal Tea", -1, 4));

    drug = new Drug("Herbal Tea", -2, 5);
    drug.update();
    expect(drug).toEqual(new Drug("Herbal Tea", -3, 7));
  });

  it("[Herbal Tea] benefit should never be above 50", () => {
    let drug = new Drug("Herbal Tea", 5, 50);
    drug.update();
    expect(drug).toEqual(new Drug("Herbal Tea", 4, 50));

    drug = new Drug("Herbal Tea", -2, 50);
    drug.update();
    expect(drug).toEqual(new Drug("Herbal Tea", -3, 50));

    /*
    * TODO: Failing test, the output should never be above 50 even if input is
    expect(
      new Pharmacy([new Drug("test", 5, 60)]).updateBenefitValue()
    ).toEqual([new Drug("test", 4, 50)]);
    expect(
      new Pharmacy([new Drug("test", -5, 49)]).updateBenefitValue()
    ).toEqual([new Drug("test", -6, 50)]);
    */
  });
});
