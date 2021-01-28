import { Drug, Pharmacy } from "./pharmacy";

import fs from "fs";

const getData = () => {
  const drugs = [
    new Drug("Doliprane", 20, 30),
    new Drug("Herbal Tea", 10, 5),
    new Drug("Fervex", 5, 40),
    new Drug("Magic Pill", 15, 40)
  ];
  const trial = new Pharmacy(drugs);

  return { trial, drugs }
}

const generateOuput = () => {
  const { trial, drugs } = getData()

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

  /* beautify output.txt as formatted json */
  // fs.writeFile("output.json", JSON.stringify(JSON.parse(`[${log}]`), null, 4), err => {
  //   if (err) {
  //     console.log("error");
  //   } else {
  //     console.log("success");
  //   }
  // });
}

generateOuput()
/* eslint-enable no-console */
