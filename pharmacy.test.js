import { Pharmacy } from "./pharmacy";
import { Drug } from "./drugs/drug";
import HerbalTea from "./drugs/specificDrugs/herbalTea";
import MagicPill from "./drugs/specificDrugs/magicPill";
import Fervex from "./drugs/specificDrugs/fervex";
import Dafalgan from "./drugs/specificDrugs/dafalgan";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});

describe("Pharmacy", () => {
  it("should decrease expiresIn but the benifit should not go under 0 ", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 0)]
    );
  });
});

describe("Pharmacy", () => {
  it("should decrease expiresIn but the benifit should not go over 50 ", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateBenefitValue()).toEqual(
      [new HerbalTea(1, 50)]
    );
  });
});

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 15, 3)]).updateBenefitValue()).toEqual(
      [new MagicPill(15, 3)]
    );
  });
});

describe("Pharmacy", () => {
  it("should decrease expiresIn and increase the benefit", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual(
      [new HerbalTea(1, 4)]
    );
  });
});

describe("Pharmacy", () => {
  it("should decrease expiresIn and increase the benefit twice as much after expired", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -1, 3)]).updateBenefitValue()).toEqual(
      [new HerbalTea(-2, 5)]
    );
  });
});

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn as normal drug", () => {
    expect(new Pharmacy([new Drug("Fervex", 15, 3)]).updateBenefitValue()).toEqual(
      [new Fervex(14, 4)]
    );
  });
});

describe("Pharmacy", () => {
  it("should decrease expiresIn and increase the benefit by 2", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue()).toEqual(
      [new Fervex(9, 5)]
    );
  });
});

describe("Pharmacy", () => {
  it("should decrease expiresIn and increase the benefit by 3", () => {
    expect(new Pharmacy([new Drug("Fervex", 4, 3)]).updateBenefitValue()).toEqual(
      [new Fervex(3, 6)]
    );
  });
});

describe("Pharmacy", () => {
  it("should decrease expiresIn and set benefit to 0", () => {
    expect(new Pharmacy([new Drug("Fervex", -1, 40)]).updateBenefitValue()).toEqual(
      [new Fervex(-2, 0)]
    );
  });
});

describe("Pharmacy", () => {
  it("should decrease expiresIn and the benefit by 2 ", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()).toEqual(
      [new Dafalgan(1, 1)]
    );
  });
});

describe("Pharmacy", () => {
  it("should decrease expiresIn and the benefit by 4", () => {
    expect(new Pharmacy([new Drug("Dafalgan", -1, 6)]).updateBenefitValue()).toEqual(
      [new Dafalgan(-2, 2)]
    );
  });
});
