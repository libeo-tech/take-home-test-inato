import { PharmacyDrugState } from "./PharmacyDrugState";

export interface PharmacyDrugStateOutputTransport {
  output(states: PharmacyDrugState[][]): Promise<void>;
}
