import { Pharmacy } from "./models/pharmacy";
import { Drug } from "./models/drug"

import fs from "fs";

import { range } from "./helper"

const NUMBER_OF_DAYS = 30

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new Drug("Magic Pill", 15, 40),
  new Drug("Dafalgan", 20, 5)
];
const trial = new Pharmacy(drugs);

const log = range(NUMBER_OF_DAYS).map(() => JSON.stringify(trial.updateBenefitValue().map(drug => ({ name: drug.name, expiresIn: drug.expiresIn, benefit: drug.benefit }))))

/* eslint-disable no-console */
fs.writeFile("output.txt", log, err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
