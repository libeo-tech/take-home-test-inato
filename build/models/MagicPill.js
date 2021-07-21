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
exports.MagicPill = void 0;
var Drug_1 = require("./Drug");
var MagicPill = /** @class */ (function (_super) {
    __extends(MagicPill, _super);
    function MagicPill(name, expiresIn, benefit) {
        return _super.call(this, name, expiresIn, benefit) || this;
    }
    MagicPill.prototype.updateBenefit = function () {
        this.benefit = this.benefit;
    };
    MagicPill.prototype.updateExpireIn = function () {
        this.expiresIn = this.expiresIn;
    };
    return MagicPill;
}(Drug_1.Drug));
exports.MagicPill = MagicPill;
