import { PharmacyState, TrialState } from "../../src";

interface expectationFn {
  (states: TrialState): void;
}

export class TrialRunResult {
  private expectations: expectationFn[] = [];

  constructor(private statePromise: Promise<TrialState>) {}

  public expectLastPharmacyStateToEqual(state: PharmacyState): this {
    this.expectations.push((states) => {
      expect(states[states.length - 1]).toEqual(state);
    });

    return this;
  }

  public expectDayPharmacyStateToEqual(
    day: number,
    state: PharmacyState
  ): this {
    this.expectations.push((states) => {
      expect(states[day]).toEqual(state);
    });

    return this;
  }

  public async done(): Promise<void> {
    const states = await this.statePromise;
    this.expectations.forEach((fn) => fn(states));
  }
}
