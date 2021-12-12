import { Drug } from "./drug.js";

describe("Random drug", () => {
  it("Should update expiresIn and benefit when not expired", () => {
    let drug = new Drug("Random drug", 15, 10);
    drug.updateBenefits();
    expect(drug).toEqual(new Drug("Random drug", 14, 9));
  });
  it("Should update expiresIn and benefit when expired", () => {
    let drug = new Drug("Random drug", -2, 10);
    drug.updateBenefits();
    expect(drug).toEqual(new Drug("Random drug", -3, 8));
  });
  it("Should keep benefit inside the normal range", () => {
    let drug = new Drug("Random drug", -2, 0);
    drug.updateBenefits();
    expect(drug).toEqual(new Drug("Random drug", -3, 0));
  });
});

describe("Dafalgan", () => {
  it("Should update expiresIn and benefit when not expired", () => {
    let drug = new Drug("Dafalgan", 15, 10);
    drug.updateBenefits();
    expect(drug).toEqual(new Drug("Dafalgan", 14, 8));
  });
  it("Should update expiresIn and benefit when expired", () => {
    let drug = new Drug("Dafalgan", -2, 10);
    drug.updateBenefits();
    expect(drug).toEqual(new Drug("Dafalgan", -3, 6));
  });
  it("Should keep benefit inside the normal range", () => {
    let drug = new Drug("Dafalgan", -2, 0);
    drug.updateBenefits();
    expect(drug).toEqual(new Drug("Dafalgan", -3, 0));
  });
});

describe("Fervex", () => {
  it("Should update expiresIn and benefit when not expired", () => {
    let drug = new Drug("Fervex", 15, 10);
    drug.updateBenefits();
    expect(drug).toEqual(new Drug("Fervex", 14, 10));
  });
  it("Should update expiresIn and benefit when not expired", () => {
    let drug = new Drug("Fervex", 8, 10);
    drug.updateBenefits();
    expect(drug).toEqual(new Drug("Fervex", 7, 12));
  });
  it("Should update expiresIn and benefit when not expired", () => {
    let drug = new Drug("Fervex", 5, 10);
    drug.updateBenefits();
    expect(drug).toEqual(new Drug("Fervex", 4, 13));
  });
  it("Should update expiresIn and benefit when expired", () => {
    let drug = new Drug("Fervex", -2, 10);
    drug.updateBenefits();
    expect(drug).toEqual(new Drug("Fervex", -3, 0));
  });
  it("Should keep benefit inside the normal range", () => {
    let drug = new Drug("Fervex", -2, 0);
    drug.updateBenefits();
    expect(drug).toEqual(new Drug("Fervex", -3, 0));
  });
  it("Should keep benefit inside the normal range", () => {
    let drug = new Drug("Fervex", 8, 50);
    drug.updateBenefits();
    expect(drug).toEqual(new Drug("Fervex", 7, 50));
  });
});

describe("Herbal Tea", () => {
  it("Should update expiresIn and benefit when not expired", () => {
    let drug = new Drug("Herbal Tea", 15, 10);
    drug.updateBenefits();
    expect(drug).toEqual(new Drug("Herbal Tea", 14, 11));
  });
  it("Should update expiresIn and benefit when expired", () => {
    let drug = new Drug("Herbal Tea", -2, 10);
    drug.updateBenefits();
    expect(drug).toEqual(new Drug("Herbal Tea", -3, 12));
  });
  it("Should keep benefit inside the normal range", () => {
    let drug = new Drug("Herbal Tea", 8, 50);
    drug.updateBenefits();
    expect(drug).toEqual(new Drug("Herbal Tea", 7, 50));
  });
});

describe("Magic Pill", () => {
  it("Should keep expiresIn and benefit when not expired", () => {
    let drug = new Drug("Magic Pill", 15, 10);
    drug.updateBenefits();
    expect(drug).toEqual(new Drug("Magic Pill", 15, 10));
  });
  it("Should keep expiresIn and benefit when expired", () => {
    let drug = new Drug("Magic Pill", -2, 10);
    drug.updateBenefits();
    expect(drug).toEqual(new Drug("Magic Pill", -2, 10));
  });
  it("Should keep benefit inside the normal range", () => {
    let drug = new Drug("Magic Pill", 8, 53);
    drug.updateBenefits();
    expect(drug).toEqual(new Drug("Magic Pill", 8, 50));
  });
});
