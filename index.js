import fs from "fs";

import {Pharmacy} from "./src/pharmacy";
import {Drug} from "./src/drug";
import {Fervex} from "./src/fervex";
import {MagicPill} from "./src/magic-pill";
import {HerbalTea} from "./src/herbal-tea";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new HerbalTea(10, 5),
  new Fervex(5, 40),
  new MagicPill(15, 40)
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
