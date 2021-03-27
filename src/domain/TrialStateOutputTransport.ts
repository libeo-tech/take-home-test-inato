import { TrialState } from "./TrialState";

export interface TrialStateOutputTransport {
  output(states: TrialState): Promise<void>;
}
