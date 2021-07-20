"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pharmacy = void 0;
var Pharmacy = /** @class */ (function () {
    function Pharmacy(drugs) {
        if (drugs === void 0) { drugs = []; }
        this.drugs = [];
        this.drugs = drugs;
    }
    Pharmacy.prototype.updateBenefitValue = function () {
        var _this = this;
        this.drugs = this.drugs.map(function (drug) {
            if (drug.name === "Magic Pill")
                return drug;
            drug.expiresIn = drug.expiresIn - 1;
            if (drug.name === "Fervex") {
                if (drug.expiresIn < 0) {
                    drug.benefit = 0;
                }
                else if (drug.expiresIn <= 5) {
                    drug.benefit = _this.incrementBenefit(drug, 3);
                }
                else if (drug.expiresIn <= 10) {
                    drug.benefit = _this.incrementBenefit(drug, 2);
                }
                else {
                    drug.benefit = _this.incrementBenefit(drug, 1);
                }
                return drug;
            }
            if (drug.name === "Herbal Tea") {
                drug.benefit = _this.incrementBenefit(drug, drug.expiresIn < 0 ? 2 : 1);
                return drug;
            }
            if (drug.name === "Dafalgan") {
                drug.benefit = _this.decrementBenefit(drug, drug.expiresIn < 0 ? 4 : 2);
            }
            else {
                drug.benefit = _this.decrementBenefit(drug, drug.expiresIn < 0 ? 2 : 1);
            }
            return drug;
        });
        return this.drugs;
    };
    Pharmacy.prototype.incrementBenefit = function (drug, amount) {
        return drug.benefit + amount < 50 ? drug.benefit + amount : 50;
    };
    Pharmacy.prototype.decrementBenefit = function (drug, amount) {
        return drug.benefit - amount > 0 ? drug.benefit - amount : 0;
    };
    return Pharmacy;
}());
exports.Pharmacy = Pharmacy;
