import {
  FileStatesOutputTransport,
  StaticDrugStore,
  TrialService
} from "./src";

const store = new StaticDrugStore();
const transport = new FileStatesOutputTransport("output.txt");

new TrialService(store, transport).run().then(
  /* eslint-disable no-console */
  () => console.log("success"),
  () => console.log("error")
  /* eslint-enable no-console */
);
