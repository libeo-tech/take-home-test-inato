import { Drug, Pharmacy } from "./pharmacy";
import fs from "fs";
const { execSync } = require("child_process");

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});

describe("Pharmacy output.txt", () => {
  it("should be equals to original output-original.txt", () => {
    const original = fs.readFileSync("./output-original.txt");

    // Make sure the command is successful
    // @todo toContain on output is a weak check, maybe check command return code instead
    expect(execSync("docker-compose up").toString()).toContain("success");

    expect(fs.readFileSync("./output.txt").toString()).toEqual(
      original.toString()
    );
  });
});

// Test all the specs described in the README

// Once the expiration date has passed, Benefit degrades twice as fast.
describe("Benefit", () => {
  it("should degrades twice as fast once the expiration date has passed", () => {
    const pharmacy = new Pharmacy([new Drug("test", 2, 10)]);

    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("test", 1, 9)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("test", 0, 8)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("test", -1, 6)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("test", -2, 4)]);
  });
});

// The Benefit of an item is never negative.
describe("Benefit", () => {
  it("should never be negative", () => {
    const pharmacy = new Pharmacy([new Drug("test", 2, 2)]);

    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("test", 1, 1)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("test", 0, 0)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("test", -1, 0)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("test", -2, 0)]);
  });
});

// "Herbal Tea" actually increases in Benefit the older it gets. Benefit increases twice as fast after the expiration date.
describe("Herbal Tea", () => {
  it("should increases in Benefit the older it gets", () => {
    const pharmacy = new Pharmacy([new Drug("Herbal Tea", 2, 2)]);

    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Herbal Tea", 1, 3)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Herbal Tea", 0, 4)]);
    // Benefit increases twice as fast after the expiration date
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Herbal Tea", -1, 6)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Herbal Tea", -2, 8)]);
  });
});

// The Benefit of an item is never more than 50.
describe("Drug's benefit", () => {
  it("should never be more than 50", () => {
    const pharmacy = new Pharmacy([new Drug("Herbal Tea", 2, 49)]);

    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Herbal Tea", 1, 50)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Herbal Tea", 0, 50)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Herbal Tea", -1, 50)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Herbal Tea", -2, 50)]);

    // @todo add test case for drugs that increases their benefit over time
  });
});

// "Magic Pill" never expires nor decreases in Benefit.
describe("Magic Pill", () => {
  it("should never expires nor decreases in Benefit", () => {
    const pharmacy = new Pharmacy([new Drug("Magic Pill", 2, 2)]);

    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Magic Pill", 2, 2)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Magic Pill", 2, 2)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Magic Pill", 2, 2)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Magic Pill", 2, 2)]);
  });
});

// "Fervex", like Herbal Tea, increases in Benefit as its expiration date approaches.
// Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Benefit drops to 0
// after the expiration date.
describe("Fervex", () => {
  it("should increases in Benefit as its expiration date approaches", () => {
    const pharmacy = new Pharmacy([new Drug("Fervex", 12, 2)]);

    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 11, 3)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 10, 5)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 9, 7)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 8, 9)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 7, 11)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 6, 13)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 5, 16)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 4, 19)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 3, 22)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 2, 25)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 1, 28)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 0, 31)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", -1, 0)]);
  });
});

// "Dafalgan" degrades in Benefit twice as fast as normal drugs.
describe("Dafalgan", () => {
  it("should degrades in Benefit twice as fast as normal drugs", () => {
    const pharmacy = new Pharmacy([new Drug("Dafalgan", 2, 10)]);

    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Dafalgan", 1, 8)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Dafalgan", 0, 6)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Dafalgan", -1, 2)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Dafalgan", -2, 0)]);
  });
});
