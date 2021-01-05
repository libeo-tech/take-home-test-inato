import { Drug, Pharmacy } from "./pharmacy";

//Doliprane
describe("Pharmacy", () => {
  it("Doliprane decreases the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Doliprane", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Doliprane", 1, 2)]);
  });
});

//Doliprane with benefit 0
describe("Pharmacy", () => {
  it("Doliprane keeps the benefit and decreases expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Doliprane", 2, 0)]).updateBenefitValue()
    ).toEqual([new Drug("Doliprane", 1, 0)]);
  });
});

//Doliprane with benefit 0
describe("Pharmacy", () => {
  it("Doliprane decreases the benefit twice and decreases expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Doliprane", 0, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Doliprane", -1, 3)]);
  });
});

//Herbal Tea
describe("Pharmacy", () => {
  it("Herbal Tea increases the benefit and decreases expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 4, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 3, 3)]);
  });
});

//Herbal Tea with benefit 50
describe("Pharmacy", () => {
  it("Herbal Tea keeps the benefit and decreases expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 4, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 3, 50)]);
  });
});

//Herbal Tea with expiresIn 0
describe("Pharmacy", () => {
  it("Herbal Tea increases the benefit twice and decreases expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 47)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 49)]);
  });
});

//Herbal Tea with expiresIn 1
describe("Pharmacy", () => {
  it("Herbal Tea increases the benefit and decreases expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 1, 47)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 0, 48)]);
  });
});

//Herbal Tea with expiresIn 0 and benefit 49
describe("Pharmacy", () => {
  it("Herbal Tea keeps benefit and decreases expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 49)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 49)]);
  });
});

//Magic Pill
describe("Pharmacy", () => {
  it("Nothing happens to Magic Pill", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 1, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 1, 1)]);
  });
});

//Fervex with expiresIn > 10
describe("Pharmacy", () => {
  it("Fervex with expiresIn 11 increases benefit and decreases expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 11, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 10, 2)]);
  });
});

//Fervex with expiresIn < 11
describe("Pharmacy", () => {
  it("Fervex with expiresIn 10 increases benefit by 2 and decreases expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 3)]);
  });
});

//Fervex with expiresIn < 6
describe("Pharmacy", () => {
  it("Fervex with expiresIn 5 increases benefit by 3 and decreases expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 4)]);
  });
});

//Fervex with expiresIn < 6 and benefit = 48
describe("Pharmacy", () => {
  it("Fervex with expiresIn 2 keeps benefit and decreases expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 2, 48)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 1, 48)]);
  });
});

//Fervex with expiresIn = 0
describe("Pharmacy", () => {
  it("Fervex with expiresIn 0 drops benefit to 0 and decreases expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
});

//Dafalgan with expiresIn = 5
describe("Pharmacy", () => {
  it("Dafalgan with expiresIn 5 decreases benefit twice and decreases expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 5, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 4, 38)]);
  });
});

//Dafalgan with expiresIn = 0
describe("Pharmacy", () => {
  it("Dafalgan with expiresIn 0 decreases benefit twice and decreases expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 60)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 56)]);
  });
});

//Dafalgan with expiresIn = 0 and benefit = 0
describe("Pharmacy", () => {
  it("Dafalgan with expiresIn 0 and benefit 0 keeps benefit and decreases expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 0)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 0)]);
  });
});
