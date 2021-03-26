import { runTrial } from "./src/trial";
import { FileStatesOutputTransport } from "./src/FileStatesOutputTransport";
import { StaticDrugStore } from "./src/StaticDrugStore";

const store = new StaticDrugStore();
const transport = new FileStatesOutputTransport("output.txt");

runTrial(store, transport).then(
  /* eslint-disable no-console */
  () => console.log("success"),
  () => console.log("error")
  /* eslint-enable no-console */
);
