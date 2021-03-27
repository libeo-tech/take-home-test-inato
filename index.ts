import {
  FileTrialStateOutputTransport,
  StaticDrugStore,
  TrialService,
} from "./src";

void (async () => {
  const store = new StaticDrugStore();
  const transport = new FileTrialStateOutputTransport("output.txt");

  try {
    await new TrialService(store, transport).run();
    console.log("success"); // eslint-disable-line no-console
  } catch (e) {
    console.log("error"); // eslint-disable-line no-console
  }
})();
