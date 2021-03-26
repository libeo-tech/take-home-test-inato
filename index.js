import { runTrial } from "./trial";

runTrial("output.txt", err => {
  /* eslint-disable no-console */
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
  /* eslint-enable no-console */
});
