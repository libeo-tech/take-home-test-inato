import { Pharmacy } from "./Pharmacy";

export class TrialService {
  constructor(store, transport) {
    this.store = store;
    this.transport = transport;
  }

  run() {
    const trial = new Pharmacy(this.store.load());

    const states = [];

    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      trial.updateBenefitValue();
      states.push(trial.getState());
    }

    return this.transport.output(states);
  }
}
