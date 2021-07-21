"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pharmacy_1 = require("./pharmacy");
var drug_1 = require("../drug");
describe("Pharmacy", function () {
    it("should decrease the benefit and expiresIn", function () {
        expect(new pharmacy_1.Pharmacy([drug_1.DrugFactory.createDrug("test", 2, 3)]).updateBenefitValue()).toEqual([drug_1.DrugFactory.createDrug("test", 1, 2)]);
    });
    it("should decrease by 2", function () {
        expect(new pharmacy_1.Pharmacy([drug_1.DrugFactory.createDrug("test", 0, 3)]).updateBenefitValue()).toEqual([drug_1.DrugFactory.createDrug("test", -1, 1)]);
    });
    it("should decrease the benefit by 2 for Dafalgan", function () {
        expect(new pharmacy_1.Pharmacy([drug_1.DrugFactory.createDrug("Dafalgan", 2, 3)]).updateBenefitValue()).toEqual([drug_1.DrugFactory.createDrug("Dafalgan", 1, 1)]);
    });
    it("should decrease the benefit by 4 for Dafalgan", function () {
        expect(new pharmacy_1.Pharmacy([drug_1.DrugFactory.createDrug("Dafalgan", 0, 5)]).updateBenefitValue()).toEqual([drug_1.DrugFactory.createDrug("Dafalgan", -1, 1)]);
    });
    it("should not decrease under 0", function () {
        expect(new pharmacy_1.Pharmacy([drug_1.DrugFactory.createDrug("test", 2, 0)]).updateBenefitValue()).toEqual([drug_1.DrugFactory.createDrug("test", 1, 0)]);
    });
    it("should not decrease for Magic Pill", function () {
        expect(new pharmacy_1.Pharmacy([drug_1.DrugFactory.createDrug("Magic Pill", 2, 3)]).updateBenefitValue()).toEqual([drug_1.DrugFactory.createDrug("Magic Pill", 2, 3)]);
    });
    it("should increase 1 for Herbal Tea", function () {
        expect(new pharmacy_1.Pharmacy([drug_1.DrugFactory.createDrug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual([drug_1.DrugFactory.createDrug("Herbal Tea", 1, 4)]);
    });
    it("should increase 2 for Herbal Tea", function () {
        expect(new pharmacy_1.Pharmacy([drug_1.DrugFactory.createDrug("Herbal Tea", 0, 3)]).updateBenefitValue()).toEqual([drug_1.DrugFactory.createDrug("Herbal Tea", -1, 5)]);
    });
    it("should not increase 2 for Herbal Tea in more than 50", function () {
        expect(new pharmacy_1.Pharmacy([drug_1.DrugFactory.createDrug("Herbal Tea", 0, 49)]).updateBenefitValue()).toEqual([drug_1.DrugFactory.createDrug("Herbal Tea", -1, 50)]);
    });
    it("should increase 1 for Fervex", function () {
        expect(new pharmacy_1.Pharmacy([drug_1.DrugFactory.createDrug("Fervex", 12, 3)]).updateBenefitValue()).toEqual([drug_1.DrugFactory.createDrug("Fervex", 11, 4)]);
    });
    it("should increase 2 for Fervex", function () {
        expect(new pharmacy_1.Pharmacy([drug_1.DrugFactory.createDrug("Fervex", 11, 3)]).updateBenefitValue()).toEqual([drug_1.DrugFactory.createDrug("Fervex", 10, 5)]);
    });
    it("should increase 3 for Fervex", function () {
        expect(new pharmacy_1.Pharmacy([drug_1.DrugFactory.createDrug("Fervex", 6, 3)]).updateBenefitValue()).toEqual([drug_1.DrugFactory.createDrug("Fervex", 5, 6)]);
    });
    it("should set benefit to 0 for Fervex", function () {
        expect(new pharmacy_1.Pharmacy([drug_1.DrugFactory.createDrug("Fervex", 0, 3)]).updateBenefitValue()).toEqual([drug_1.DrugFactory.createDrug("Fervex", -1, 0)]);
    });
});
