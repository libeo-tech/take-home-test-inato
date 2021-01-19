import DrugFactory from "./services/DrugFactory";

import fs from "fs";
const drugs = [
  DrugFactory.getInstance("Doliprane", 20, 30),
  DrugFactory.getInstance("Herbal Tea", 10, 5),
  DrugFactory.getInstance("Fervex", 5, 40),
  DrugFactory.getInstance("Magic Pill", 15, 40),
];
//const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(drugs.map((drug) => drug.updateBenefitValue())));
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
