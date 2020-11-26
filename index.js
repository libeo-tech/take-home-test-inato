import { Drug, Pharmacy } from "./pharmacy";

import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5, {
    benefit: { 50: "+1", 0: "+2" },
    expirable: true
  }),
  new Drug("Fervex", 5, 40, {
    benefit: { 10: "+2", 5: "+3", 0: "*0", default: "+1" },
    expirable: true
  }),
  new Drug("Magic Pill", 15, 40, {
    benefit: { default: "+0" },
    expirable: false
  })
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log.toString(), err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
