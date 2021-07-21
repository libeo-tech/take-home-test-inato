"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalDrug = void 0;
var drug_1 = require("../modules/drug");
var NormalDrug = /** @class */ (function (_super) {
    __extends(NormalDrug, _super);
    function NormalDrug(name, benefit, expiresIn) {
        return _super.call(this, name, expiresIn, benefit) || this;
    }
    NormalDrug.prototype.updateBenefit = function () {
        this.benefit = this.decrementBenefit(this.expiresIn < 0 ? 2 : 1);
    };
    NormalDrug.prototype.updateExpireIn = function () {
        this.expiresIn = this.expiresIn - 1;
    };
    return NormalDrug;
}(drug_1.Drug));
exports.NormalDrug = NormalDrug;
