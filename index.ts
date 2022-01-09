import fs from "fs";

import { Drug, Pharmacy } from "./pharmacy";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new Drug("Magic Pill", 15, 40)
];
const pharmacy = new Pharmacy(drugs);

const logs: string[] = [];

for (var elapsedDays = 0; elapsedDays < 30; elapsedDays += 1) {
  logs.push(JSON.stringify(pharmacy.updateBenefitValue()));
}

fs.writeFile("output.txt", logs.toString(), err =>
  // eslint-disable-next-line no-console
  err ? console.log("error") : console.log("success")
);
