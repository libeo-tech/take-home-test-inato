import Drug from "./drug.js";

describe("Drug", () => {
  it("should decrease the expiresIn and benefit", () => {
    expect(new Drug("test", 2, 3).updateDrugValues()).toEqual({
      name: "test",
      expiresIn: 1,
      benefit: 2
    });
  });

  it("should decrease the expiresIn and degrades benefit twice if expiration date is passed", () => {
    expect(new Drug("test", 0, 3).updateDrugValues()).toEqual({
      name: "test",
      expiresIn: -1,
      benefit: 1
    });
  });

  it("should decrease the expiresIn and degrades benefit once if expiration date is 0", () => {
    expect(new Drug("test", 1, 3).updateDrugValues()).toEqual({
      name: "test",
      expiresIn: 0,
      benefit: 2
    });
  });

  it("should decrease the expiresIn and benefit is never negative", () => {
    expect(new Drug("test", -1, 0).updateDrugValues()).toEqual({
      name: "test",
      expiresIn: -2,
      benefit: 0
    });
  });

  it("should decrease the expiresIn and increase the benefit, if 'Herbal Tea'", () => {
    expect(new Drug("Herbal Tea", 4, 5).updateDrugValues()).toEqual({
      name: "Herbal Tea",
      expiresIn: 3,
      benefit: 6
    });
  });

  it("should decrease the expiresIn and increase the benefit twice, if 'Herbal Tea' and expiration date is passed", () => {
    expect(new Drug("Herbal Tea", 0, 5).updateDrugValues()).toEqual({
      name: "Herbal Tea",
      expiresIn: -1,
      benefit: 7
    });
  });

  it("should decrease the expiresIn and benefit is never more than 50", () => {
    expect(new Drug("Herbal Tea", 4, 50).updateDrugValues()).toEqual({
      name: "Herbal Tea",
      expiresIn: 3,
      benefit: 50
    });
  });

  it("should neither decrease the expiresIn nor the benefit, if 'Magic Pill'", () => {
    expect(new Drug("Magic Pill", 3, 23).updateDrugValues()).toEqual({
      name: "Magic Pill",
      expiresIn: 3,
      benefit: 23
    });
  });

  it("should decrease the expiresIn and increase the benefit, if 'Fervex'", () => {
    expect(new Drug("Fervex", 12, 12).updateDrugValues()).toEqual({
      name: "Fervex",
      expiresIn: 11,
      benefit: 13
    });
  });

  it("should decrease the expiresIn and increase the benefit twice, if 'Fervex' and expiration is 10 days or less", () => {
    expect(new Drug("Fervex", 10, 3).updateDrugValues()).toEqual({
      name: "Fervex",
      expiresIn: 9,
      benefit: 5
    });
  });

  it("should decrease the expiresIn and increase the benefit thrice, if 'Fervex' and expiration is 5 days or less", () => {
    expect(new Drug("Fervex", 5, 3).updateDrugValues()).toEqual({
      name: "Fervex",
      expiresIn: 4,
      benefit: 6
    });
  });

  it("should decrease the expiresIn and reduce the benefit to 0, if 'Fervex' and expiration date is passed", () => {
    expect(new Drug("Fervex", -1, 3).updateDrugValues()).toEqual({
      name: "Fervex",
      expiresIn: -2,
      benefit: 0
    });
  });

  it("should decrease the expiresIn and degrades the benefit twice, if 'Dafalgan'", () => {
    expect(new Drug("Dafalgan", 10, 3).updateDrugValues()).toEqual({
      name: "Dafalgan",
      expiresIn: 9,
      benefit: 1
    });
  });
});
