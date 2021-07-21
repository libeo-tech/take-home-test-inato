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
exports.Fervex = void 0;
var Drug_1 = require("./Drug");
var Fervex = /** @class */ (function (_super) {
    __extends(Fervex, _super);
    function Fervex(name, expiresIn, benefit) {
        return _super.call(this, name, expiresIn, benefit) || this;
    }
    Fervex.prototype.updateBenefit = function () {
        if (this.expiresIn < 0) {
            this.benefit = 0;
        }
        else if (this.expiresIn <= 5) {
            this.benefit = this.incrementBenefit(3);
        }
        else if (this.expiresIn <= 10) {
            this.benefit = this.incrementBenefit(2);
        }
        else {
            this.benefit = this.incrementBenefit(1);
        }
    };
    return Fervex;
}(Drug_1.Drug));
exports.Fervex = Fervex;
