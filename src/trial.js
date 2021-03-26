import { Pharmacy } from "./Pharmacy";

export function runTrial(store, transport) {
  const drugs = store.load();
  const trial = new Pharmacy(drugs);

  const states = [];

  for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
    trial.updateBenefitValue();
    states.push(trial.getState());
  }

  return transport.output(states);
}
