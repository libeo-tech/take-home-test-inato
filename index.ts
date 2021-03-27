import {
  FileStatesOutputTransport,
  StaticDrugStore,
  TrialService,
} from "./src";

const store = new StaticDrugStore();
const transport = new FileStatesOutputTransport("output.txt");

void (async () => {
  try {
    await new TrialService(store, transport).run();
    console.log("success"); // eslint-disable-line no-console
  } catch (e) {
    console.log("error"); // eslint-disable-line no-console
  }
})();
