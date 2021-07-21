"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drug = void 0;
var Drug = /** @class */ (function () {
    function Drug(name, expiresIn, benefit) {
        this.name = name;
        this.expiresIn = expiresIn;
        this.benefit = benefit;
    }
    Drug.prototype.updateBenefit = function () {
        this.benefit = this.decrementBenefit(this.expiresIn < 0 ? 2 : 1);
    };
    Drug.prototype.updateExpireIn = function () {
        this.expiresIn = this.expiresIn - 1;
    };
    Drug.prototype.incrementBenefit = function (amount) {
        return this.benefit + amount < 50 ? this.benefit + amount : 50;
    };
    Drug.prototype.decrementBenefit = function (amount) {
        return this.benefit - amount > 0 ? this.benefit - amount : 0;
    };
    return Drug;
}());
exports.Drug = Drug;
