"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrugFactory = void 0;
var drug_1 = require("../../config/drug");
var MagicPill_1 = require("../../models/MagicPill");
var Fervex_1 = require("../../models/Fervex");
var Dafalgan_1 = require("../../models/Dafalgan");
var HerbalTea_1 = require("../../models/HerbalTea");
var Drug_1 = require("../../models/Drug");
var DrugFactory = /** @class */ (function () {
    function DrugFactory() {
    }
    DrugFactory.createDrug = function (name, expiresIn, benefit) {
        if (name === drug_1.DRUG_NAME.MAGIC_PILL) {
            return new MagicPill_1.MagicPill(name, expiresIn, benefit);
        }
        if (name === drug_1.DRUG_NAME.HERBAL_TEA) {
            return new HerbalTea_1.HerbalTea(name, expiresIn, benefit);
        }
        if (name === drug_1.DRUG_NAME.DAFALGAN) {
            return new Dafalgan_1.Dafalgan(name, expiresIn, benefit);
        }
        if (name === drug_1.DRUG_NAME.FERVEX) {
            return new Fervex_1.Fervex(name, expiresIn, benefit);
        }
        return new Drug_1.Drug(name, expiresIn, benefit);
    };
    return DrugFactory;
}());
exports.DrugFactory = DrugFactory;
