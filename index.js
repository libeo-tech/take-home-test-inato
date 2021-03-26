import { FileStatesOutputTransport, StaticDrugStore, runTrial } from "./src";

const store = new StaticDrugStore();
const transport = new FileStatesOutputTransport("output.txt");

runTrial(store, transport).then(
  /* eslint-disable no-console */
  () => console.log("success"),
  () => console.log("error")
  /* eslint-enable no-console */
);
