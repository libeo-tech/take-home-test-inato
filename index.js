import { Drug, Pharmacy } from "./pharmacy";
import { computeLogs } from "./computeLogs";
import { writeResults } from "./writeResult";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new Drug("Magic Pill", 15, 40),
];

const trial = new Pharmacy(drugs);

const log = computeLogs(trial, 30);

writeResults(log);
