import { Drug, Pharmacy } from "./types";

import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new Drug("Magic Pill", 15, 40),
];
const trial = new Pharmacy(drugs);

let log = "";

const nbDays = 30;

for (let elapsedDays = 0; elapsedDays < nbDays; elapsedDays++) {
  log += JSON.stringify(trial.updateBenefitValue());

  if (elapsedDays !== nbDays - 1) {
    log += ",";
  }
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log, (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
