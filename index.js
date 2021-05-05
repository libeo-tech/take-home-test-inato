import {
  buildDrug,
  Dafalgan,
  Drug,
  Fervex,
  HerbalTea,
  MagicPill,
  Pharmacy
} from "./pharmacy";

import fs from "fs";

const drugs = [
  buildDrug("Doliprane", 20, 30, Drug),
  buildDrug("Herbal Tea", 10, 5, HerbalTea),
  buildDrug("Fervex", 5, 40, Fervex),
  buildDrug("MagicPill", 15, 40, MagicPill),
  buildDrug("Dafalgan", 15, 40, Dafalgan)
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
