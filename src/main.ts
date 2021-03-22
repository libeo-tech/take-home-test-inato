import { DegradingDrug, HerbalTea, Fervex, MagicPill, Pharmacy } from "./index";

import fs from "fs";

const drugs = [
  new DegradingDrug("Doliprane", 20, 30),
  new HerbalTea(10, 5),
  new Fervex(5, 40),
  new MagicPill(15, 40)
];
const trial = new Pharmacy(drugs);

const log: string[] = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  trial.updateBenefitValue();
  log.push(JSON.stringify(trial.drugs));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log.join(","), err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
