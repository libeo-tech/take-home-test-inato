import fs from "fs";

export const writeResults = log => {
  /* eslint-disable no-console */
  fs.writeFile("output.txt", log, err => {
    if (err) {
      console.log("error");
    } else {
      console.log("success");
    }
  });
  /* eslint-enable no-console */
};
