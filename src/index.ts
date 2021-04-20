import { Drug, Fervex, HerbalTea, MagicPill, Pharmacy } from "./feature";

import * as fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30, true),
  new HerbalTea("Herbal Tea", 10, 5, true),
  new Fervex("Fervex", 5, 40, true),
  new MagicPill("Magic Pill", 15, 40, true),
];
const trial = new Pharmacy(drugs);

const log: string[] = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  const drugs = trial.updateBenefitValue(elapsedDays + 1);
  log.push(JSON.stringify(drugs));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log.join(","), (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
