import { runTrial, getTrialData } from "./src/trial";

runTrial(getTrialData(), "output.txt", err => {
  /* eslint-disable no-console */
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
  /* eslint-enable no-console */
});
