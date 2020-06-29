import {Pharmacy} from "./pharmacy";
import {HerbalTeaDrug} from "./drugs/herbal-tea";
import {FervexDrug} from "./drugs/fervex";
import {Drug} from "./drugs/drug";
import {MagicPillDrug} from "./drugs/magic-pill";
import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new HerbalTeaDrug(10, 5),
  new FervexDrug(5, 40),
  new MagicPillDrug(15, 40)
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log, err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
