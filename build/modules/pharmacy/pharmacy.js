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
        this.drugs.forEach(function (drug) {
            drug.updateExpireIn();
            drug.updateBenefit();
        });
        return this.drugs;
    };
    return Pharmacy;
}());
exports.Pharmacy = Pharmacy;
