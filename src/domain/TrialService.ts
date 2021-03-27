import { Pharmacy } from "./Pharmacy";
import { DrugStore } from "./DrugStore";
import { PharmacyDrugStateOutputTransport } from "./PharmacyDrugStateOutputTransport";
import { PharmacyDrugState } from "./PharmacyDrugState";

export class TrialService {
  constructor(
    private readonly store: DrugStore,
    private readonly transport: PharmacyDrugStateOutputTransport
  ) {}

  public async run(): Promise<void> {
    const pharmacy = new Pharmacy(this.store.load());

    const states: PharmacyDrugState[][] = [];

    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      pharmacy.updateBenefitValue();
      states.push(pharmacy.getState());
    }

    return this.transport.output(states);
  }
}
