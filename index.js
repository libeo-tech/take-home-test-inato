import { Pharmacy } from "./models/pharmacy";
import { DrugName } from "./models/DrugName";
import { Drug } from "./models/Drug";
import fs from "fs";

const drugs = [
  new Drug(DrugName.DOLIPRANE, 20, 30),
  new Drug(DrugName.HERBAL_TEA, 10, 5),
  new Drug(DrugName.FERVEX, 5, 40),
  new Drug(DrugName.MAGIC_PILL, 15, 40)
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
