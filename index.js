import { Drug, Pharmacy } from "./pharmacy";

import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new Drug("Magic Pill", 15, 40),
];
const trial = new Pharmacy(drugs);

export const generateOutput = () => {
  let log = {};
  for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
    log[elapsedDays] = trial.updateBenefitValue();
  }
  return log;
};

/* eslint-disable no-console */
fs.writeFile("output.txt", JSON.stringify(generateOutput()), (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
