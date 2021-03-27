import { TrialStateOutputTransport } from "../../src";

export class ResolveStatesOutputTransport implements TrialStateOutputTransport {
  public output(): Promise<void> {
    return Promise.resolve();
  }
}
