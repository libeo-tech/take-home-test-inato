"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var pharmacy_1 = require("./modules/pharmacy");
var drug_1 = require("./modules/drug");
var drugs = [
    drug_1.DrugFactory.createDrug("Doliprane", 20, 30),
    drug_1.DrugFactory.createDrug("Herbal Tea", 10, 5),
    drug_1.DrugFactory.createDrug("Fervex", 5, 40),
    drug_1.DrugFactory.createDrug("Magic Pill", 15, 40),
];
var trial = new pharmacy_1.Pharmacy(drugs);
var log = [];
for (var elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
    log.push(JSON.stringify(trial.updateBenefitValue()));
}
/* eslint-disable no-console */
fs_1.default.writeFile("output.txt", log, function (err) {
    if (err) {
        console.log("error");
    }
    else {
        console.log("success");
    }
});
/* eslint-enable no-console */
