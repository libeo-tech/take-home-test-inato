import { runTrial, getTrialData } from "./src/trial";
import { FileStatesOutputTransport } from "./src/FileStatesOutputTransport";

const transport = new FileStatesOutputTransport("output.txt");
runTrial(getTrialData(), transport).then(
  /* eslint-disable no-console */
  () => console.log("success"),
  () => console.log("error")
  /* eslint-enable no-console */
);
