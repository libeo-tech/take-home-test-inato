import { runTrial, getTrialData } from "./src/trial";
import { FileStatesOutputTransfort } from "./src/FileStatesOutputTransfort";

const transport = new FileStatesOutputTransfort("output.txt");
runTrial(getTrialData(), transport).then(
  /* eslint-disable no-console */
  () => console.log("success"),
  () => console.log("error")
  /* eslint-enable no-console */
);
