import { Pharmacy } from "./pharmacy";
import { Drug } from "./Drug";
import makeLog from "./services/makeLog";
import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new Drug("Magic Pill", 15, 40),
  new Drug("Dafalgan", 15, 40)
];

const trial = new Pharmacy(drugs);

/* eslint-disable no-console */
fs.writeFile("output.txt", makeLog(trial, 30), err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
