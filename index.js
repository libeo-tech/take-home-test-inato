import fs from "fs";
import { generateOutput } from "./generateOuput.js";

/* eslint-disable no-console */
fs.writeFile("output.txt", JSON.stringify(generateOutput()), (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
