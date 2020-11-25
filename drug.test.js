import Drug from "./drug.js";

describe("Drug", () => {
  it("should decrease the expiresIn and benefit", () => {
    expect(new Drug("test", 2, 3).updateDrugValues()).toEqual("test", 1, 2);
  });

  it("should decrease the expiresIn and degrades benefit twice if expiration date is passed", () => {
    expect(new Drug("test", 0, 3).updateDrugValues()).toEqual("test", -1, 1);
  });

  it("should decrease the expiresIn and degrades benefit once if expiration date is 0", () => {
    expect(new Drug("test", 1, 3).updateDrugValues()).toEqual(("test", 0, 2));
  });

  it("should decrease the expiresIn and benefit is never negative", () => {
    expect(new Drug("test", -1, 0).updateDrugValues()).toEqual(("test", -2, 0));
  });

  it("should decrease the expiresIn and increase the benefit, if 'Herbal Tea'", () => {
    expect(new Drug("Herbal Tea", 4, 5).updateDrugValues()).toEqual(
      ("Herbal Tea", 3, 6)
    );
  });

  it("should decrease the expiresIn and increase the benefit twice, if 'Herbal Tea' and expiration date is passed", () => {
    expect(new Drug("Herbal Tea", 0, 5).updateDrugValues()).toEqual(
      ("Herbal Tea", -1, 7)
    );
  });

  it("should decrease the expiresIn and benefit is never more than 50", () => {
    expect(new Drug("Herbal Tea", 4, 50).updateDrugValues()).toEqual(
      ("Herbal Tea", 3, 50)
    );
  });

  it("should neither decrease the expiresIn nor the benefit, if 'Magic Pill'", () => {
    expect(new Drug("Magic Pill", 3, 23).updateDrugValues()).toEqual(
      ("Magic Pill", 3, 23)
    );
  });

  it("should decrease the expiresIn and increase the benefit, if 'Fervex'", () => {
    expect(new Drug("Fervex", 12, 12).updateDrugValues()).toEqual(
      ("Fervex", 11, 13)
    );
  });

  it("should decrease the expiresIn and increase the benefit twice, if 'Fervex' and expiration is 10 days or less", () => {
    expect(new Drug("Fervex", 10, 3).updateDrugValues()).toEqual(
      ("Fervex", 9, 5)
    );
  });

  it("should decrease the expiresIn and increase the benefit thrice, if 'Fervex' and expiration is 5 days or less", () => {
    expect(new Drug("Fervex", 5, 3).updateDrugValues()).toEqual(
      ("Fervex", 4, 6)
    );
  });

  it("should decrease the expiresIn and reduce the benefit to 0, if 'Fervex' and expiration date is passed", () => {
    expect(new Drug("Fervex", -1, 3).updateDrugValues()).toEqual(
      ("Fervex", -2, 0)
    );
  });

  it("should decrease the expiresIn and degrades the benefit twice, if 'Dafalgan'", () => {
    expect(new Drug("Dafalgan", 10, 3).updateDrugValues()).toEqual(
      ("Dafalgan", 9, 1)
    );
  });
});
