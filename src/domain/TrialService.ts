import { Pharmacy } from "./Pharmacy";
import { DrugStore } from "./DrugStore";
import { TrialStateOutputTransport } from "./TrialStateOutputTransport";
import { PharmacyDrugState } from "./PharmacyDrugState";
import { TrialState } from "./TrialState";

export class TrialService {
  constructor(
    private readonly store: DrugStore,
    private readonly transport: TrialStateOutputTransport
  ) {}

  public async run(): Promise<TrialState> {
    const pharmacy = new Pharmacy(this.store.load());

    const states: PharmacyDrugState[][] = [];

    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      pharmacy.updateBenefitValue();
      states.push(pharmacy.getState());
    }

    await this.transport.output(states);

    return states;
  }
}
