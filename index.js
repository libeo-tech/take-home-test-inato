import {
  Drug,
  Pharmacy
} from "./pharmacy";
import fs from "fs";

const drugs1 = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new Drug("Magic Pill", 15, 40)
];
const drugs2 = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new Drug("Magic Pill", 15, 40)
];
const trial = new Pharmacy(drugs1);
const trial2 = new Pharmacy(drugs2);
const log = [];
const log2 = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
  log2.push(JSON.stringify(trial2.newUpdateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log.toString(), err => {
  if (err) {
    console.log("error");
  }
  else {
    console.log("success");
  }
});

fs.writeFile("output2.txt", log2.toString(), err => {
  if (err) {
    console.log("error");
  }
  else {
    console.log("success");
  }
});
/* eslint-enable no-console */
